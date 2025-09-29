import React from 'react';
import { Link } from 'react-router-dom';

const TestPage1 = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Test Page 1! 🎉</h1>
      <p>This is a sample page to demonstrate React routing.</p>
      <p>Here you can add any content you want for testing purposes.</p>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Sample Features:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ React Router Navigation</li>
          <li>✅ Component-based Architecture</li>
          <li>✅ Modern React Hooks</li>
          <li>✅ Responsive Design</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link 
          to="/test-page-2" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            margin: '0 10px'
          }}
        >
          Go to Test Page 2
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

export default TestPage1;