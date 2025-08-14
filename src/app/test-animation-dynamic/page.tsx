'use client';

import { useState, useEffect } from 'react';

export default function TestAnimationDynamicPage() {
  const [bars, setBars] = useState<number[]>([]);
  const colors = ['#00E5FF', '#00FF88', '#FFE500', '#FF6B00', '#FF00FF', '#7B61FF', '#00FFF0'];
  
  useEffect(() => {
    // Initialize bars
    setBars(Array(40).fill(0).map(() => Math.floor(Math.random() * 12 + 3)));
    
    // Animate
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 12 + 3)));
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0B0C0F',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      <h1 style={{ 
        color: 'white', 
        fontSize: '2rem', 
        marginBottom: '40px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        Dynamic Animation Test
      </h1>
      
      {/* Dancing Pills Animation */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        height: '200px',
        backgroundColor: '#0B0C0F',
        border: '2px solid #333',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '20px',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end' }}>
          {bars.map((height, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {Array.from({ length: height }, (_, j) => (
                <div
                  key={j}
                  style={{
                    width: '16px',
                    height: '5px',
                    backgroundColor: colors[(i + j) % colors.length],
                    borderRadius: '2.5px',
                    transition: 'all 0.3s ease-out'
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <p style={{ color: '#ccc', marginTop: '20px' }}>
        The bars should be animating with random heights every 500ms.
      </p>
      
      <a href="/" style={{ color: '#00E5FF', marginTop: '20px' }}>
        Back to Home
      </a>
    </div>
  );
}