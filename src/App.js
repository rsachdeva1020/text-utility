import React, {useState} from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
  const [mode, setMode] = useState('dark');//will tell whether dark mode is enabled or not
  return (
    <>
      <Navbar title = "TextUtils" mode={mode} />
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyse"/>
      </div>
      <About/>
    </>
  );
}

export default App;
