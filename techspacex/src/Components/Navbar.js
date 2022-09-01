import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import './Style.css';

function Navbar() {
  return (
    <Router>
      <ul className='nav'>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/contact'>Contact Us</Link>
          </li>
      </ul>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </Router>
  )
}

export default Navbar