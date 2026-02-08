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

// Fragment shader - studio background compositing with cursor trail reveal
const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform sampler2D uMask;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uBgColor1;
  uniform vec3 uBgColor2;
  
  // Studio backdrop: bright white for initial, dramatic red for hover
  vec3 studioBackdrop(vec2 uv, vec3 baseColor) {
    // Check if this is the red background (hover state)
    bool isRed = baseColor.r > 0.5 && baseColor.g < 0.3 && baseColor.b < 0.3;
    
    if (isRed) {
      // Original dramatic lighting for red hover
      vec2 lightPos = vec2(0.5, 0.62);
      float lightDist = distance(uv, lightPos);
      
      float keyLight = 1.0 - lightDist * 0.35;
      keyLight = clamp(keyLight, 0.0, 1.0);
      
      float floorGrad = smoothstep(0.0, 0.45, uv.y);
      float floorDarken = mix(0.88, 1.0, floorGrad);
      
      vec2 vigUv = uv - 0.5;
      float vignette = 1.0 - dot(vigUv, vigUv) * 0.6;
      vignette = clamp(vignette, 0.0, 1.0);
      vignette = mix(0.92, 1.0, vignette);
      
      vec3 bg = baseColor * keyLight * floorDarken * vignette;
      
      vec2 fillPos = vec2(0.75, 0.3);
      float fillDist = distance(uv, fillPos);
      float fillLight = (1.0 - smoothstep(0.0, 0.9, fillDist)) * 0.06;
      bg += fillLight;
      
      return clamp(bg, 0.0, 1.0);
    } else {
      // Bright, clean lighting for white initial
      vec2 lightPos = vec2(0.5, 0.65);
      float lightDist = distance(uv, lightPos);
      
      float keyLight = 1.0 - lightDist * 0.25;
      keyLight = clamp(keyLight, 0.0, 1.0);
      keyLight = smoothstep(0.0, 1.0, keyLight);
      
      float floorGrad = smoothstep(0.0, 0.25, uv.y);
      float floorDarken = mix(0.96, 1.0, floorGrad);
      
      vec2 vigUv = uv - 0.5;
      float vignette = 1.0 - dot(vigUv, vigUv) * 0.3;
      vignette = clamp(vignette, 0.0, 1.0);
      vignette = mix(0.97, 1.0, vignette);
      
      vec3 bg = baseColor * keyLight * floorDarken * vignette;
      
      float ambient = 0.08;
      bg += vec3(ambient);
      
      vec2 fillPos = vec2(0.75, 0.3);
      float fillDist = distance(uv, fillPos);
      float fillLight = (1.0 - smoothstep(0.0, 0.9, fillDist)) * 0.04;
      bg += fillLight;
      
      bg = max(bg, vec3(0.92));
      
      return clamp(bg, 0.0, 1.0);
    }
  }
  
  void main() {
    vec2 uv = vUv;
    
    // Read trail mask value
    float mask = texture2D(uMask, uv).r;
    
    // Generate studio backgrounds
    vec3 studio1 = studioBackdrop(uv, uBgColor1);
    vec3 studio2 = studioBackdrop(uv, uBgColor2);
    
    // Sample textures (transparent PNGs)
    vec4 tex1 = texture2D(uTexture1, uv);
    vec4 tex2 = texture2D(uTexture2, uv);
    
    // Alpha-composite each image over its studio background
    vec3 comp1 = mix(studio1, tex1.rgb, tex1.a);
    vec3 comp2 = mix(studio2, tex2.rgb, tex2.a);
    
    // Smooth but solid mask - tight range for clean edges without pixelation
    float solidMask = smoothstep(0.08, 0.12, mask);
    
    // Blend composited results based on trail mask
    vec3 finalColor = mix(comp1, comp2, solidMask);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Trail mask configuration
const MASK_SIZE = 128;
const DECAY_RATE = 0.975;
const BASE_STAMP_RADIUS = 0.08;
const MAX_STAMP_RADIUS = 0.18;
const STAMP_INTENSITY = 1.0;

interface ImageOverlayProps {
  image1: string;
  image2: string;
  bgColor1?: string;
  bgColor2?: string;
  className?: string;
}

// Convert hex color string to THREE.Color-compatible RGB values
function hexToVec3(hex: string): [number, number, number] {
  const c = hex.replace('#', '');
  return [
    parseInt(c.substring(0, 2), 16) / 255,
    parseInt(c.substring(2, 4), 16) / 255,
    parseInt(c.substring(4, 6), 16) / 255,
  ];
}

export default function ImageOverlay({ image1, image2, bgColor1 = '#000000', bgColor2 = '#000000', className = '' }: ImageOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const prevMouseRef = useRef({ x: 0.5, y: 0.5 });
  const isInsideRef = useRef(false);
  const timeRef = useRef(0);

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

    // ── Mask buffer: CPU-side float array for smooth decay math ──
    const maskFloat = new Float32Array(MASK_SIZE * MASK_SIZE);
    const maskData = new Uint8Array(MASK_SIZE * MASK_SIZE * 4);
    for (let i = 0; i < MASK_SIZE * MASK_SIZE; i++) {
      maskData[i * 4 + 3] = 255; // Alpha channel always opaque
    }

    // DataTexture uploaded to GPU each frame
    const maskTexture = new THREE.DataTexture(
      maskData,
      MASK_SIZE,
      MASK_SIZE,
      THREE.RGBAFormat,
      THREE.UnsignedByteType
    );
    maskTexture.minFilter = THREE.LinearFilter;
    maskTexture.magFilter = THREE.LinearFilter;
    maskTexture.wrapS = THREE.ClampToEdgeWrapping;
    maskTexture.wrapT = THREE.ClampToEdgeWrapping;
    maskTexture.needsUpdate = true;

    // ── Optimized stamp function: paints soft gaussian circle ──
    const stampTrail = (uvX: number, uvY: number, radius: number, intensity: number) => {
      const aspectRatio = container.clientWidth / container.clientHeight;
      const invMaskSize = 1.0 / MASK_SIZE;
      const radiusSq = radius * radius;

      // Convert UV center to mask pixel coords
      const cx = uvX * MASK_SIZE;
      const cy = uvY * MASK_SIZE;

      // Aspect-corrected bounding box
      const radiusPxY = radius * MASK_SIZE;
      const radiusPxX = (radius / aspectRatio) * MASK_SIZE;

      const minX = Math.max(0, Math.floor(cx - radiusPxX) - 1);
      const maxX = Math.min(MASK_SIZE - 1, Math.ceil(cx + radiusPxX) + 1);
      const minY = Math.max(0, Math.floor(cy - radiusPxY) - 1);
      const maxY = Math.min(MASK_SIZE - 1, Math.ceil(cy + radiusPxY) + 1);

      for (let y = minY; y <= maxY; y++) {
        const yIdx = y * MASK_SIZE;
        for (let x = minX; x <= maxX; x++) {
          // Optimized distance calculation (avoid sqrt until needed)
          const dxUV = (x * invMaskSize - uvX) * aspectRatio;
          const dyUV = y * invMaskSize - uvY;
          const distSq = dxUV * dxUV + dyUV * dyUV;

          if (distSq < radiusSq) {
            const t = Math.sqrt(distSq) / radius;
            // Gaussian-like falloff
            const falloff = Math.exp(-t * t * 3.0);
            const value = intensity * falloff;
            const idx = yIdx + x;
            // Max blend prevents over-brightening
            maskFloat[idx] = Math.min(1.0, Math.max(maskFloat[idx], value));
          }
        }
      }
    };

    // ── Scene setup ──
    const scene = new THREE.Scene();

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

    // Parse background colors
    const bg1 = hexToVec3(bgColor1);
    const bg2 = hexToVec3(bgColor2);

    // Shader material with trail mask + studio backgrounds
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTexture1: { value: texture1 },
        uTexture2: { value: texture2 },
        uMask: { value: maskTexture },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        uBgColor1: { value: new THREE.Vector3(bg1[0], bg1[1], bg1[2]) },
        uBgColor2: { value: new THREE.Vector3(bg2[0], bg2[1], bg2[2]) },
      },
      transparent: false,
    });
    materialRef.current = material;

    // Plane geometry filling the view (1 segment — no vertex displacement needed)
    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // ── Animation loop ──
    const animate = () => {
      timeRef.current += 0.016;

      // Stamp trail if cursor is inside the hero area
      if (isInsideRef.current) {
        const dx = mouseRef.current.x - prevMouseRef.current.x;
        const dy = mouseRef.current.y - prevMouseRef.current.y;
        const velocity = Math.sqrt(dx * dx + dy * dy);

        // Interpolate stamps along cursor path for gapless trails
        const steps = Math.max(1, Math.floor(velocity * MASK_SIZE * 0.5));
        for (let s = 0; s <= steps; s++) {
          const t = steps > 0 ? s / steps : 1;
          const sx = prevMouseRef.current.x + dx * t;
          const sy = prevMouseRef.current.y + dy * t;

          // Dynamic radius: faster movement → larger brush stroke
          const velFactor = Math.min(velocity * 10, 1.0);
          const radius = BASE_STAMP_RADIUS + (MAX_STAMP_RADIUS - BASE_STAMP_RADIUS) * velFactor;

          stampTrail(sx, sy, radius, STAMP_INTENSITY);
        }

        prevMouseRef.current.x = mouseRef.current.x;
        prevMouseRef.current.y = mouseRef.current.y;
      }

      // Optimized decay + conversion - single pass with minimal operations
      const totalPixels = MASK_SIZE * MASK_SIZE;
      for (let i = 0; i < totalPixels; i++) {
        maskFloat[i] *= DECAY_RATE;
        if (maskFloat[i] < 0.001) maskFloat[i] = 0;
        const val = maskFloat[i] * 255;
        const i4 = i * 4;
        maskData[i4] = val;
        maskData[i4 + 1] = val;
        maskData[i4 + 2] = val;
      }
      maskTexture.needsUpdate = true;

      // Update uniforms
      material.uniforms.uTime.value = timeRef.current;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // ── Event handlers ──
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      
      const isInside = e.clientX >= rect.left && e.clientX <= rect.right 
                    && e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      if (isInside) {
        if (!isInsideRef.current) {
          // First entry: sync prev to current to avoid jump-line artifact
          prevMouseRef.current.x = x;
          prevMouseRef.current.y = y;
        }
        mouseRef.current.x = x;
        mouseRef.current.y = y;
        isInsideRef.current = true;
      } else {
        isInsideRef.current = false;
      }
    };

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = 1.0 - (touch.clientY - rect.top) / rect.height;

        const isInside = touch.clientX >= rect.left && touch.clientX <= rect.right 
                      && touch.clientY >= rect.top && touch.clientY <= rect.bottom;

        if (isInside) {
          if (!isInsideRef.current) {
            prevMouseRef.current.x = x;
            prevMouseRef.current.y = y;
          }
          mouseRef.current.x = x;
          mouseRef.current.y = y;
          isInsideRef.current = true;
        }
      }
    };

    const handleTouchEnd = () => {
      isInsideRef.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      
      geometry.dispose();
      material.dispose();
      texture1.dispose();
      texture2.dispose();
      maskTexture.dispose();
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [image1, image2, bgColor1, bgColor2, handleResize]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full cursor-pointer ${className}`}
      style={{ position: 'relative' }}
    />
  );
}
