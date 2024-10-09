import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { MdCorporateFare } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

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

    return (
        <div>
            <div className="bg-gradient-gray px-4 py-24">
                <div className="max-w-5xl max-lg:max-w-max mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="sm:text-4xl text-2xl font-bold mb-2 text-gray-800">Choose a Subscription<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <p className="text-base text-gray-500">choose a plan tailored to your needs</p>
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
                            className={`w-full text-base py-2 px-4 tracking-wide rounded-full ${!isYearly ? 'bg-primary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full text-base py-2 px-4 tracking-wide rounded-full ${isYearly ? 'bg-primary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-sm:max-w-sm max-sm:mx-auto mt-12"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white shadow rounded-3xl p-10 hover:ring-2 ring-primary transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex-grow">
                                    <h4 className="text-gray-800 text-lg mb-3">{plan.name}</h4>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-baseline">
                                            <AnimatePresence>
                                                <motion.span
                                                    key={isYearly ? 'yearly' : 'monthly'}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-4xl font-semibold"
                                                >
                                                    ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                                                </motion.span>
                                            </AnimatePresence>
                                            <AnimatePresence>
                                                <motion.sub
                                                    key={isYearly ? 'yearly-sub' : 'monthly-sub'}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-gray-500 font-medium text-base ml-1"
                                                >
                                                    / {isYearly ? 'year' : 'month'}
                                                </motion.sub>
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
                                                    <FaCheckCircle size={20} className="mr-3 text-secondary" />
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
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default PricingSection