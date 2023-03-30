import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={<Home/>} />
        <Route path='/services' component={<Services/>} />
        <Route path='/contact-us' component={<ContactUs/>} />
        <Route path='/sign-up' component={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;