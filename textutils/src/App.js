// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import Features from "./components/Features";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    
    setTimeout(function () {
            // Do something after 3 seconds

            setAlert(null);

        }, 1500);
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#213b33';
      document.body.style.color='#B6EADA';
      handleAlert("Dark Mode is Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#4f4f4f';
      handleAlert("Light Mode is Enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <TextForm handleAlert={handleAlert} heading="Analyze / Transform Your Text" mode={mode}></TextForm>
      <Features mode={mode}></Features>
    </>
  );
}

export default App;
