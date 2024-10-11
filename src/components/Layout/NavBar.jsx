import React, { useState, useEffect, forwardRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = forwardRef((props, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkClass = (isActive) => `
        ${isActive ? 'text-secondary border-b-2 border-secondary' : 'text-gray-500'}
        hover:text-primary px-4 py-2 text-base transition duration-150 ease-in-out
    `

    return (
        <div ref={ref} className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
            <header className='max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20 sm:h-24'}`}>
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img src={Logo} alt="logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-14'}`} />
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
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className='text-gray-500 hover:text-primary px-3 py-2 rounded-md text-base font-medium'>Login</Link>
                                <Link to="/register" className='btn-blue'>Get Started</Link>
                            </div>
                        </div>

                        <div className="flex lg:hidden items-center space-x-2">
                            <Link to="/login" className='text-gray-500 hover:text-secondary px-3 py-2 rounded-md text-base font-medium'>Login</Link>
                            <Link to="/register" className='px-3 py-2 text-md rounded-full font-medium text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out'>Sign Up</Link>
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
});

export default NavBar;