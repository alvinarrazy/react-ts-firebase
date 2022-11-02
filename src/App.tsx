import React from 'react';
import './App.css';
import "./theme/css/theme.css"
import { Home, Register } from './pages';
import ModalComp from './components/Modal/Modal';
import { Route, Routes } from 'react-router';
import { hideModal } from './redux/actions/modalActions';
import { useAppDispatch } from './redux/reducers/store';
import { Navbar } from './components';

function App() {
  const dispatch = useAppDispatch()
  return (
    <>
      <Navbar />
      <ModalComp onHide={() => dispatch(hideModal())} />
      {/* <ModalComp onHide={() => console.log('here')} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
