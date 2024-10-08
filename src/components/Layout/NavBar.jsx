import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkClass = (isActive) => `
        ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}
        hover:text-primary px-4 py-2 text-md font-medium transition duration-150 ease-in-out
    `

    return (
        <div className="w-full bg-white shadow-md">
            <header className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-28'>
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img src={Logo} alt="logo" className='h-20 w-auto' />
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
                                Home
                            </NavLink>
                            <NavLink to="/features" className={({ isActive }) => linkClass(isActive)}>
                                Features
                            </NavLink>
                            <NavLink to="/pricing" className={({ isActive }) => linkClass(isActive)}>
                                Pricing
                            </NavLink>
                            <NavLink to="/why-us" className={({ isActive }) => linkClass(isActive)}>
                                Why Us?
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="hidden lg:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <Link to="/login" className='text-gray-500 hover:text-primary px-3 py-2 rounded-md text-md font-medium'>Login</Link>
                                <Link to="/register" className='ml-3 px-4 py-2 text-md rounded-md font-medium text-white bg-primary hover:bg-white hover:text-primary hover:ring-2 ring-primary transition duration-300 ease-in-out'>Get Started</Link>
                            </div>
                        </div>

                        <div className="flex lg:hidden items-center space-x-2">
                            <Link to="/login" className='text-gray-500 hover:text-secondary px-3 py-2 rounded-md text-md font-medium'>Login</Link>
                            <Link to="/register" className='px-3 py-2 text-md rounded-md font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out'>Sign up</Link>
                            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                <span className="sr-only">Open main menu</span>
                                {!isMenuOpen ? (
                                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className='text-gray-800 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium'>Home</Link>
                        <Link to="/features" className='text-gray-500 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium'>Features</Link>
                        <Link to="/pricing" className='text-gray-500 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium'>Pricing</Link>
                        <Link to="/why-us" className='text-gray-500 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium'>Why Us?</Link>
                        <Link to="/contact" className='text-gray-500 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium'>Contact</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar