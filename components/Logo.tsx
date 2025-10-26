import React from 'react';

const Logo: React.FC = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="IYHEA Logo"
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
      {/* Globe */}
      <circle cx="50" cy="50" r="28" fill="#0d9488" />
      {/* Abstract continents */}
      <path
        d="M 50,25 C 40,30 42,45 53,50 C 65,55 68,45 65,35 C 62,25 55,23 50,25 Z"
        fill="#14b8a6"
      />
      <path
        d="M 45,55 C 35,60 38,75 50,75 C 60,75 62,65 58,60 C 54,55 50,53 45,55 Z"
        fill="#14b8a6"
      />
       <path
        d="M 68,58 C 75,62 75,70 70,72 C 65,74 63,65 68,58 Z"
        fill="#14b8a6"
      />

      {/* Rings with glow */}
      <g style={{ filter: 'url(#glow)' }}>
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="12"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3"
          transform="rotate(-25 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="38"
          ry="14"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          transform="rotate(-25 50 50)"
        />
      </g>

      {/* People figures */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50) translate(0 -44)`}>
          <circle cx="50" cy="50" r="5" fill={angle % 120 === 0 ? "#0d9488" : "#2563eb"} />
          <path
            d="M 47 55 C 47 60, 53 60, 53 55"
            stroke={angle % 120 === 0 ? "#0d9488" : "#2563eb"}
            strokeWidth="2.5"
            fill="none"
          />
           <path
            d="M 45 54 C 40 50, 40 45, 46 45"
            stroke={angle % 120 === 0 ? "#0d9488" : "#2563eb"}
            strokeWidth="2"
            fill="none"
          />
           <path
            d="M 55 54 C 60 50, 60 45, 54 45"
            stroke={angle % 120 === 0 ? "#0d9488" : "#2563eb"}
            strokeWidth="2"
            fill="none"
          />
        </g>
      ))}
    </g>
  </svg>
);

export default Logo;
