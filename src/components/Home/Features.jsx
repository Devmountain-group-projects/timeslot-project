import React from 'react'
import { motion } from 'framer-motion'
import { FaRegEdit } from "react-icons/fa";
import { MdEventAvailable, MdOutlineNotificationAdd, MdOutlineRateReview, MdOutlineMobileFriendly } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const features = [
    {
        icon: FaRegEdit,
        title: "Effortless Appointment Booking",
        description: "Clients can schedule appointments quickly with an intuitive interface, ensuring a seamless booking experience."
    },
    {
        icon: MdEventAvailable,
        title: "Real-Time Availability",
        description: "Service providers can update their schedules instantly, allowing clients to see available slots and book in real-time."
    },
    {
        icon: MdOutlineNotificationAdd,
        title: "Automated Reminders",
        description: "Both clients and providers receive timely reminders via email or SMS, reducing missed appointments and no-shows."
    },
    {
        icon: MdOutlineRateReview,
        title: "Client Reviews & Ratings",
        description: "After each appointment, clients can leave ratings and reviews, helping providers build trust and maintain high service standards."
    },
    {
        icon: MdOutlineMobileFriendly,
        title: "Mobile-Friendly Design",
        description: "The platform is fully responsive, making it easy for users to manage their appointments from any device, whether desktop or mobile."
    },
    {
        icon: RiSecurePaymentLine,
        title: "Secure Payments",
        description: "Clients can pay for appointments securely through integrated payment gateways, offering peace of mind for both parties."
    }
];

const Features = () => {
    return (
        <div className="max-width mx-auto px-3 sm:px-6 py-12 sm:py-24">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="title-text text-center"
            >
                Discover Our Exclusive Features<span className='text-primary text-xl sm:text-3xl md:text-5xl'>.</span>
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 sm:p-6 border border-gray-200 rounded-lg"
                    >
                        <feature.icon className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-6 inline-block text-primary" />
                        <h3 className="text-gray-800 text-base sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
export default Features