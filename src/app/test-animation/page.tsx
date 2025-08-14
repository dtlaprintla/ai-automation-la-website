export default function TestAnimationPage() {
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
        Animation Test Page
      </h1>
      
      {/* Inline Dancing Pills Animation */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        height: '200px',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '20px',
        overflow: 'hidden'
      }}>
        {/* Static bars for testing */}
        <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end' }}>
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {Array.from({ length: Math.floor(Math.random() * 10 + 3) }, (_, j) => (
                <div
                  key={j}
                  style={{
                    width: '20px',
                    height: '6px',
                    backgroundColor: ['#00E5FF', '#00FF88', '#FFE500', '#FF6B00', '#FF00FF'][j % 5],
                    borderRadius: '3px'
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <p style={{ color: '#ccc', marginTop: '20px' }}>
        If you can see colorful bars above, the animation component should work.
      </p>
    </div>
  );
}