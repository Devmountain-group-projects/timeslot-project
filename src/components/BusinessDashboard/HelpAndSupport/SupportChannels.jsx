import React from 'react';
import { BsHeadset, BsEnvelope, BsPhone, BsTicket } from 'react-icons/bs';
import { IoMdChatboxes } from 'react-icons/io';

const SupportChannels = () => {
    const supportChannels = [
        {
            id: 1,
            title: "Live Chat",
            description: "Connect with our support team in real-time for immediate assistance",
            icon: <IoMdChatboxes size={20} />,
            action: (
                <button className="btn-blue-dashboard">
                    Start Chat
                </button>
            )
        },
        {
            id: 2,
            title: "Email Support",
            description: "Send us an email and we'll get back to you within 24 hours",
            icon: <BsEnvelope size={20} />,
            action: (
                <a
                    href="mailto:support@timelineslot.com"
                    className="text-blue-500 hover:text-blue-700 text-sm"
                >
                    support@timelineslot.com
                </a>
            )
        },
        {
            id: 3,
            title: "Phone Support",
            description: "Call us directly for urgent matters during business hours",
            icon: <BsPhone size={20} />,
            action: (
                <a
                    href="tel:+1-800-123-4567"
                    className="text-blue-500 hover:text-blue-700 text-sm"
                >
                    1-800-123-4567
                </a>
            )
        },
        {
            id: 4,
            title: "Submit a Ticket",
            description: "Create a support ticket for detailed follow-up on your issue",
            icon: <BsTicket size={20} />,
            action: (
                <button
                    className="btn-blue-dashboard"
                    onClick={() => {/* Handle ticket form open */ }}
                >
                    Create Ticket
                </button>
            )
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-6">
                    <BsHeadset className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold">Support Channels</h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                    Choose your preferred way to get in touch with our support team. We're here to help!
                </p>

                {/* Support Channels Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {supportChannels.map(channel => (
                        <div
                            key={channel.id}
                            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="text-blue-500">
                                    {channel.icon}
                                </div>
                                <h3 className="font-medium text-secondary text-sm">
                                    {channel.title}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                {channel.description}
                            </p>
                            <div className="flex justify-end">
                                {channel.action}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Help Footer */}
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm text-center">
                        Our support team typically responds within 24 hours during business days.
                        For immediate assistance, please try our live chat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SupportChannels;