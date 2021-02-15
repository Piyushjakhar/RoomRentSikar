import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
      
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>

    </>
  );
}

export default App;
