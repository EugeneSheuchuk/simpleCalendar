import React from 'react';
import './App.css';
import Month from "./components/month/Month";

function App() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      {currentYear}
      <Month currentYear={currentYear}
             month={0}/>
    </div>
  );
}

export default App;
