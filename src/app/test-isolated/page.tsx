'use client';

import { useState, useEffect } from 'react';

export default function TestIsolatedPage() {
  // Dancing pills component inline
  const colors = [
    '#00E5FF', '#00FF88', '#FFE500', '#FF6B00', '#FF00FF',
    '#7B61FF', '#00FFF0', '#FF0055', '#00FF00', '#FF3366'
  ];

  const totalColumns = 30;
  const maxPills = 10;
  const minPills = 2;

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

    const interval = setInterval(animateColumns, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
        padding: '40px', 
        backgroundColor: 'black', 
        minHeight: '100vh',
        margin: '0',
        display: 'block',
        visibility: 'visible',
        opacity: '1'
      }}>
        <h1 style={{ color: 'white' }}>Isolated Test - No CSS Imports</h1>
        
        {/* Test with high specificity */}
        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'white' }}>Testing colored elements:</p>
          
          {/* Colored blocks */}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            marginTop: '20px',
            visibility: 'visible',
            opacity: '1'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'red',
              display: 'block',
              visibility: 'visible',
              opacity: '1',
              border: '2px solid white'
            }}>R</div>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'green',
              display: 'block',
              visibility: 'visible',
              opacity: '1',
              border: '2px solid white'
            }}>G</div>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'blue',
              display: 'block',
              visibility: 'visible',
              opacity: '1',
              border: '2px solid white'
            }}>B</div>
          </div>
          
          {/* Test with background image */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: 'white' }}>Testing with CSS gradient:</p>
            <div style={{ 
              width: '200px',
              height: '50px',
              background: 'linear-gradient(to right, red, yellow, green)',
              display: 'block',
              border: '2px solid white'
            }}></div>
          </div>
          
          {/* Test with SVG */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: 'white' }}>Testing with SVG:</p>
            <svg width="200" height="50" style={{ border: '1px solid white' }}>
              <rect x="0" y="0" width="50" height="50" fill="red" />
              <rect x="60" y="0" width="50" height="50" fill="green" />
              <rect x="120" y="0" width="50" height="50" fill="blue" />
            </svg>
          </div>
          
          {/* Test with HTML color entities */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: 'white' }}>Testing pills with different approach:</p>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={{ 
                display: 'inline-block',
                width: '30px', 
                height: '10px', 
                backgroundColor: '#FF0000',
                borderRadius: '5px',
                border: '1px solid #FF0000'
              }}>&nbsp;</span>
              <span style={{ 
                display: 'inline-block',
                width: '30px', 
                height: '10px', 
                backgroundColor: '#00FF00',
                borderRadius: '5px',
                border: '1px solid #00FF00'
              }}>&nbsp;</span>
              <span style={{ 
                display: 'inline-block',
                width: '30px', 
                height: '10px', 
                backgroundColor: '#0000FF',
                borderRadius: '5px',
                border: '1px solid #0000FF'
              }}>&nbsp;</span>
            </div>
          </div>

          {/* Dancing Pills Animation Test */}
          <div style={{ marginTop: '60px' }}>
            <p style={{ color: 'white' }}>Dancing Pills Animation:</p>
            <p style={{ color: 'yellow' }}>Debug: columnHeights length = {columnHeights.length}, first few values: {columnHeights.slice(0, 5).join(', ')}</p>
            
            {/* Simple static test first */}
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: 'white' }}>Static pills test:</p>
              <div style={{ display: 'flex', gap: '3px' }}>
                <div style={{ width: '16px', height: '4px', backgroundColor: '#00E5FF' }}></div>
                <div style={{ width: '16px', height: '4px', backgroundColor: '#00FF88' }}></div>
                <div style={{ width: '16px', height: '4px', backgroundColor: '#FFE500' }}></div>
              </div>
            </div>

            {/* Animated version */}
            <div style={{
              width: '100%',
              height: '120px',
              backgroundColor: '#111',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '20px',
              marginTop: '20px',
              border: '2px solid #333'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '4px',
                height: '100%'
              }}>
                {columnHeights.map((height, columnIndex) => (
                  <div
                    key={columnIndex}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      alignItems: 'center',
                      height: '100%',
                      justifyContent: 'flex-end',
                      backgroundColor: columnIndex < 3 ? 'rgba(255,255,255,0.1)' : 'transparent' // Debug: highlight first 3 columns
                    }}
                  >
                    {Array.from({ length: height }, (_, pillIndex) => (
                      <div
                        key={pillIndex}
                        style={{
                          width: '16px',
                          height: '6px',
                          backgroundColor: colors[(columnIndex + pillIndex) % colors.length],
                          borderRadius: '3px',
                          border: '1px solid white',
                          opacity: 1
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p style={{ color: 'yellow' }}>If you see highlighted columns but no pills, the Array.from is the issue</p>
          </div>
        </div>
      </div>
  );
}