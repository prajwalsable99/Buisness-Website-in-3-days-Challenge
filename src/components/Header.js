import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-white">Home</Link>
      <Link to='/services' className="mr-5 hover:text-white">Services</Link>
      <Link to ='/contact'className="mr-5 hover:text-white">Contact</Link>
      <Link to='/gallery' className="mr-5 hover:text-white">Gallery</Link>
      <Link to='/about' className="mr-5 hover:text-white">About</Link>
    </nav>
    
  </div>
</header>
    )
}

export default Header