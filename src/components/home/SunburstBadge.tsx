// ponytail: SVG textPath and CSS keyframe rotation. Zero image download, 100% vector crisp at any pixel density
import React from 'react';

export const SunburstBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-[76px] h-[76px] select-none pointer-events-none ${className}`}
    >
      {/* Rotating Scalloped Seal */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow origin-center drop-shadow-md"
        style={{
          animation: 'spinBadge 20s linear infinite',
        }}
      >
        <defs>
          {/* Circular path for rotating text */}
          <path
            id="textcircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>

        {/* Scalloped outer perimeter badge */}
        <circle cx="50" cy="50" r="48" fill="#F7D66D" stroke="#14140C" strokeWidth="2.5" />

        {/* Circular text around badge */}
        <text
          fontSize="7.5"
          fontWeight="800"
          letterSpacing="0.16em"
          fill="#14140C"
          className="uppercase"
        >
          <textPath href="#textcircle" startOffset="0%">
            • 2026 • RAYÉ • STRIPES • 2026 • RAYÉ •
          </textPath>
        </text>

        {/* Center decorative ring */}
        <circle cx="50" cy="50" r="22" fill="#EF5E4B" stroke="#14140C" strokeWidth="2" />

        {/* 12-ray sun burst icon */}
        <g stroke="#14140C" strokeWidth="2" strokeLinecap="round">
          <line x1="50" y1="34" x2="50" y2="38" />
          <line x1="50" y1="62" x2="50" y2="66" />
          <line x1="34" y1="50" x2="38" y2="50" />
          <line x1="62" y1="50" x2="66" y2="50" />
          <line x1="39" y1="39" x2="42" y2="42" />
          <line x1="58" y1="58" x2="61" y2="61" />
          <line x1="39" y1="61" x2="42" y2="58" />
          <line x1="58" y1="42" x2="61" y2="39" />
        </g>
        <circle cx="50" cy="50" r="6" fill="#F7D66D" stroke="#14140C" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

