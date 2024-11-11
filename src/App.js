import React from 'react';
import './App.css';
import Login from './components/Login';
import DataEntryForm from './components/DataEntryForm';

function App() {
  return (
    <div className="App">
      <h1>Events and Forms</h1>
      <div className="form-container">
        <Login />
        <DataEntryForm />
      </div>
    </div>
  );
}

export default App;
