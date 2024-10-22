import React from 'react';
import { FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import { IoMdHelpCircle } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import IntroImage from '../../../assets/images/placeholdercover.png';

const Intro = ({ onNavigateToFAQ }) => {
    const faqItems = [
        {
            id: 1,
            question: "How do I set up my business profile?",
            description: "Learn how to create and optimize your business profile to attract more clients.",
            link: "/help/business-profile-setup"
        },
        {
            id: 2,
            question: "How do I manage my appointments?",
            description: "Master the appointment management system to keep your schedule organized.",
            link: "/help/appointment-management"
        },
        {
            id: 3,
            question: "How do I integrate Google Calendar?",
            description: "Sync your Timeline Slot schedule with Google Calendar for better time management.",
            link: "/help/google-calendar-integration"
        },
        {
            id: 4,
            question: "How do I send automated email reminders?",
            description: "Set up automated reminders to keep your clients informed and reduce no-shows.",
            link: "/help/email-reminders"
        }
    ];

    const handleLearnMoreClick = (e) => {
        e.preventDefault();
        onNavigateToFAQ();
    };

    return (
        <div className="w-full space-y-4">
            {/* Welcome Card */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="relative h-40 mb-4">
                    <img
                        src={IntroImage}
                        alt="Help Center Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-white text-center px-4">
                            <h1 className="text-2xl font-bold mb-2">Welcome to our Help Center</h1>
                            <p className="text-lg">How can we help you today?</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-start space-x-4">
                        <div className="text-blue-500">
                            <RiCustomerService2Fill size={24} />
                        </div>
                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                Need help? We're here to support you! Explore our resources or reach out directly to get the answers and assistance you need to make the most of Timeline Slot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Preview Card */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                        <IoMdHelpCircle size={24} className="text-blue-500" />
                        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {faqItems.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-200"
                            >
                                <div className="flex items-start space-x-3">
                                    <FaQuestionCircle className="text-blue-500 mt-1" size={16} />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 mb-1">
                                            {item.question}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {item.description}
                                        </p>
                                        <a
                                            href="#"
                                            onClick={handleLearnMoreClick}
                                            className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700"
                                        >
                                            Learn more
                                            <FaArrowRight size={12} className="ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            className="btn-blue-dashboard"
                            onClick={onNavigateToFAQ}
                        >
                            View All FAQs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;