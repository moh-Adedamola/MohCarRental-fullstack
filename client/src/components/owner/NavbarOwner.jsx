import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {

    const{ user} = useAppContext()

  return (
    <div className='flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 text-gray-500
    border-b border-borderColor relative transition-all'>
        <Link to='/'>
            <img src={assets.logo} alt="" className="h-6 sm:h-7" />
        </Link>
        
        {/* Responsive welcome text */}
        <p className='text-sm sm:text-base md:text-lg font-medium text-gray-700 truncate max-w-[150px] sm:max-w-[200px] md:max-w-none'>
            <span className='hidden sm:inline'>Welcome, </span>
            <span className='sm:hidden'>Hi </span>
            {user?.name || "owner"}
        </p>
    </div>
  )
}

export default NavbarOwner