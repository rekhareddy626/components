import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar"> 
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link'to="/About">About</Link></li>
        <li><Link className='link' to="/Contact">Contact</Link></li>
        <li><Link className='link' to="/Service">Service</Link></li>
        <li><Link className='link' to="/useState">UseState</Link></li>
       <li><Link className='link' to="/login">Login</Link></li>
        <li><Link className='link' to="/hook">Hook</Link></li>

       </ul>
      </nav>
    </div>
  )
}

export default Navbar