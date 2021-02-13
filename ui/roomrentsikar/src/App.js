import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/NavBar';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
      
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} />
        
      </Switch>

    </>
  );
}

export default App;
