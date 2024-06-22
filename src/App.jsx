import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Alert from './components/Alert'; // Import Alert component

function App() {

  return (
    <div className='App'>
      {/* Render the Form component */}
      <Form showAlert={showAlert} />

      {/* Render the Alert component conditionally */}
      {alert.show && <Alert message={alert.message} type={alert.type} />}
    </div>
  );
}

export default App;
