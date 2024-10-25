import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import SectionImg from '../../assets/images/sectionimg4.jpg'
import { FaUserCheck, FaPhone } from "react-icons/fa";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";

const ClientRegister = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: 'Rich Man',
        email: 'BigBusiness@business.com',
        phoneNumber: '5555555555',
        password: 'a',
        confirmPassword: 'a'
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const validatePasswords = () => {
        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords don't match");
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePasswords()) {
            console.log('Form submitted:', formData);
            onRegister(formData);
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
                        <form className="space-y-4" onSubmit={handleSubmit}>
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
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
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
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                        name="phoneNumber"
                                        type="tel"
                                        required
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
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
                                        className={`w-full text-sm text-gray-800 border ${passwordError ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    <motion.div
                                        onClick={() => togglePasswordVisibility('password')}
                                        className="absolute right-4 top-1/2 transform -translate-y-[50%] cursor-pointer"
                                    >
                                        {showPassword ?
                                            <TbEye className="w-[18px] h-[18px] text-gray-500" /> :
                                            <TbEyeClosed className="w-[18px] h-[18px] text-gray-500" />
                                        }
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <label className="text-gray-800 text-sm mb-2 block">Confirm your Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        className={`w-full text-sm text-gray-800 border ${passwordError ? 'border-red-500' : 'border-gray-300'} px-4 py-3 rounded-lg outline-primary`}
                                        placeholder="Reenter your password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                    <motion.div
                                        onClick={() => togglePasswordVisibility('confirmPassword')}
                                        className="absolute right-4 top-1/2 transform -translate-y-[50%] cursor-pointer"
                                    >
                                        {showConfirmPassword ?
                                            <TbEye className="w-[18px] h-[18px] text-gray-500" /> :
                                            <TbEyeClosed className="w-[18px] h-[18px] text-gray-500" />
                                        }
                                    </motion.div>
                                </div>
                                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
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