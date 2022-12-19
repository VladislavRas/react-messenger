import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/profile/' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/dialogs/' element={<Dialogs dialogs={props.state.messagesPage} messages={props.state.messagesPage} store={props.store} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
