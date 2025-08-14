'use client';

import { useState, useEffect } from 'react';

export default function DancingPills() {
  const columns = 30;
  const maxHeight = 12;
  const minHeight = 3;
  
  // Vibrant colors like Vapi
  const colors = [
    '#00E5FF', '#00FF88', '#FFE500', '#FF6B00', '#FF00FF',
    '#7B61FF', '#00FFF0', '#FF0055', '#00FF00', '#FF3366',
    '#00BFFF', '#FFD700', '#FF69B4', '#1EFF00', '#FF4500'
  ];

  const [heights, setHeights] = useState(
    Array(columns).fill(0).map(() => Math.floor(Math.random() * (maxHeight - minHeight) + minHeight))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(prevHeights => 
        prevHeights.map(() => Math.floor(Math.random() * (maxHeight - minHeight) + minHeight))
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '200px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-end',
      padding: '20px 0',
      backgroundColor: 'transparent'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-end', 
        gap: '3px',
        height: '100%'
      }}>
        {heights.map((height, colIndex) => (
          <div key={colIndex} style={{ 
            display: 'flex', 
            flexDirection: 'column-reverse', 
            gap: '3px',
            alignItems: 'center'
          }}>
            {Array.from({ length: height }, (_, pillIndex) => (
              <div
                key={pillIndex}
                style={{
                  width: '20px',
                  height: '6px',
                  backgroundColor: colors[(colIndex + pillIndex) % colors.length],
                  borderRadius: '3px',
                  transition: 'all 0.3s ease-out',
                  boxShadow: `0 0 10px ${colors[(colIndex + pillIndex) % colors.length]}`,
                  opacity: 1
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}