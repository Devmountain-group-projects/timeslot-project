import React from 'react';
import { motion } from 'framer-motion';
import Features from '../components/Home/Features';
import Reviews from '../components/Home/Reviews';
import WhyUsImg from '../assets/images/whyusimg.png';
import WhyUsImg2 from '../assets/images/whyusimg2.png';
import { BsCalendarCheck, BsGearWide } from "react-icons/bs";
import { MdNotifications, MdPayments, MdAnalytics } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { AiOutlineExpand } from "react-icons/ai";

const WhyUs = () => {
    const keyBenefits = [
        {
            title: "Seamless Appointment Management",
            description: "Our easy-to-use platform lets clients book, reschedule, and cancel appointments in real-time, reducing the burden on your staff and ensuring a smooth process for both parties."
        },
        {
            title: "Customizable Services",
            description: "Tailor your service listings, pricing, and availability to fit your business. With Timeline Slot, you have full control over how your services are presented and booked."
        },
        {
            title: "Automated Reminders",
            description: "Keep clients informed with automated email and SMS notifications, reducing no-shows and ensuring they never miss an appointment."
        },
        {
            title: "Secure Payments",
            description: "Accept payments easily through our secure, integrated payment processing system, helping you streamline transactions."
        },
        {
            title: "Comprehensive Analytics",
            description: "Track your performance with in-depth analytics that show appointment trends, revenue breakdowns, client retention, and more."
        },
        {
            title: "Multi-User Access",
            description: "Empower your team with role-based access to manage appointments, services, and clients, making collaboration easy."
        },
        {
            title: "Scalable for All Business Sizes",
            description: "Whether you're managing a solo practice or multiple locations, our platform scales with you as you grow."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="w-full">
                <div className="max-width mx-auto px-6">
                    <div className="bg-gradient-gray rounded-3xl p-6">
                        <div className="grid md:grid-cols-2 items-center gap-12">
                            <motion.div
                                className="max-md:order-1 max-md:text-center pl-0 sm:pl-6"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.h1
                                    className="title-text text-3xl sm:text-4xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Why Choose Timeline Slot
                                    <span className='text-primary text-3xl sm:text-5xl'>.</span>
                                </motion.h1>
                                <motion.p
                                    className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    At Timeline Slot, we understand that your time is valuable. That's why we've built a platform designed to streamline appointment scheduling and simplify your business operations. Whether you're a small business or a growing enterprise, our solution is tailored to meet your needs, helping you save time, boost revenue, and deliver exceptional service to your clients.
                                </motion.p>
                                <motion.div
                                    className="mt-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <motion.button
                                        type="button"
                                        className="btn-blue"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Started Free
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                            <motion.img
                                src={WhyUsImg}
                                className="lg:w-full md:w-11/12 rounded-lg"
                                alt="Why choose Timeline Slot"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <Features />

            {/* Key Benefits Section */}
            <div className="w-full">
                <div className="max-width mx-auto px-6 py-20">
                    <div className="bg-gradient-gray rounded-3xl p-6">
                        <div className="grid lg:grid-cols-2 items-center lg:gap-y-6">
                            <motion.div
                                className="lg:h-[480px] flex items-center"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <img
                                    src={WhyUsImg2}
                                    className="w-full h-full object-fill rounded-lg mb-8 sm:mb-0"
                                    alt="Timeline Slot benefits"
                                />
                            </motion.div>

                            <motion.div
                                className="max-lg:order-1 max-lg:text-center pl-0 sm:pl-6 pr-0 sm:pr-16"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h2 className="title-text">
                                    What Sets Us Apart
                                    <span className='text-primary text-3xl sm:text-5xl'>.</span>
                                </h2>
                                <p className="text-gray-800 mt-6 text-sm sm:text-base leading-relaxed">
                                    At Timeline Slot, we’re committed to delivering the most comprehensive and flexible scheduling solution, designed to meet the needs of businesses of all sizes. Whether you’re a small business owner or managing multiple locations, our platform seamlessly combines powerful, industry-leading features with an intuitive user experience. From appointment management and automated reminders to secure payments and insightful analytics, we ensure you have the tools to run your operations smoothly. With Timeline Slot, you can focus on what truly matters—delivering exceptional service to your clients and growing your business—while we take care of the scheduling details.
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12">
                            {keyBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-gray p-8 rounded-xl hover:shadow-md hover:ring-2 hover:ring-primary transition-all duration-300 relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <Reviews />

            {/* Call to Action */}
            <div className="bg-white py-6 px-6">
                <div className="max-width mx-auto">
                    <motion.div
                        className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 sm:p-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
                            <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Business?</h2>
                            <p className="mb-8 text-lg">Join hundreds of businesses who trust Timeline Slot to manage their appointments and streamline operations. Sign up today and experience the difference!</p>
                            <motion.button
                                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started Now
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;