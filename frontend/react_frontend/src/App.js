import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [message, setMessage] = useState('Backend server not connected yet.');

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      React frontend running. <br />
      {message}
    </div>
  );
}

export default App;