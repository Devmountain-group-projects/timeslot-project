import React from 'react'
import { motion } from 'framer-motion'
import ReviewImg from '../../assets/images/reviewimg.jpg'

const ClientReviews = () => {
    const features = [
        {
            title: "Build Trust and Credibility",
            description: "Allow clients to share their honest feedback, helping potential customers feel confident when booking your services."
        },
        {
            title: "Improve Your Services",
            description: "Gain valuable insights from client feedback to continually refine and improve the quality of your offerings."
        },
        {
            title: "Showcase Positive Experiences",
            description: "Display glowing reviews on your profile to attract new clients and grow your business with proven customer satisfaction."
        },
        {
            title: "Respond to Reviews",
            description: "Engage with your clients by responding to their feedback, showing that you value their input and are committed to excellent service."
        }
    ];

    return (
        <div className="bg-white my-24 px-6">
            <div className="max-width mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={ReviewImg} className="w-full h-full object-cover rounded-md" alt='review image' />
                    </motion.div>

                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div>
                            <h2 className="title-text">Collect Valuable Client Feedback with Reviews<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed mt-6">
                                Empower your clients to share their experiences with your business by enabling them to leave reviews after their appointments. Client reviews not only help you improve your services but also build trust and credibility for new customers considering your offerings.
                            </p>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed mt-6">
                                With Timeline Slot, managing client reviews is simple. After each appointment, clients can leave feedback directly through the platform. Businesses can easily review and respond to comments, making it a powerful tool for building long-term relationships with customers.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-12">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-gray p-6 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ClientReviews