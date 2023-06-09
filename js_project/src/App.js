import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import BMI from './pages/blogs';
import Quiz from './pages/quiz';
import Contact from './pages/contacts';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<BMI/>} />
		<Route path='/quiz' element={<Quiz/>} />
	</Routes>
	</Router>
);
}

export default App;
