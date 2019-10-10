import React from 'react';
// import logo from './logo.svg';
import Particles from "react-particles-js";
import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Main/>
      <Particles/>
      <Footer/>
    </div>
  );
}

export default App;
