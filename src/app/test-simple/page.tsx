export default function TestSimplePage() {
  return (
    <div style={{ padding: '40px', backgroundColor: 'black', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>Simple Test</h1>
      
      <div style={{ marginTop: '40px' }}>
        <p style={{ color: 'white' }}>Can you see this text?</p>
        
        {/* Test 1: Simple colored divs */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }}></div>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'green' }}></div>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'blue' }}></div>
        </div>
        
        {/* Test 2: Inline pills */}
        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'white' }}>Pills test:</p>
          <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
            <span style={{ 
              display: 'inline-block',
              width: '20px', 
              height: '6px', 
              backgroundColor: '#00E5FF',
              borderRadius: '3px'
            }}></span>
            <span style={{ 
              display: 'inline-block',
              width: '20px', 
              height: '6px', 
              backgroundColor: '#00FF88',
              borderRadius: '3px'
            }}></span>
            <span style={{ 
              display: 'inline-block',
              width: '20px', 
              height: '6px', 
              backgroundColor: '#FFE500',
              borderRadius: '3px'
            }}></span>
          </div>
        </div>
        
        {/* Test 3: Column of pills */}
        <div style={{ marginTop: '40px' }}>
          <p style={{ color: 'white' }}>Column test:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '10px' }}>
            <div style={{ width: '20px', height: '6px', backgroundColor: '#FF6B00', borderRadius: '3px' }}></div>
            <div style={{ width: '20px', height: '6px', backgroundColor: '#FF00FF', borderRadius: '3px' }}></div>
            <div style={{ width: '20px', height: '6px', backgroundColor: '#7B61FF', borderRadius: '3px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}