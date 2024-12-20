import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { MdCorporateFare } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const plans = [
        {
            name: "Free",
            monthlyPrice: 0.00,
            yearlyPrice: 0.00,
            icon: TbFreeRights,
            features: [
                "Basic appointment scheduling",
                "Client self-scheduling",
                "Automated email reminders",
                "1 user account",
                "Basic reporting",
                "Priority Generations",
                "Mobile-friendly access"
            ]
        },
        {
            name: "Professional",
            monthlyPrice: 19.99,
            yearlyPrice: 199.99,
            icon: GiProgression,
            features: [
                "Unlimited appointments",
                "Multiple users with role-based access",
                "Advanced calendar management",
                "Payments integration",
                "SMS & email reminders",
                "Custom service listings",
                "Client reviews & feedback",
                "Detailed reports & analytics",
                "Custom branding options",
            ]
        },
        {
            name: "Enterprise",
            monthlyPrice: 49.99,
            yearlyPrice: 599.99,
            icon: MdCorporateFare,
            features: [
                "Everything in Professional, plus:",
                "Multi-location support",
                "API access for custom integrations",
                "White-label branding",
                "Custom reports and data exports",
                "Enterprise-grade security ",
                "Dedicated customer success manager",
                "Priority phone support"
            ]
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const renderPricingCards = () => (
        plans.map((plan, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                className="bg-white shadow-none sm:shadow-lg rounded-3xl p-10 hover:ring-2 ring-primary transition-all duration-300 flex flex-col h-full"
            >
                <div className="flex-grow">
                    <p className="text-gray-950 text-lg mb-3">{plan.name}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-baseline">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isYearly ? 'yearly' : 'monthly'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-baseline"
                                >
                                    <span className="text-4xl font-bold">
                                        ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                                    </span>
                                    <sub className="text-gray-500 font-medium text-base ml-1">
                                        / {isYearly ? 'year' : 'month'}
                                    </sub>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <plan.icon className="text-6xl opacity-20 text-primary" />
                    </div>

                    <hr className="my-6 border-gray-300" />

                    <div>
                        <ul className="space-y-4">
                            {plan.features.map((feature, featureIndex) => (
                                <motion.li
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.05 * featureIndex }}
                                    className="flex items-center text-sm text-gray-500"
                                >
                                    <FaCheckCircle className="mr-3 text-secondary w-5 h-5 flex-shrink-0" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="btn-blue"
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.div>
        ))
    );

    return (
        <div className="bg-white py-12 px-6">
            <div className="max-width max-lg:max-w-max mx-auto">
                <div className="bg-gradient-gray rounded-3xl p-8 sm:p-20 py-12 sm:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="sm:text-4xl text-2xl font-bold mb-2 text-gray-800">Choose a Subscription<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <p className="text-base text-gray-800">choose a plan tailored to your needs</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex mx-auto bg-white rounded-full max-w-[300px] p-1 mt-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full text-base py-2 px-4 tracking-wide rounded-full ${!isYearly ? 'bg-secondary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full text-base py-2 px-4 tracking-wide rounded-full ${isYearly ? 'bg-secondary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={isMobile ? "mt-8" : "grid lg:grid-cols-3 gap-8 mt-12"}
                    >
                        {isMobile ? (
                            <Slider {...sliderSettings}>
                                {renderPricingCards()}
                            </Slider>
                        ) : (
                            renderPricingCards()
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;