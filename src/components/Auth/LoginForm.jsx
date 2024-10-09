import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionImg from '../../assets/images/sectionimg3.jpg'
import { FaUserCheck } from "react-icons/fa";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'rodrigomcobos' && password === 'password123') {
            console.log('Login successful');
            setError('');
            // Here you would typically handle the successful login,
            // such as setting auth state or redirecting the user
        } else {
            setError('Wrong credentials');
        }
    };

    return (
        <div className="font-[sans-serif] relative">
            <div className="min-h-screen flex items-center justify-center py-6 px-4">
                <div className="w-full max-w-7xl flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border border-gray-300 rounded-lg p-8 max-w-md bg-white shadow-lg z-10 mx-auto md:mx-0"
                    >
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Welcome Back<span className='text-primary text-3xl sm:text-5xl'>.</span></h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Manage your appointments, track bookings, and stay connected with your clients. Sign in to access your dashboard and streamline your scheduling experience.</p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">User name</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter user name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <FaUserCheck className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <motion.div
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-4 top-1/2 transform -translate-y-[50%] cursor-pointer"
                                    >
                                        {showPassword ?
                                            <TbEye className="w-[18px] h-[18px] text-gray-500" /> :
                                            <TbEyeClosed className="w-[18px] h-[18px] text-gray-500" />
                                        }
                                    </motion.div>
                                </div>
                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                            </motion.div>

                            <motion.div
                                className="flex items-center justify-center !mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.button
                                    type="submit"
                                    className="btn-blue"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Sign in
                                </motion.button>
                            </motion.div>

                            <motion.p
                                className="text-sm !mt-8 text-center text-gray-800"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Don't have an account <a href="#" className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a>
                            </motion.p>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block md:w-[600px] lg:w-[800px] xl:w-[1000px] h-[1000px] max-h-screen overflow-hidden"
                    >
                        <img
                            src={SectionImg}
                            className="w-full h-full object-cover"
                            alt="Dining Experience"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm