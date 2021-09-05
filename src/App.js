
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { useState } from 'react';

function App() {
  const  [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 2000);
  }

  const toggleMode=()=>{
    console.log("clicked")
    if (mode==="light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled","success")
      
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled","success")
      
    }
  }


  return ( 
  // <Router>

   <>
    <Navbar title="My Utils App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert}   heading="please write the Text you want to Analyze :" style={{backgroundColor : '#8a998c'}} />
          {/* </Route> */}
          {/* // <Route path="/"> */}
          
         
          {/* // </Route> */}
        {/* </Switch> */}

    </>
    // </Router>

  )
}

export default App;
