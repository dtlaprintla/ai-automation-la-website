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
    <div className="w-full flex justify-center items-end" style={{ height: '200px', position: 'relative' }}>
      <div className="flex items-end gap-[2px]">
        {heights.map((height, colIndex) => (
          <div key={colIndex} className="flex flex-col-reverse gap-[2px]">
            {Array.from({ length: height }, (_, pillIndex) => (
              <div
                key={pillIndex}
                className="pill"
                style={{
                  width: '16px',
                  height: '4px',
                  backgroundColor: colors[(colIndex + pillIndex) % colors.length],
                  borderRadius: '2px',
                  transition: 'all 0.3s ease-out'
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}