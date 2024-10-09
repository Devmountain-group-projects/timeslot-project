import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Logo from '../../assets/images/logowhite.png'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-secondary to-primary py-5 mt-auto tracking-wide">
            <div className="container mx-auto px-6 max-w-[1800px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-8">
                    <div>
                        <img src={Logo} alt="Timeline Slot Logo" className="h-16 mb-12" /> {/* Added logo here */}
                        <h4 className="text-lg font-semibold mb-6 text-white">About Us</h4>
                        <p className="text-white text-base">Timeline Slot is an online appointment booking system designed to help businesses and clients streamline scheduling.</p>
                    </div>

                    <section>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/features" className="text-white hover:text-secondary text-base">Features</Link></li>
                            <li><Link to="/pricing" className="text-white hover:text-secondary text-base">Pricing</Link></li>
                            <li><Link to="/about-this-project" className="text-white hover:text-secondary text-base">About this Project</Link></li>
                            <li><Link to="/login" className="text-white hover:text-secondary text-base">Login</Link></li>
                            <li><Link to="/register" className="text-white hover:text-secondary text-base">Sign Up</Link></li>
                            <li><Link to="/privacy-policy" className="text-white hover:text-secondary text-base">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions" className="text-white hover:text-secondary text-base">Terms and Conditions</Link></li>
                        </ul>
                    </section>

                    <section>
                        <div className="space-y-4 mb-8">
                            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                            <p className="text-white text-base">1550 Digital Dr #400</p>
                            <p className="text-white text-base">Lehi, UT 84043</p>
                            <p className="text-white text-base">contact@example.com</p>
                            <p className="text-white text-base">+1 (801) 851-5466</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
                            <ul className="flex flex-wrap gap-x-5 gap-4">
                                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                                    <FaLinkedinIn className="inline w-6 h-6 text-white hover:text-secondary transition-colors duration-300" />
                                </a></li>
                                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                                    <FaFacebookF className="inline w-6 h-6 text-white hover:text-secondary transition-colors duration-300" />
                                </a></li>
                                <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                                    <FaGithub className="inline w-6 h-6 text-white hover:text-secondary transition-colors duration-300" />
                                </a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <hr className='border-white px-6' />
            <div className="p-5 mt-2">
                <p className='text-white text-sm text-center'>© Timeline Slot Online Appointment Platform. All rights reserved. Project created by Rodrigo Cobos, Brandon Cansdale and Jareth Carpenter</p>
            </div>
        </footer>
    )
}

export default Footer