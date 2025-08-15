'use client';

import { useState, useEffect } from 'react';

export default function DancingPills() {
  // Vapi's exact approach: 50 bars with SVG
  const totalBars = 50;
  const [bars, setBars] = useState(() => Array(totalBars).fill(5));

  useEffect(() => {
    const updateBars = () => {
      // Vapi's exact formula: Math.random() * volume * 150
      // We'll simulate volume as a random value between 0.3-1
      const simulatedVolume = 0.3 + Math.random() * 0.7;
      setBars(bars.map(() => Math.random() * simulatedVolume * 150));
    };

    const interval = setInterval(updateBars, 150); // Fast updates like Vapi
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '160px',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#0B0C0F',
      paddingTop: '20px',
      paddingBottom: '20px'
    }}>
      {/* SVG-based animation like Vapi */}
      <svg 
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 300 100"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '800px'
        }}
      >
        {bars.map((height, index) => (
          <rect
            key={index}
            x={index * 6}
            y={50 - height/2}
            width={4}
            height={Math.max(height, 2)} // Minimum height of 2
            fill={`hsl(${(index * 7) % 360}, 70%, 60%)`} // Dynamic rainbow colors
            rx={2} // Rounded corners
            style={{
              animationDelay: `${index * 50}ms`,
              opacity: 0.9,
              transition: 'height 0.1s ease-out, y 0.1s ease-out'
            }}
          />
        ))}
      </svg>
    </div>
  );
}