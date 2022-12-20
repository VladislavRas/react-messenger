import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/dialogs/' element={<DialogsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
