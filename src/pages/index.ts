import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TestPage1 from './TestPage1';
import TestPage2 from './TestPage2';
import TestPage3 from './TestPage3';

// Home component for the root route
const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to React Router Demo! 🏠</h1>
      <p>This is the home page with navigation to test pages.</p>
      
      <div style={{ margin: '30px 0' }}>
        <h3>Available Pages:</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link 
            to="/test-page-1" 
            style={{ 
              padding: '15px 25px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Test Page 1
          </Link>
          <Link 
            to="/test-page-2" 
            style={{ 
              padding: '15px 25px', 
              backgroundColor: '#28a745', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Test Page 2
          </Link>
          <Link 
            to="/test-page-3" 
            style={{ 
              padding: '15px 25px', 
              backgroundColor: '#fd7e14', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Test Page 3
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h4>Navigation Features:</h4>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>✅ Browser-based routing</li>
          <li>✅ Programmatic navigation</li>
          <li>✅ Route parameters support</li>
          <li>✅ Nested routing capability</li>
        </ul>
      </div>
    </div>
  );
};

// Main Router Component
const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ 
          backgroundColor: '#343a40', 
          padding: '10px 20px', 
          marginBottom: '20px' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link 
              to="/" 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              Home
            </Link>
            <Link 
              to="/test-page-1" 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              Page 1
            </Link>
            <Link 
              to="/test-page-2" 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              Page 2
            </Link>
            <Link 
              to="/test-page-3" 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              Page 3
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-page-1" element={<TestPage1 />} />
          <Route path="/test-page-2" element={<TestPage2 />} />
          <Route path="/test-page-3" element={<TestPage3 />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <Link to="/" style={{ 
                padding: '10px 20px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px' 
              }}>
                Go Home
              </Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;