//import { Alert } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React,{useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



//let name="Harry";

function App() {
  const[mode, setmode]=useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=> {
       setAlert(null);
    },3000);
  }

 const  toggleMode=()=>{
     if(mode==='light'){
       setmode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
     }
     else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
     }
  }
  return (
    <>
    
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
  {/* <Router> */}
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
   {/* </Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/>
            
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </> 
  );
}
export default App;
 
