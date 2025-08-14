import React from 'react'
import logo from '../assets/logo.png' // Assuming you have a logo image in the assets folder
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex  items-center gap-5 bg-gray-800 text-white p-4'>
      <img className='h-8' src={logo} alt="Logo" />
      <Link to="/movie">Movies</Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar