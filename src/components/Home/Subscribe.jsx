import React from 'react'
import { motion } from 'framer-motion'

const Subscribe = () => {
    return (
        <div className="bg-white py-6 px-6">
            <div className="max-width mx-auto">
                <div className="bg-gradient-gray rounded-3xl p-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl max-md:max-w-md mx-auto"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="title-text"
                        >
                            Stay Updated with Timeline Slot<span className='text-primary text-3xl sm:text-5xl'>.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8"
                        >
                            <p className="text-base text-gray-950 leading-relaxed">Join our community to receive the latest news, tips, and exclusive offers straight to your inbox. Whether you're a service provider looking to streamline your bookings or a client seeking seamless appointment management, we've got you covered!</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white mt-12 flex px-1 py-1.5 rounded-full md:w-4/5 mx-auto overflow-hidden"
                        >
                            <input type='email' placeholder='Enter your email' className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type='button'
                                className="btn-blue transition-all text-white text-sm rounded-full px-4 py-2.5"
                            >
                                Subscribe
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe