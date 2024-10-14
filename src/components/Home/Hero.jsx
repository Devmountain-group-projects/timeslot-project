import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoogleImg from '../../assets/images/google.png'
import OutlookImg from '../../assets/images/outlook.png'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full pb-[100%]">
            <div className="absolute inset-0">
                {/* Bottom layer */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={`slide-${currentSlide}`}
                        src={`/src/assets/images/slides/slide${currentSlide + 1}.png`}
                        alt={`Slide ${currentSlide + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>

                {/* Middle layer */}
                <img
                    src="/src/assets/images/slides/baseimg.png"
                    alt="Base layer"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />

                {/* Top layer */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={`slide-info-${currentSlide}`}
                        src={`/src/assets/images/slides/slide${currentSlide + 1}info.png`}
                        alt={`Slide ${currentSlide + 1} info`}
                        className="absolute top-0 left-0 w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-6 pb-12">
            <div className="max-width mx-auto">
                <div className="bg-gradient-gray rounded-3xl overflow-hidden">
                    <div className="py-12 sm:py-24 px-6 sm:px-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="max-lg:text-center">
                                <motion.h2
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-black lg:text-5xl md:text-5xl text-4xl font-extrabold lg:max-w-4xl"
                                >
                                    Streamline Your Appointments with Ease
                                    <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-secondary text-base sm:text-xl mt-6 mb-8 uppercase font-bold"
                                >
                                    The ultimate solution for scheduling, managing, and growing your service-based business.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Book, track, and manage appointments in real time. Whether you're a client or a provider, Timeline Slot simplifies your scheduling process—all in one platform.</p>
                                    <div className="mt-12 flex gap-4 items-center flex-wrap max-lg:justify-center">
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
                                        className="mt-24 grid grid-cols-2 items-center"
                                    >
                                        <img src={GoogleImg} className="w-24 sm:w-44 mx-auto" alt="google-logo" />
                                        <img src={OutlookImg} className="w-24 sm:w-44 mx-auto" alt="outlook-logo" />
                                    </motion.div>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="w-full max-w-2xl mx-auto lg:max-w-none"
                            >
                                <Slider />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero