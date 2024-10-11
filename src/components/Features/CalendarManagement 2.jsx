import React from 'react'
import { motion } from 'framer-motion'
import CalendarIntegrationImg from '../../assets/images/calendarintegrationimg.jpg'
import GoogleCalendarLogo from '../../assets/images/googlecalendarlogo.jpg'
import OutlookCalendarLogo from '../../assets/images/outlookcalendarlogo.png'
import { FaCheckCircle } from "react-icons/fa";

const CalendarManagement = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-12 max-width mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img src={CalendarIntegrationImg} alt="Software integration" className="object-contain w-full h-full" />
                    </motion.div>
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="title-text mb-6">Stay Organized with Advanced Calendar Management<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <motion.p
                            className="mb-4 text-sm text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Easily manage your schedule with Timeline Slot's powerful calendar management tools. View and update your appointments in real-time, reschedule with drag-and-drop functionality, and set your availability for each day. Whether you're managing multiple team members or just your own appointments, our intuitive interface makes it simple to keep everything on track.
                        </motion.p>
                        <motion.p
                            className="mb-4 text-sm text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            For even greater convenience, Timeline Slot integrates with external calendars like Google Calendar and Outlook, allowing you to sync your appointments automatically. Stay on top of your schedule across all platforms, ensuring you never miss a booking, and enjoy the flexibility of managing your calendar from anywhere.
                        </motion.p>
                        <motion.ul
                            className='mt-8'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <li className="mb-4 text-sm text-gray-700">
                                <FaCheckCircle className="inline-block text-primary mr-2" />
                                Real-time updates for appointment changes.

                            </li>
                            <li className="mb-4 text-sm text-gray-700">
                                <FaCheckCircle className="inline-block text-primary mr-2" />
                                Drag-and-drop rescheduling for quick modifications.

                            </li>
                            <li className="mb-4 text-sm text-gray-700">
                                <FaCheckCircle className="inline-block text-primary mr-2" />
                                Calendar views (daily, weekly, monthly) to provide a clear overview of your schedule.

                            </li>
                            <li className="mb-4 text-sm text-gray-700">
                                <FaCheckCircle className="inline-block text-primary mr-2" />
                                Integration with Google Calendar and Outlook for automatic syncing.

                            </li>
                            <li className="mb-4 text-sm text-gray-700">
                                <FaCheckCircle className="inline-block text-primary mr-2" />
                                Multi-location and team calendar management (if applicable).

                            </li>
                        </motion.ul>
                        <motion.p
                            className="mb-4 text-lg font-bold mt-14 text-secondary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            We are integrated with Google Calendar and Outlook.
                        </motion.p>
                        <motion.div
                            className="flex items-center space-x-4 mt-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            <img src={GoogleCalendarLogo} alt="Google Calendar logo" className="h-12 md:h-16 sm:h-20 w-auto object-contain" />
                            <img src={OutlookCalendarLogo} alt="Outlook Calendar logo" className="h-12 md:h-16 sm:h-20 w-auto object-contain" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default CalendarManagement