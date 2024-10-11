import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FeaturesImg1 from '../../assets/images/featuresheadimg.jpg'
import Google from '../../assets/images/google.png'
import Hubspot from '../../assets/images/hubspot.png'
import Zapier from '../../assets/images/zapier.svg'
import Devmountain from '../../assets/images/devmountain.png'

const Intro = () => {
    return (
        <div className="w-full">
            <div className="max-width mx-auto px-6 mt-4 sm:mt-8">
                <div className="bg-gradient-gray rounded-3xl p-6">
                    <div className="grid md:grid-cols-2 items-center gap-12">
                        <motion.div
                            className="max-md:order-1 max-md:text-center pl-0 sm:pl-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                className="title-text  text-3xl sm:text-5xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Schedule meetings effortlessly<span className='text-primary text-3xl sm:text-5xl'>.</span>
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Timeline Slot is designed to help businesses and clients schedule appointments effortlessly. From managing availability to handling payments, we've got everything you need to streamline your business operations and enhance client satisfaction.
                            </motion.p>
                            <motion.div
                                className="mt-8 space-x-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <Link to="/login">
                                    <motion.button
                                        type='button'
                                        className="btn-blue"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get started
                                    </motion.button>
                                </Link>
                            </motion.div>

                            <motion.hr
                                className="mt-8 border-gray-300"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            />

                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <h2 className="text-gray-800 font-bold text-base sm:text-xl mb-10">Trusted by Teams & Businesses Nationwide</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-8 sm:mb-0">
                                    {[Google, Hubspot, Zapier, Devmountain].map((logo, index) => (
                                        <motion.img
                                            key={index}
                                            src={logo}
                                            className="w-20 sm:w-28 mx-auto"
                                            alt={`logo-${index}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.img
                            src={FeaturesImg1}
                            className="lg:w-full md:w-11/12 rounded-lg"
                            alt="Image of a girl working on her phone"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro