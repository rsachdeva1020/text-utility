import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light');//will tell whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  function showAlert(message, type){
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function toggleMode(){
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0 0 0 / 75%)'
      showAlert("Dark mode has been enabled", "success",)
      // document.title = 'TextUtils | Dark'  // changing title dynamically
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils | Home'
    }
  }

  return (
    <>
    <Router>
    <div className="mybody">
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>
            </Route>
        </Switch>
      </div>
    </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
