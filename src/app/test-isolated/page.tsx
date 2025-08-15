export default function TestIsolatedPage() {
  return (
    <div style={{ 
        padding: '40px', 
        backgroundColor: 'black !important', 
        minHeight: '100vh',
        margin: '0',
        display: 'block !important',
        visibility: 'visible !important',
        opacity: '1 !important'
      }}>
        <h1 style={{ color: 'white !important' }}>Isolated Test - No CSS Imports</h1>
        
        {/* Test with !important on everything */}
        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'white !important' }}>Testing with !important flags:</p>
          
          {/* Colored blocks */}
          <div style={{ 
            display: 'flex !important', 
            gap: '10px', 
            marginTop: '20px',
            visibility: 'visible !important',
            opacity: '1 !important'
          }}>
            <div style={{ 
              width: '50px !important', 
              height: '50px !important', 
              backgroundColor: 'red !important',
              display: 'block !important',
              visibility: 'visible !important',
              opacity: '1 !important',
              border: '2px solid white !important'
            }}>R</div>
            <div style={{ 
              width: '50px !important', 
              height: '50px !important', 
              backgroundColor: 'green !important',
              display: 'block !important',
              visibility: 'visible !important',
              opacity: '1 !important',
              border: '2px solid white !important'
            }}>G</div>
            <div style={{ 
              width: '50px !important', 
              height: '50px !important', 
              backgroundColor: 'blue !important',
              display: 'block !important',
              visibility: 'visible !important',
              opacity: '1 !important',
              border: '2px solid white !important'
            }}>B</div>
          </div>
          
          {/* Test with background image */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: 'white !important' }}>Testing with CSS gradient:</p>
            <div style={{ 
              width: '200px !important',
              height: '50px !important',
              background: 'linear-gradient(to right, red, yellow, green) !important',
              display: 'block !important',
              border: '2px solid white !important'
            }}></div>
          </div>
          
          {/* Test with SVG */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: 'white !important' }}>Testing with SVG:</p>
            <svg width="200" height="50" style={{ border: '1px solid white' }}>
              <rect x="0" y="0" width="50" height="50" fill="red" />
              <rect x="60" y="0" width="50" height="50" fill="green" />
              <rect x="120" y="0" width="50" height="50" fill="blue" />
            </svg>
          </div>
          
          {/* Test with HTML color entities */}
          <div style={{ marginTop: '40px' }}>
            <p style={{ color: 'white !important' }}>Testing pills with different approach:</p>
            <div style={{ display: 'flex !important', gap: '5px' }}>
              <span style={{ 
                display: 'inline-block !important',
                width: '30px !important', 
                height: '10px !important', 
                backgroundColor: '#FF0000 !important',
                borderRadius: '5px !important',
                border: '1px solid #FF0000 !important'
              }}>&nbsp;</span>
              <span style={{ 
                display: 'inline-block !important',
                width: '30px !important', 
                height: '10px !important', 
                backgroundColor: '#00FF00 !important',
                borderRadius: '5px !important',
                border: '1px solid #00FF00 !important'
              }}>&nbsp;</span>
              <span style={{ 
                display: 'inline-block !important',
                width: '30px !important', 
                height: '10px !important', 
                backgroundColor: '#0000FF !important',
                borderRadius: '5px !important',
                border: '1px solid #0000FF !important'
              }}>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
  );
}