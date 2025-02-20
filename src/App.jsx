import { useState } from 'react';
import './App.css';

const App = () => {
  const [apiResponse, setApiResponse] = useState('null');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://dkbm8m15a7iq7.cloudfront.net/api/hello');
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiResponse({ error: 'Failed to fetch data' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="content">
      <h1>Rsbuild with React - Test update</h1>
      <p>Start building amazing things with Rsbuild.</p>
      
      <button 
        onClick={handleClick}
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '20px'
        }}
      >
        {isLoading ? 'Loading...' : 'Fetch API Data'}
      </button>

      {apiResponse && (
        <div style={{
          backgroundColor: 'green',
          padding: '20px',
          borderRadius: '4px',
          marginTop: '20px'
        }}>
          <h2>API Response:</h2>
          <pre style={{
            backgroundColor: 'blue',
            padding: '10px',
            borderRadius: '4px',
            overflow: 'auto'
          }}>
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default App;
