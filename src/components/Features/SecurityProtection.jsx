import React from 'react'
import { motion } from 'framer-motion'
import SecurityImg from '../../assets/images/securityimg.jpg'
import GoogleCalendarLogo from '../../assets/images/googlecalendarlogo.jpg'
import OutlookCalendarLogo from '../../assets/images/outlookcalendarlogo.png'
import { FaLock } from "react-icons/fa";

const SecurityProtection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-12 max-width mx-auto">
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="title-text mb-6">Your Data, Secure and Protected<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <motion.p
                            className="mb-4 text-sm text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            At Timeline Slot, we prioritize the security of your business and client data. Our platform is built with advanced security measures to ensure that sensitive information is always protected. From secure payment processing to data encryption, we provide peace of mind so you can focus on running your business.
                        </motion.p>
                        <motion.p
                            className="mb-4 text-sm text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            With Timeline Slot, your data is in safe hands. We continuously monitor and update our systems to meet the highest security standards, allowing you to manage your business confidently without worrying about your information being compromised.
                        </motion.p>
                        <motion.div
                            className='mt-8'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <h3 className="font-bold text-lg mb-4">Key Security Features:</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                        <FaLock className="text-primary mr-2" />
                                        End-to-End Encryption
                                    </h4>
                                    <p className="text-sm text-gray-700 ml-6">
                                        All data, from appointment details to personal information, is encrypted to protect against unauthorized access and ensure confidentiality.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                        <FaLock className="text-primary mr-2" />
                                        Secure Payment Processing
                                    </h4>
                                    <p className="text-sm text-gray-700 ml-6">
                                        Payments are processed through trusted, industry-leading gateways like Stripe and PayPal, ensuring that financial transactions are safe and secure.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                        <FaLock className="text-primary mr-2" />
                                        Compliance with Industry Standards
                                    </h4>
                                    <p className="text-sm text-gray-700 ml-6">
                                        Timeline Slot complies with industry regulations, including GDPR, to safeguard the privacy and security of your data.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                        <FaLock className="text-primary mr-2" />
                                        Regular Security Audits
                                    </h4>
                                    <p className="text-sm text-gray-700 ml-6">
                                        Our platform undergoes routine security checks and updates to ensure that it remains protected against the latest threats and vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img src={SecurityImg} alt="Software integration" className="object-contain w-full h-full" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default SecurityProtection