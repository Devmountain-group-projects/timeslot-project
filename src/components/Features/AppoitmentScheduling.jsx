import React from 'react'
import { motion } from "framer-motion";

import TimeImg from '../../assets/images/timeimg.jpg'
import ClientSelfImg from '../../assets/images/clientselfimg.jpg'
import RecurringImg from '../../assets/images/recurringimg.jpg'
import IntegrationImg from '../../assets/images/integrationimg.jpg'
import RescheduleImg from '../../assets/images/rescheduleimg.jpeg'
import TimeZoneImg from '../../assets/images/timezoneimg.jpg'

const features = [
    {
        title: "Real-Time Availability",
        description: "Keep your schedule up to date with real-time availability updates. Clients can book open slots instantly, ensuring smooth and conflict-free appointments.",
        image: TimeImg
    },
    {
        title: "Client Self-Booking",
        description: "Empower your clients to book appointments directly through your customized booking page. With a few clicks, they can find the perfect time that fits into their schedule.",
        image: ClientSelfImg
    },
    {
        title: "Recurring Appointments",
        description: "Set up recurring appointments with ease, so clients can book their favorite services on a regular basis. Perfect for maintaining client loyalty and steady bookings.",
        image: RecurringImg
    },
    {
        title: "Calendar Integration",
        description: "Sync appointments with Google Calendar, Outlook, and more to ensure your bookings are always in sync with your personal schedule. Stay organized and never miss a booking!",
        image: IntegrationImg
    },
    {
        title: "Easy Rescheduling and Cancellations",
        description: "Need to make a change? Clients can quickly reschedule or cancel appointments directly from their confirmation email or through their account, making the process seamless.",
        image: RescheduleImg
    },
    {
        title: "Time Zone Support",
        description: "Never worry about time zone confusion. Timeline Slot automatically adjusts appointment times based on the location of your clients, ensuring smooth global scheduling.",
        image: TimeZoneImg
    }
];

const FeatureSection = ({ title, description, image }) => {
    return (
        <motion.section
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-72 h-72 mb-4 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={title}
                />
            </motion.div>
            <div className="text-center">
                <motion.h3
                    className="text-xl font-bold text-secondary mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-gray-700 text-sm w-5/6 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.section>
    );
};

const AppoitmentScheduling = () => {
    return (
        <div>
            <div className="my-24">
                <div className="max-width mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 gap-6 px-6 py-12 sm:py-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <motion.h2
                                className="title-text mr-0 sm:mr-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Easily schedule appointments with our simple, user-friendly system for businesses and clients
                                <span className='text-primary text-3xl sm:text-5xl'>.</span>
                            </motion.h2>
                        </div>
                        <div>
                            <motion.p
                                className="mb-3 text-sm sm:text-base text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Scheduling appointments has never been easier for your business or clients. With our seamless, user-friendly system, businesses can manage their availability in real-time, reducing scheduling conflicts and keeping operations running smoothly. Clients can quickly find available time slots and book appointments without any back-and-forth communication.
                            </motion.p>
                            <motion.p
                                className="text-sm sm:text-base text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Our platform is designed to simplify the entire process, offering features like calendar syncing, automated reminders, and flexible rescheduling options. Whether you're handling a few appointments or hundreds, Timeline Slot ensures a smooth and efficient booking experience for everyone involved.
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        {features.map((feature, index) => (
                            <FeatureSection key={index} {...feature} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AppoitmentScheduling