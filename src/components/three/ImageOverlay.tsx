'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

// Vertex shader
const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader - solid artistic circle reveal
const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uHover;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform vec2 uResolution;
  
  void main() {
    vec2 uv = vUv;
    float aspectRatio = uResolution.x / uResolution.y;
    
    // Aspect-corrected distance from mouse
    vec2 mouseUV = uMouse;
    vec2 diff = uv - mouseUV;
    diff.x *= aspectRatio;
    float dist = length(diff);
    
    // Solid circle radius with artistic pulsing
    float pulse = sin(uTime * 3.0) * 0.02 + 1.0;
    float radius = 0.2 * pulse * uHover;
    
    // Hard edge with subtle artistic feather
    float mask = 1.0 - smoothstep(radius - 0.005, radius + 0.005, dist);
    mask *= uHover;
    
    // Sample textures with no distortion
    vec4 tex1 = texture2D(uTexture1, uv);
    vec4 tex2 = texture2D(uTexture2, uv);
    
    // Clean mix
    vec4 color = mix(tex1, tex2, mask);
    
    // Always fully opaque
    color.a = 1.0;
    
    gl_FragColor = color;
  }
`;

interface ImageOverlayProps {
  image1: string;
  image2: string;
  className?: string;
}

export default function ImageOverlay({ image1, image2, className = '' }: ImageOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const hoverRef = useRef(0);
  const targetHoverRef = useRef(0);
  const timeRef = useRef(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const handleResize = useCallback(() => {
    const container = containerRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    if (!container || !renderer || !camera) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    
    if (materialRef.current) {
      materialRef.current.uniforms.uResolution.value.set(width, height);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.01, 10);
    camera.position.z = 1;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Load textures
    const loader = new THREE.TextureLoader();
    const texture1 = loader.load(image1);
    const texture2 = loader.load(image2);
    
    [texture1, texture2].forEach(tex => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    });

    // Shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTexture1: { value: texture1 },
        uTexture2: { value: texture2 },
        uHover: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      },
      transparent: false,
    });
    materialRef.current = material;

    // Plane geometry filling the view
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.016;
      
      // Smooth mouse interpolation
      mouseRef.current.x = lerp(mouseRef.current.x, targetMouseRef.current.x, 0.08);
      mouseRef.current.y = lerp(mouseRef.current.y, targetMouseRef.current.y, 0.08);
      
      // Smooth hover interpolation
      hoverRef.current = lerp(hoverRef.current, targetHoverRef.current, 0.06);

      // Update uniforms
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      material.uniforms.uHover.value = hoverRef.current;
      material.uniforms.uTime.value = timeRef.current;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Event handlers - listen on document to bypass z-index stacking issues
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      
      // Check if mouse is within the hero container bounds
      const isInside = e.clientX >= rect.left && e.clientX <= rect.right 
                    && e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      if (isInside) {
        targetMouseRef.current.x = x;
        targetMouseRef.current.y = y;
        targetHoverRef.current = 1;
      } else {
        targetHoverRef.current = 0;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      geometry.dispose();
      material.dispose();
      texture1.dispose();
      texture2.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [image1, image2, handleResize]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full cursor-pointer ${className}`}
      style={{ position: 'relative' }}
    />
  );
}
