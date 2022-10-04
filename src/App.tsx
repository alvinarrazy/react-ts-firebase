import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./theme/css/theme.css"
import { Home, Register } from './pages';
import { Navbar } from './components';
import ModalComp from './components/Modal/Modal';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <ModalComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
