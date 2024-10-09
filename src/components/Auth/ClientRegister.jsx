import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import SectionImg from '../../assets/images/sectionimg4.jpg'
import { FaUserCheck, FaPhone } from "react-icons/fa";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";


const ClientRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'rodrigomcobos@test.com' && password === 'password123') {
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
                                <h3 className="text-gray-800 text-3xl font-extrabold">Join Timeline Slot<span className='text-primary text-3xl sm:text-5xl'>.</span></h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Start managing your appointments with ease! Create your account to access powerful scheduling tools designed to simplify your business.</p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter your Name"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <FaUserCheck className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="Email"
                                        type="email"
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter your Email"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                    />
                                    <MdAlternateEmail className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Add Phone Number</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="tel"
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter your Phone Number"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                    />
                                    <FaPhone className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Create a Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter your password"
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Confirm your Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className={`w-full text-sm text-gray-800 border ${error ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Reenter your password"
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
                                    className="btn-blue w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Register
                                </motion.button>
                            </motion.div>

                            <motion.p
                                className="text-sm !mt-8 text-center text-gray-800"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Already a member? <Link to="/login" className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap">Log in</Link>
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
                            alt="Register your account"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ClientRegister