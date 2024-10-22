import React, { useState } from 'react';
import { IoMdHelpCircle } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            category: "Getting Started",
            questions: [
                {
                    question: "How do I set up my business profile?",
                    answer: "Setting up your business profile is easy! Go to Settings > Business Profile and fill in your business details including name, description, location, and contact information. You can also add your logo and business hours."
                },
                {
                    question: "How do I manage my appointments?",
                    answer: "Navigate to the Calendar section to view and manage your appointments. You can create new appointments, edit existing ones, and set up recurring appointments. Use the drag-and-drop feature to quickly reschedule appointments."
                },
                {
                    question: "What payment methods are supported?",
                    answer: "We support various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can configure your preferred payment methods in Settings > Payments."
                }
            ]
        },
        {
            category: "Integration & Sync",
            questions: [
                {
                    question: "How do I integrate Google Calendar?",
                    answer: "To integrate Google Calendar, go to Settings > Integrations and click on 'Connect' next to Google Calendar. Follow the authentication steps to grant Timeline Slot access to your calendar. Once connected, your appointments will sync automatically."
                },
                {
                    question: "Can I integrate with other calendar apps?",
                    answer: "Yes! Timeline Slot supports integration with various calendar applications including Outlook, iCal, and other calendar services that support CalDAV protocol."
                },
                {
                    question: "How often does the calendar sync?",
                    answer: "Calendar sync occurs automatically every 5 minutes. You can also manually sync at any time by clicking the sync button in the calendar view."
                }
            ]
        },
        {
            category: "Notifications & Communication",
            questions: [
                {
                    question: "How do I send automated email reminders?",
                    answer: "Go to Settings > Notifications to set up automated email reminders. You can customize when reminders are sent (e.g., 24 hours before appointment) and what information to include in the reminder emails."
                },
                {
                    question: "Can I customize notification templates?",
                    answer: "Yes! You can customize all notification templates including confirmation emails, reminders, and follow-up messages. Use our template editor to modify the content and styling of your notifications."
                },
                {
                    question: "How do I enable SMS notifications?",
                    answer: "SMS notifications can be enabled in Settings > Notifications. You'll need to verify your phone number and purchase SMS credits to start sending text messages to your clients."
                }
            ]
        },
        {
            category: "Billing & Subscription",
            questions: [
                {
                    question: "How do I update my billing information?",
                    answer: "You can update your billing information in Settings > Billing. Here you can manage your payment methods, view invoices, and update your subscription plan."
                },
                {
                    question: "What happens if I exceed my monthly limits?",
                    answer: "If you approach your monthly limits, we'll notify you in advance. You can either upgrade your plan or purchase additional credits to continue using all features without interruption."
                }
            ]
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                    <IoMdHelpCircle size={24} className="text-blue-500" />
                    <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-8">
                    {faqData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                            <h3 className="text-base font-semibold text-gray-800 border-b pb-2">
                                {category.category}
                            </h3>
                            <div className="space-y-3">
                                {category.questions.map((item, questionIndex) => {
                                    const index = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <div
                                            key={questionIndex}
                                            className="border border-gray-200 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleQuestion(index)}
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                                            >
                                                <span className="font-medium text-sm text-secondary">{item.question}</span>
                                                <span className="ml-2 text-gray-500">
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="p-4 pt-0 text-gray-600 text-sm bg-gray-50">
                                                    {item.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;