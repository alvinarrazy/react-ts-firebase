import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./theme/css/theme.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages';
import { Navbar } from './components';
import ModalComp from './components/Modal/Modal';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ModalComp />
        <Route path='/' exact component={Home} />
      </Router>
    </>
  );
}

export default App;
