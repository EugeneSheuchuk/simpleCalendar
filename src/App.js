import React from 'react';
import './App.css';

function App() {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <div>
      {currentYear}
    </div>
  );
}

export default App;
