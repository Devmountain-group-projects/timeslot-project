import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SectionImg from '../../assets/images/sectionimg2.jpg';

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-200 pb-4"
    >
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-between items-center w-full text-left"
            onClick={toggleOpen}
        >
            <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
            </motion.div>
        </motion.button>
        <AnimatePresence>
            {isOpen && (
                <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-800 mt-4"
                >
                    {answer}
                </motion.p>
            )}
        </AnimatePresence>
    </motion.div>
);


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: "What is Timeline Slot?",
            answer: "Timeline Slot is an online appointment booking system designed to help businesses streamline scheduling and manage client appointments efficiently. Our platform allows clients to book, cancel, and reschedule appointments easily while providing service providers with tools to manage their schedules and communicate with clients."
        },
        {
            question: "How does the booking process work?",
            answer: "Clients can browse available services, select a provider, and view their available time slots. Once they choose a convenient time, they can complete the booking process, often including payment, and receive confirmation via email or SMS."
        },
        {
            question: "Is there a mobile app available?",
            answer: "Currently, Timeline Slot is optimized for mobile browsers, allowing users to access the platform seamlessly on any device. A dedicated mobile app is in development and will be available soon!"
        },
        {
            question: "What payment methods do you support?",
            answer: "We support multiple payment methods, including credit cards, PayPal, and other popular payment gateways. This ensures a secure and convenient payment process for both clients and service providers."
        },
        {
            question: "Can I customize my booking page?",
            answer: "Yes! Our Professional and Enterprise plans allow users to customize their booking pages with their branding, including logos, colors, and specific service offerings, to create a unique experience for their clients."
        },
        {
            question: "How do I manage my availability?",
            answer: "Providers can easily manage their availability through their dashboard. You can set your working hours, specify time slots for appointments, and even block out specific dates when you are unavailable."
        },
        {
            question: "What support do you offer?",
            answer: "We offer a range of support options, including email and chat support for Professional and Enterprise users. Our help center also includes documentation, tutorials, and FAQs to assist users at any time."
        },
        {
            question: "Can I upgrade or downgrade my plan?",
            answer: "Absolutely! Users can easily upgrade or downgrade their plans at any time. Simply navigate to your account settings, and follow the prompts to change your subscription plan."
        },
        {
            question: "What happens if I need to cancel an appointment?",
            answer: "Clients can cancel their appointments directly through the platform. Providers can set their cancellation policies, and clients will receive reminders about cancellation deadlines to avoid any fees, if applicable."
        },
        {
            question: "Is my data secure with Timeline Slot?",
            answer: "Yes, we prioritize your data security. Timeline Slot uses encryption protocols and secure servers to protect sensitive information, ensuring that both clients and providers can use the platform safely."
        }
    ];

    return (
        <div className="bg-white px-6 py-24">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-width mx-auto"
            >
                <div className="flex flex-col lg:flex-row gap-12 justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:w-5/12"
                    >
                        <h2 className="title-text">Frequently asked questions<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <p className="text-base text-gray-800 mt-6">
                            At Timeline Slot, we understand that you may have questions as you explore our platform. This FAQ section aims to provide clear and helpful answers to the most common inquiries about our services, features, and how to get the most out of your experience. If you don't find what you're looking for, feel free to reach out to our support team for further assistance!
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8"
                        >
                            <img src={SectionImg} alt="FAQ Section" className="w-full" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 lg:w-6/12 max-lg:mt-6"
                    >
                        {faqItems.map((item, index) => (
                            <FaqItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Faq;