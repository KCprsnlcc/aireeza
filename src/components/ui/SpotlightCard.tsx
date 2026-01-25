'use client';

import React, { useRef, useState } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className, ...props }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`spotlight-card ${className || ''}`}
            style={{ '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` } as React.CSSProperties}
            {...props}
        >
            {children}
        </div>
    );
};

export default SpotlightCard;
