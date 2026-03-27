import React from 'react';

const Logo = ({ width = 48, height = 48, showText = true, light = false }) => (
    <div className="logo-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="10" fill="url(#mainGradient)" />
            <path d="M11 21V11H13.5L18.5 17.5V11H21V21H18.5L13.5 14.5V21H11Z" fill="white" />
            <defs>
                <linearGradient id="mainGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1e40af" />
                    <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
        </svg>
        {showText && (
            <span style={{ 
                fontSize: width > 40 ? '1.5rem' : '1.2rem', 
                fontWeight: '800', 
                letterSpacing: '-0.02em', 
                color: light ? '#ffffff' : 'var(--color-dark)',
                background: light ? 'none' : 'linear-gradient(to right, #0f172a, #1d4ed8)',
                WebkitBackgroundClip: light ? 'none' : 'text',
                WebkitTextFillColor: light ? 'initial' : 'transparent'
            }}>
                NOREXA
            </span>
        )}
    </div>
);

export default Logo;
