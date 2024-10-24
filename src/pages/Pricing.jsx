import React from 'react';
import { motion } from 'framer-motion';
import PricingSection from '../components/Home/PricingSection';
import { HiCurrencyDollar, HiScale } from 'react-icons/hi';
import { FaQuestion, FaRocket } from 'react-icons/fa';
import { TbTableOptions } from 'react-icons/tb';
import { BsCreditCard, BsCalendarCheck, BsShieldCheck } from 'react-icons/bs';
import { MdSupport, MdApi } from 'react-icons/md';
import QuestionsImg from '../assets/images/questionsimg.jpg';

const Pricing = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <motion.div
                className="py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-width mx-auto text-center">
                    <HiCurrencyDollar className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Simple, Transparent Pricing
                        <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Choose the perfect plan for your business. All plans include our core features with additional capabilities as you grow.
                    </motion.p>
                </div>
            </motion.div>

            {/* Main Pricing Section */}
            <PricingSection />

            {/* Features Comparison */}
            <motion.div
                className="py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="max-width mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <HiScale className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-center">Compare Plan Features
                            <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                        </h2>
                    </div>
                    <div className="overflow-x-auto rounded-xl shadow-lg">
                        <table className="w-full bg-white">
                            <thead>
                                <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                                    <th className="p-6 text-left text-gray-800 font-bold">Feature</th>
                                    <th className="p-6 text-center text-gray-800 font-bold">Free</th>
                                    <th className="p-6 text-center text-gray-800 font-bold">Professional</th>
                                    <th className="p-6 text-center text-gray-800 font-bold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Monthly Appointments", icon: <BsCalendarCheck className="inline mr-2" />, free: "50", pro: "Unlimited", enterprise: "Unlimited" },
                                    { feature: "Calendar Integrations", icon: <TbTableOptions className="inline mr-2" />, free: "Google Only", pro: "All Major Platforms", enterprise: "All Major Platforms" },
                                    { feature: "Client Management", icon: <BsShieldCheck className="inline mr-2" />, free: "Basic", pro: "Advanced", enterprise: "Enterprise-Grade" },
                                    { feature: "Support", icon: <MdSupport className="inline mr-2" />, free: "Email", pro: "Priority Email & Chat", enterprise: "24/7 Dedicated" },
                                    { feature: "Custom Branding", icon: <BsCreditCard className="inline mr-2" />, free: "✗", pro: "✓", enterprise: "✓" },
                                    { feature: "API Access", icon: <MdApi className="inline mr-2" />, free: "✗", pro: "✗", enterprise: "✓" },
                                ].map((row, index) => (
                                    <tr key={index}
                                        className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                            }`}
                                    >
                                        <td className="p-6 font-medium flex items-center">
                                            <span className="text-primary">{row.icon}</span>
                                            {row.feature}
                                        </td>
                                        <td className="p-6 text-center">
                                            <span className={`${row.free === "✗" ? 'text-red-500' : row.free === "✓" ? 'text-green-500 font-medium' : ''}`}>
                                                {row.free}
                                            </span>
                                        </td>
                                        <td className="p-6 text-center">
                                            <span className={`${row.pro === "✗" ? 'text-red-500' : row.pro === "✓" ? 'text-green-500 font-medium' : ''}`}>
                                                {row.pro}
                                            </span>
                                        </td>
                                        <td className="p-6 text-center">
                                            <span className={`${row.enterprise === "✗" ? 'text-red-500' : row.enterprise === "✓" ? 'text-green-500 font-medium' : ''}`}>
                                                {row.enterprise}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                className="py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="max-width mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <FaQuestion className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions
                            <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <img
                                src={QuestionsImg}
                                alt="FAQ Illustration"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        <div className="grid gap-8">
                            {[
                                {
                                    question: "Can I upgrade or downgrade my plan at any time?",
                                    answer: "Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle."
                                },
                                {
                                    question: "Is there a contract or commitment?",
                                    answer: "No long-term contracts required. You can cancel your subscription at any time."
                                },
                                {
                                    question: "Do you offer a free trial?",
                                    answer: "Yes, all paid plans come with a 14-day free trial, no credit card required."
                                },
                                {
                                    question: "What payment methods do you accept?",
                                    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-gray p-6 rounded-lg hover:shadow-md transition-shadow"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CTA Section */}
            <div className="bg-white py-6 px-6">
                <div className="max-width mx-auto">
                    <motion.div
                        className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 sm:p-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
                            <FaRocket className="w-12 h-12 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                            <p className="mb-8 text-lg">Try Timeline Slot free for 14 days, no credit card required.</p>
                            <motion.button
                                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Free Trial
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;