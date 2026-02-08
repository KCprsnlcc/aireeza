'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AMOUNT = 20;
const SINE_DOTS = Math.floor(AMOUNT * 0.3);
const DOT_WIDTH = 150;
const IDLE_TIMEOUT = 150;

interface CursorRevealMaskProps {
  image1: string;
  image2: string;
  bgColor1?: string;
  bgColor2?: string;
  className?: string;
}

class Dot {
  index: number;
  anglespeed: number;
  x: number;
  y: number;
  scale: number;
  range: number;
  limit: number;
  element: HTMLSpanElement;
  maskCircle: SVGCircleElement;
  lockX: number;
  lockY: number;
  angleX: number;
  angleY: number;

  constructor(index: number, cursor: HTMLDivElement, maskGroup: SVGGElement) {
    this.index = index;
    this.anglespeed = 0.05;
    this.x = 0;
    this.y = 0;
    this.scale = 1 - 0.05 * index;
    this.range = DOT_WIDTH / 2 - (DOT_WIDTH / 2) * this.scale + 2;
    this.limit = DOT_WIDTH * 0.75 * this.scale;
    this.lockX = 0;
    this.lockY = 0;
    this.angleX = 0;
    this.angleY = 0;

    this.element = document.createElement('span');
    gsap.set(this.element, { scale: this.scale });
    Object.assign(this.element.style, {
      position: 'absolute',
      display: 'block',
      width: `${DOT_WIDTH}px`,
      height: `${DOT_WIDTH}px`,
      borderRadius: '50%',
      backgroundColor: 'white',
      transformOrigin: 'center center',
    });
    cursor.appendChild(this.element);

    this.maskCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.maskCircle.setAttribute('r', String(DOT_WIDTH * this.scale * 0.5));
    this.maskCircle.setAttribute('fill', 'white');
    maskGroup.appendChild(this.maskCircle);
  }

  lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = Math.PI * 2 * Math.random();
    this.angleY = Math.PI * 2 * Math.random();
  }

  draw(idle: boolean, offsetX: number, offsetY: number) {
    if (!idle || this.index <= SINE_DOTS) {
      gsap.set(this.element, { x: this.x, y: this.y });
      this.maskCircle.setAttribute('cx', String(this.x + DOT_WIDTH / 2 - offsetX));
      this.maskCircle.setAttribute('cy', String(this.y + DOT_WIDTH / 2 - offsetY));
    } else {
      this.angleX += this.anglespeed;
      this.angleY += this.anglespeed;
      this.y = this.lockY + Math.sin(this.angleY) * this.range;
      this.x = this.lockX + Math.sin(this.angleX) * this.range;
      gsap.set(this.element, { x: this.x, y: this.y });
      this.maskCircle.setAttribute('cx', String(this.x + DOT_WIDTH / 2 - offsetX));
      this.maskCircle.setAttribute('cy', String(this.y + DOT_WIDTH / 2 - offsetY));
    }
  }

  destroy() {
    this.element.remove();
    this.maskCircle.remove();
  }
}

export default function CursorRevealMask({
  image1,
  image2,
  bgColor1 = '#ffffff',
  bgColor2 = '#ff3333',
  className = '',
}: CursorRevealMaskProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const maskGroup = maskGroupRef.current;
    const svg = svgRef.current;
    if (!container || !cursor || !maskGroup || !svg) return;

    const mousePosition = { x: 0, y: 0 };
    let idle = false;
    let timeoutID: ReturnType<typeof setTimeout>;
    let lastFrame = 0;
    let rafId = 0;

    // Build dots
    const dots: Dot[] = [];
    for (let i = 0; i < AMOUNT; i++) {
      dots.push(new Dot(i, cursor, maskGroup));
    }

    // Update SVG viewBox to match container
    const updateViewBox = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    };
    updateViewBox();

    const startIdleTimer = () => {
      timeoutID = setTimeout(() => {
        idle = true;
        dots.forEach((dot) => dot.lock());
      }, IDLE_TIMEOUT);
      idle = false;
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutID);
      startIdleTimer();
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX - DOT_WIDTH / 2;
      mousePosition.y = e.clientY - DOT_WIDTH / 2;
      resetIdleTimer();
    };

    const onTouchMove = (e: TouchEvent) => {
      mousePosition.x = e.touches[0].clientX - DOT_WIDTH / 2;
      mousePosition.y = e.touches[0].clientY - DOT_WIDTH / 2;
      resetIdleTimer();
    };

    const positionCursor = (dots: Dot[]) => {
      const rect = container.getBoundingClientRect();
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(idle, rect.left, rect.top);
        if (!idle || index <= SINE_DOTS) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    const render = (timestamp: number) => {
      positionCursor(dots);
      lastFrame = timestamp;
      rafId = requestAnimationFrame(render);
    };

    const onResize = () => {
      updateViewBox();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', onResize);
    lastFrame = performance.now();
    startIdleTimer();
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutID);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      dots.forEach((dot) => dot.destroy());
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>
      {/* SVG with goo filter + mask definition */}
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          <filter id="goo-hero">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <filter id="goo-mask-hero">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <mask id="cursor-reveal-mask" maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="black" />
            <g ref={maskGroupRef} filter="url(#goo-mask-hero)" />
          </mask>
        </defs>
      </svg>

      {/* Base layer - image1 over bgColor1 */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: bgColor1 }}
      >
        <img
          src={image1}
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Reveal layer - image2 over bgColor2, masked by cursor trail */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: bgColor2,
          mask: 'url(#cursor-reveal-mask)',
          WebkitMask: 'url(#cursor-reveal-mask)',
        }}
      >
        <img
          src={image2}
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Cursor goo blobs - hidden, drives the mask */}
      <div
        ref={cursorRef}
        className="cursor-reveal-blobs"
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          display: 'block',
          top: 0,
          left: 0,
          zIndex: 1000,
          filter: 'url(#goo-hero)',
          opacity: 0,
        }}
      />
    </div>
  );
}
