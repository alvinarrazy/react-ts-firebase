import React from 'react';
import './App.css';
import "./theme/css/theme.css"
import { Route, Routes } from 'react-router';
import { Login, Home } from './pages';
import ModalComp from './components/Modal/Modal';
import { useAppDispatch } from './redux';
import { hideModal } from './redux/modal/actions';
import NavigationBar from './components/Navbar/Navbar';

function App() {
  const dispatch = useAppDispatch()

  return (
    <>
      <NavigationBar />
      <ModalComp onHide={() => dispatch(hideModal())} />
      {/* <ModalComp onHide={() => console.log('here')} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;
