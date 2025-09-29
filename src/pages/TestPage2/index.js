import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TestPage2 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from Test Page 2!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(`Button clicked ${count + 1} times! 🚀`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Page 2 - Interactive Demo 🎮</h1>
      <p>This page demonstrates interactive React components.</p>
      
      <div style={{ margin: '30px 0' }}>
        <h3>{message}</h3>
        <p>Current count: <strong>{count}</strong></p>
        <button 
          onClick={handleClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          Click Me! (+1)
        </button>
      </div>

      <div style={{ margin: '30px 0' }}>
        <h3>Sample Interactive Elements:</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button style={{ padding: '8px 16px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '3px' }}>
            Feature 1
          </button>
          <button style={{ padding: '8px 16px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '3px' }}>
            Feature 2
          </button>
          <button style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px' }}>
            Feature 3
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link 
          to="/test-page-1" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            margin: '0 10px'
          }}
        >
          Go to Test Page 1
        </Link>
        <Link 
          to="/test-page-3" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#fd7e14', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            margin: '0 10px'
          }}
        >
          Go to Test Page 3
        </Link>
        <Link 
          to="/" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            margin: '0 10px'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TestPage2;