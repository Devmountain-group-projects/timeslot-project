import React from 'react'
import { motion } from 'framer-motion'
import SectionImg from '../../assets/images/sectionimg5.jpg'
import { FaUser } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";

const Role = ({ onRoleSelect, formData }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 0.15,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 0.4
            }
        },
        hover: {
            scale: 1.2,
            opacity: 0.2,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    };

    const handleRoleSelection = (role) => {
        console.log(`Selected role: ${role}`);
        // Here you can add additional logic, such as updating state or navigating to a different page
    };

    return (
        <div className="font-[sans-serif] relative">
            <div className="min-h-screen flex items-center justify-center py-6 px-4">
                <div className="w-full max-w-7xl flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block md:w-[600px] lg:w-[800px] xl:w-[1000px] h-[1000px] max-h-screen overflow-hidden"
                    >
                        <img
                            src={SectionImg}
                            className="w-full h-full object-cover"
                            alt="Are you a Client or Business"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border border-gray-300 rounded-lg p-8 max-w-md bg-white shadow-lg z-10 mx-auto md:mx-0"
                    >
                        <div className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Client <span className='text-primary text-3xl'>or</span> Business<span className='text-primary text-3xl sm:text-5xl'>.</span></h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Choose the option that best describes you, so we can tailor your experience to meet your needs.</p>
                                <ul className="text-gray-500 text-sm my-8 space-y-4">
                                    <motion.li
                                        className="relative overflow-hidden rounded-lg border border-gray-200 p-6 transition-all"
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                    >
                                        <div className="relative z-10">
                                            <h4 className='text-primary font-bold text-lg'>
                                                Business
                                            </h4>
                                            <p className='mt-2'>I want to manage my services, schedule appointments, and connect with clients.</p>
                                        </div>
                                        <motion.div
                                            variants={iconVariants}
                                            className="absolute right-[-3%] top-[5%] transform -translate-y-1/2 translate-x-1/4 text-primary text-9xl"
                                        >
                                            <MdAddBusiness />
                                        </motion.div>
                                    </motion.li>

                                    <motion.li
                                        className="relative overflow-hidden rounded-lg border border-gray-200 p-6 transition-all"
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                    >
                                        <div className="relative z-10">
                                            <h4 className='text-primary font-bold text-lg'>
                                                Client
                                            </h4>
                                            <p className='mt-2'>I want to book services, track my appointments, and manage my bookings.</p>
                                        </div>
                                        <motion.div
                                            variants={iconVariants}
                                            className="absolute right-[-3%] top-[10%] transform -translate-y-1/2 translate-x-1/4 text-primary text-9xl"
                                        >
                                            <FaUser />
                                        </motion.div>
                                    </motion.li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <motion.div
                                className="flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.button
                                    type="button"
                                    className="btn-blue w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onRoleSelect('Client', formData)}
                                >
                                    I am a Client
                                </motion.button>
                            </motion.div>
                            <motion.div
                                className="flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <motion.button
                                    type="button"
                                    className="btn-blue w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onRoleSelect('Business')}
                                >
                                    I have a Business
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Role