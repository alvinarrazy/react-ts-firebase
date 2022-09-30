import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./theme/css/theme.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <>
    <Router>
    <Navbar/> 
      <Route path='/' exact component={Home} />
    </Router>
  </>
  );
}

export default App;
