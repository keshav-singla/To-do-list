import React from 'react';
import './App.css';
import Taskbar from './components/input';
import Header from './components/appBar'
function App() {
  return (
    <div className="app">
      <Header />
      <Taskbar />
    </div>
  );
}

export default App;
