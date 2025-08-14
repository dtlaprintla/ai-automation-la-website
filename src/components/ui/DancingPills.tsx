'use client';

import { useState, useEffect, useRef } from 'react';

export default function DancingPills() {
  // Match Vapi's exact configuration
  const colors = [
    '#FFEB3B', '#8BC34A', '#00BCD4', '#FF5722', '#E91E63',
    '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#009688',
    '#FFC107', '#FF9800', '#795548', '#607D8B', '#F44336'
  ];

  // Calculate columns based on screen width
  const [columns, setColumns] = useState(50);
  const maxBars = 20;
  const minBars = 4;
  
  // Initialize with random heights
  const [bars, setBars] = useState(() => 
    Array(columns).fill(0).map(() => 
      Math.floor(Math.random() * (maxBars - minBars + 1) + minBars)
    )
  );

  // Update columns on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const barWidth = 12; // width of each bar
      const gap = 2; // gap between bars
      const newColumns = Math.floor(width / (barWidth + gap));
      setColumns(newColumns);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate bars
  useEffect(() => {
    const animateBars = () => {
      setBars(prevBars => 
        prevBars.map((_, index) => {
          // Create wave effect
          const time = Date.now() / 1000;
          const waveHeight = Math.sin(time + index * 0.1) * 3;
          const randomHeight = Math.random() * 8;
          const newHeight = Math.floor(minBars + waveHeight + randomHeight);
          return Math.max(minBars, Math.min(maxBars, newHeight));
        })
      );
    };

    const interval = setInterval(animateBars, 100);
    return () => clearInterval(interval);
  }, [columns]);

  return (
    <div style={{ 
      width: '100vw',
      height: '150px',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'transparent'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2px',
        height: '100%',
        paddingBottom: '20px'
      }}>
        {bars.map((height, colIndex) => (
          <div 
            key={colIndex} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            {Array.from({ length: height }, (_, barIndex) => (
              <div
                key={barIndex}
                style={{
                  width: '12px',
                  height: '4px',
                  backgroundColor: colors[(colIndex + barIndex * 2) % colors.length],
                  borderRadius: '2px',
                  opacity: 1,
                  transition: 'all 0.15s ease-out'
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}