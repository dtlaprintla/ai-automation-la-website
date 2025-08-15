'use client';

import { useState, useEffect } from 'react';

export default function DancingPills() {
  // Vapi-inspired bright colors
  const colors = [
    '#00E5FF', '#00FF88', '#FFE500', '#FF6B00', '#FF00FF',
    '#7B61FF', '#00FFF0', '#FF0055', '#00FF00', '#FF3366',
    '#00BFFF', '#FFD700', '#FF69B4', '#1EFF00', '#FF4500',
    '#8BC34A', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5'
  ];

  const totalColumns = 60;
  const maxPills = 15;
  const minPills = 3;

  const [columnHeights, setColumnHeights] = useState(() =>
    Array(totalColumns).fill(0).map(() => 
      Math.floor(Math.random() * (maxPills - minPills + 1) + minPills)
    )
  );

  useEffect(() => {
    const animateColumns = () => {
      setColumnHeights(prevHeights =>
        prevHeights.map(() => {
          return Math.floor(Math.random() * (maxPills - minPills + 1) + minPills);
        })
      );
    };

    const interval = setInterval(animateColumns, 400);
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
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#0B0C0F',
      paddingTop: '20px',
      paddingBottom: '20px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '3px',
        height: '100%'
      }}>
        {columnHeights.map((height, columnIndex) => (
          <div
            key={columnIndex}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'flex-end'
            }}
          >
            {Array.from({ length: height }, (_, pillIndex) => (
              <div
                key={pillIndex}
                style={{
                  width: '18px',
                  height: '5px',
                  backgroundColor: colors[(columnIndex + pillIndex * 3) % colors.length],
                  borderRadius: '2.5px',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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