import React from 'react'
import { motion } from 'framer-motion'
import SupportImg from '../../assets/images/supportimg.jpg'

const SupportAndCustomerSuccess = () => {
    return (
        <div className="px-6 pb-20">
            <div className="max-width mx-auto">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="title-text mb-6">Innovative Solutions for Modern Challenges, <br /> Your Success, Our Commitment<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="mb-4 text-sm text-gray-700">At Timeline Slot, we believe that great customer support is key to your success. Whether you're just getting started or need help with an advanced feature, our support team is always ready to assist you. From troubleshooting to answering questions, we're committed to providing you with the assistance you need to make the most of our platform.</p>
                        <p className="mb-6 text-sm text-gray-700">No matter where you are in your Timeline Slot journey, our support team is just a click away. We're dedicated to ensuring that you have everything you need to succeed with our platform, so you can focus on what you do best—serving your clients.</p>
                        <motion.button
                            type="button"
                            className="btn-blue"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <img src={SupportImg} alt="Customer Support" className="w-full mx-auto h-auto" />
                    </motion.div>
                    <div className="space-y-8 mt-20">
                        {['24/7 Help Center', 'Live Chat and Email Support', 'Priority Support for Professional and Enterprise Users', 'Onboarding Assistance'].map((title, index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            >
                                <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
                                <p className="text-gray-700 text-sm">
                                    {index === 0 && "Access our extensive knowledge base at any time for helpful articles, tutorials, and FAQs that cover every aspect of using Timeline Slot."}
                                    {index === 1 && "Connect with our customer support team via live chat or email for quick answers to your questions. Whether it's a simple query or more complex troubleshooting, we're here to help."}
                                    {index === 2 && "Users on our Professional and Enterprise plans receive priority support with faster response times, ensuring you get timely assistance when it matters most."}
                                    {index === 3 && "New to Timeline Slot? Our dedicated team will guide you through the onboarding process, helping you set up your account, manage your services, and configure your settings with ease."}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportAndCustomerSuccess