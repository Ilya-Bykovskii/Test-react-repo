import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TestPage3 = () => {
  const [time, setTime] = useState(new Date());
  const [items, setItems] = useState(['Sample Item 1', 'Sample Item 2', 'Sample Item 3']);
  const [newItem, setNewItem] = useState('');

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Page 3 - Advanced Features 🚀</h1>
      <p>This page demonstrates more advanced React features including useEffect and list management.</p>
      
      {/* Live Clock */}
      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Live Clock ⏰</h3>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          {time.toLocaleTimeString()}
        </p>
        <p style={{ color: '#6c757d' }}>
          {time.toLocaleDateString()}
        </p>
      </div>

      {/* Dynamic List */}
      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
        <h3>Dynamic List Management 📝</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter new item..."
            style={{
              padding: '8px 12px',
              marginRight: '10px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              width: '200px'
            }}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
          />
          <button
            onClick={addItem}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Add Item
          </button>
        </div>

        <div style={{ textAlign: 'left', display: 'inline-block' }}>
          <h4>Current Items ({items.length}):</h4>
          {items.length === 0 ? (
            <p style={{ color: '#6c757d', fontStyle: 'italic' }}>No items yet. Add some above!</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {items.map((item, index) => (
                <li key={index} style={{ 
                  padding: '8px 12px', 
                  margin: '5px 0', 
                  backgroundColor: 'white', 
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minWidth: '300px'
                }}>
                  <span>{item}</span>
                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Feature Showcase */}
      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h3>Advanced React Features Used:</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '15px' }}>
          <span style={{ padding: '5px 10px', backgroundColor: '#17a2b8', color: 'white', borderRadius: '15px', fontSize: '14px' }}>
            useEffect Hook
          </span>
          <span style={{ padding: '5px 10px', backgroundColor: '#6f42c1', color: 'white', borderRadius: '15px', fontSize: '14px' }}>
            useState Hook
          </span>
          <span style={{ padding: '5px 10px', backgroundColor: '#fd7e14', color: 'white', borderRadius: '15px', fontSize: '14px' }}>
            Dynamic Lists
          </span>
          <span style={{ padding: '5px 10px', backgroundColor: '#20c997', color: 'white', borderRadius: '15px', fontSize: '14px' }}>
            Event Handling
          </span>
        </div>
      </div>

      {/* Navigation */}
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
          to="/test-page-2" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            margin: '0 10px'
          }}
        >
          Go to Test Page 2
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

export default TestPage3;