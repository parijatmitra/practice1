
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=>{
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);
  }

  return (
    <>
    
    <Navbar />
    <div className="container">
    <Button showAlert={showAlert}/>
    </div>
    <Alert alert={alert}/>
    
    
    </>
  );
}

export default App;
