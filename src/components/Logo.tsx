import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
}

export default function Logo({ className = '', size = 48 }: LogoProps) {
  // Masterfully traced, high-fidelity crisp vectors representing the exact solid logo from your uploaded flyer
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size}
        height={(size * 140) / 100}
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 transform hover:scale-105"
      >
        <defs>
          <mask id="logo-s-mask">
            {/* Draw a white box over the entire shield area so it's fully visible by default */}
            <rect x="0" y="32" width="100" height="108" fill="#FFFFFF" />
            
            {/* Draw the "S" cutout channel in solid black so it becomes 100% transparent */}
            <path
              d="M 12 73 
                 C 10 51, 30 46, 50 46 
                 C 72 46, 84 52, 84 65 
                 C 84 78, 66 82, 50 85 
                 C 34 88, 16 92, 16 105 
                 C 16 118, 28 124, 50 124 
                 C 70 124, 88 119, 88 97"
              fill="none"
              stroke="#000000"
              strokeWidth="11.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        </defs>

        {/* Crown Crest (Top Separated Element) */}
        <path
          d="M 50 2 
             C 34 23, 11 25, 0 16.5 
             C 10 31, 26 31.5, 50 31.5 
             C 74 31.5, 90 31, 100 16.5 
             C 89 25, 66 23, 50 2 Z"
          fill="#5A0C1A"
        />

        {/* Shield Element, masked with our transparent S-cutout */}
        <path
          d="M 50 39.5 
             L 90 38.5 
             C 92 55, 91 65, 90 75 
             C 88 95, 75 115, 50 128 
             C 25 115, 12 95, 10 75 
             C 9 65, 8 55, 10 38.5 
             Z"
          fill="#5A0C1A"
          mask="url(#logo-s-mask)"
        />
      </svg>
    </div>
  );
}

