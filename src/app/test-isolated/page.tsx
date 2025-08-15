export default function TestIsolatedPage() {
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
        </div>
      </div>
  );
}