import React from 'react'
import { motion } from 'framer-motion'
import FeaturesImg1 from '../../assets/images/featuresimg1.jpg'
import Google from '../../assets/images/google.png'
import Hubspot from '../../assets/images/hubspot.png'
import Zapier from '../../assets/images/zapier.svg'
import Devmountain from '../../assets/images/devmountain.png'

const Intro = () => {
    return (
        <div>
            <div className="max-width mx-auto px-6 my-8">
                <div className="grid md:grid-cols-2 items-center">
                    <motion.div
                        className="max-md:order-1 max-md:text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h2
                            className="title-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Schedule meetings effortlessly<span className='text-primary text-3xl sm:text-5xl'>.</span>
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-base text-gray-600 leading-relaxed"
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
                            <motion.button
                                type='button'
                                className="btn-blue"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get started
                            </motion.button>
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
                            <h4 className="text-gray-800 font-bold text-base mb-10">Trusted by Teams & Businesses Nationwide</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                                {[Google, Hubspot, Zapier, Devmountain].map((logo, index) => (
                                    <motion.img
                                        key={index}
                                        src={logo}
                                        className="w-28 mx-auto"
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
                        className="lg:w-full md:w-11/12"
                        alt="Dining Experience"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro