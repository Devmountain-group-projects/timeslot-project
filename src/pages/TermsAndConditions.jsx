import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

const TermsAndConditions = () => {
    // State to track which accordion items are open
    const [openSections, setOpenSections] = useState({});

    // Toggle accordion section
    const toggleSection = (sectionId) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    // Accordion data
    const sections = [
        {
            id: 'acceptance',
            title: '1. Acceptance of Terms',
            content: (
                <div className="space-y-2">
                    <p>By accessing and using Timeline Slot, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our service.</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You must be at least 18 years old to use this service</li>
                        <li>You must provide accurate and complete information when creating an account</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'service',
            title: '2. Service Description',
            content: (
                <div className="space-y-2">
                    <p>Timeline Slot provides an online scheduling platform that allows businesses and individuals to manage appointments and bookings. Our services include:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Online appointment scheduling and management</li>
                        <li>Calendar synchronization</li>
                        <li>Automated notifications and reminders</li>
                        <li>Client management tools</li>
                        <li>Analytics and reporting features</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'obligations',
            title: '3. User Obligations',
            content: (
                <div className="space-y-2">
                    <p>As a user of Timeline Slot, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Provide accurate and up-to-date information</li>
                        <li>Use the service in compliance with all applicable laws</li>
                        <li>Not engage in any activity that interferes with or disrupts the service</li>
                        <li>Not attempt to gain unauthorized access to any part of the service</li>
                        <li>Maintain appropriate security for your account credentials</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'privacy',
            title: '4. Privacy and Data Protection',
            content: (
                <div className="space-y-2">
                    <p>We take your privacy seriously and handle your data in accordance with our Privacy Policy. By using Timeline Slot, you agree that:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>We may collect and process your personal information as described in our Privacy Policy</li>
                        <li>You are responsible for obtaining consent from your clients for data collection</li>
                        <li>We implement appropriate security measures to protect your data</li>
                        <li>We may use cookies and similar technologies to improve our service</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'subscription',
            title: '5. Subscription and Payments',
            content: (
                <div className="space-y-2">
                    <p>Timeline Slot offers various subscription plans. By subscribing to our service:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You agree to pay all fees associated with your chosen subscription plan</li>
                        <li>Payments are processed securely through our payment providers</li>
                        <li>Subscriptions automatically renew unless cancelled</li>
                        <li>Refunds are provided in accordance with our refund policy</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'liability',
            title: '6. Limitation of Liability',
            content: (
                <div className="space-y-2">
                    <p>Timeline Slot provides the service "as is" and:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>We do not guarantee uninterrupted or error-free service</li>
                        <li>We are not liable for any indirect, incidental, or consequential damages</li>
                        <li>Our total liability is limited to the amount paid for the service</li>
                        <li>We are not responsible for third-party services integrated with our platform</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'modifications',
            title: '7. Modifications to Terms',
            content: (
                <div className="space-y-2">
                    <p>Timeline Slot reserves the right to modify these terms at any time:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>We will notify users of significant changes to these terms</li>
                        <li>Continued use of the service after changes constitutes acceptance</li>
                        <li>Users are responsible for reviewing terms regularly</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <>
            {/* Header Section */}
            <motion.section
                className='relative px-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative bg-gradient-gray text-white text-center sm:py-24 py-14 mt-8 px-6 max-width mx-auto rounded-3xl">
                    <motion.h1
                        className="title-text"
                        {...fadeIn}
                    >
                        Terms and Conditions
                        <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Last Updated: October 24, 2024
                    </motion.p>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-gray-600 mb-8">
                        Welcome to Timeline Slot. Please read these terms and conditions carefully before using our scheduling platform. By accessing or using Timeline Slot, you agree to be bound by these terms and conditions.
                    </p>

                    {/* Custom Accordion */}
                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <span className="text-xl font-semibold">{section.title}</span>
                                    <ChevronDownIcon
                                        className={`w-6 h-6 transition-transform duration-200 ${openSections[section.id] ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${openSections[section.id] ? 'max-h-[500px] py-4' : 'max-h-0'
                                        }`}
                                >
                                    <div className="text-gray-600">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div
                        className="mt-12 p-6 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Questions About Our Terms?</h2>
                        <p className="text-gray-600">
                            If you have any questions about these terms and conditions, please contact our support team at:{' '}
                            <a href="mailto:support@timelineslot.com" className="text-primary hover:underline">
                                support@timelineslot.com
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default TermsAndConditions;