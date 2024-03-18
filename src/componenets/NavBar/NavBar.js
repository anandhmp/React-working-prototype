import React from 'react'
import './NavBar.css'
import { BiSearch } from 'react-icons/bi';



const NavBar = () => {
  return (
    <div className='navbar'>
        <img className='nav-logo' src='logo.png' alt='logo'/>
        <span className='vl'></span>
        <span className='nav-elememt'>
        <span className='nav-elements'>Products</span>
        <span className='nav-elements'>Stores</span>
        <span className='nav-elements'>Our Story</span>
        <span className='nav-elements'>Blog</span>
        <span className='right-section'>
        <span className='nav-elements'>Login/Signup</span>
        <span className='nav-elements'></span>
        <input className='search-input' type="text" />
        </span>
        </span>
    </div>
  )
}

export default NavBar