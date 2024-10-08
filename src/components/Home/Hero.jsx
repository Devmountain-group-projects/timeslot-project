import React from 'react'
import { motion } from 'framer-motion'
import PlaceholderImg from '../../assets/images/placeholder.png'
import GoogleImg from '../../assets/images/google.png'
import OutlookImg from '../../assets/images/outlook.png'

const Hero = () => {
    return (
        <div>
            <div className="font-sans bg-white py-24 px-6 bg-gradient-to-b from-primary via-blue-400 to-white">
                <div className="max-width mx-auto max-md:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl"
                    >
                        Streamline Your Appointments with Ease
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white text-xl mt-6 mb-8 uppercase font-bold"
                    >
                        The ultimate solution for scheduling, managing, and growing your service-based business.
                    </motion.p>
                    <div className="grid md:grid-cols-2 gap-12 mt-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p className="text-white text-base leading-relaxed">Book, track, and manage appointments in real time. Whether you're a client or a provider, Timeline Slot simplifies your scheduling process—all in one platform.</p>
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
                                className="mt-24 grid grid-cols-2 md:grid-cols-2 gap-2 items-center"
                            >
                                <img src={GoogleImg} className="w-44 mx-auto" alt="google-logo" />
                                <img src={OutlookImg} className="w-44 mx-auto" alt="facebook-logo" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <img src={PlaceholderImg} className="w-full h-full rounded-lg object-contain shadow-xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero