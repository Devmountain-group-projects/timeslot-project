import React from 'react'
import { motion } from 'framer-motion'
import PlaceholderImg from '../../assets/images/placeholder.png'
import GoogleImg from '../../assets/images/google.png'
import OutlookImg from '../../assets/images/outlook.png'

const Hero = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-6 pb-12 mt-4 sm:mt-8">
            <div className="max-width mx-auto">
                <div className="bg-gradient-to-b from-secondary via-blue-400 to-blue-100 rounded-3xl overflow-hidden">
                    <div className="py-12 sm:py-24 px-6 sm:px-12">
                        <div className="max-md:text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-white lg:text-6xl md:text-5xl text-4xl font-extrabold md:max-w-4xl"
                            >
                                Streamline Your Appointments with Ease
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white text-base sm:text-xl mt-6 mb-8 uppercase font-bold"
                            >
                                The ultimate solution for scheduling, managing, and growing your service-based business.
                            </motion.p>
                            <div className="grid md:grid-cols-2 gap-12 mt-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <p className="text-white text-sm sm:text-base leading-relaxed">Book, track, and manage appointments in real time. Whether you're a client or a provider, Timeline Slot simplifies your scheduling process—all in one platform.</p>
                                    <div className="mt-12 flex gap-4 items-center flex-wrap max-md:justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            type='button'
                                            className="btn-blue"
                                        >
                                            Get Started
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            type='button'
                                            className="btn-blue"
                                        >
                                            Book an Appointment
                                        </motion.button>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        className="mt-24 grid grid-cols-2 md:grid-cols-2 items-center"
                                    >
                                        <img src={GoogleImg} className="w-24 sm:w-44 mx-auto" alt="google-logo" />
                                        <img src={OutlookImg} className="w-24 sm:w-44 mx-auto" alt="facebook-logo" />
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <img src={PlaceholderImg} alt="picture of the online booking appointment software" className="w-full h-full rounded-lg object-contain" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero