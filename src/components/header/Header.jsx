import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
        <p>WEATHER APP</p>
        <ul>
            <li><Link to='/'>Home</Link></li>
        </ul>
    </nav>
  )
}

export default Header