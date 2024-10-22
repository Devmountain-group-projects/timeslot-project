import React from 'react';
import { BsClock, BsSun, BsMoon } from 'react-icons/bs';
import { IoMdChatboxes } from 'react-icons/io';

const LiveSupportHours = () => {
    const getCurrentStatus = () => {
        // This would normally be connected to your actual timezone logic
        const now = new Date();
        const hours = now.getHours();
        const day = now.getDay();

        // Check if current time is within business hours (9 AM - 6 PM, Mon-Fri)
        const isBusinessDay = day >= 1 && day <= 5;
        const isBusinessHours = hours >= 9 && hours < 18;

        return isBusinessDay && isBusinessHours;
    };

    const supportSchedule = [
        {
            day: "Monday - Friday",
            hours: "9:00 AM - 6:00 PM EST",
            response: "Immediate response via live chat"
        },
        {
            day: "Weekend & After Hours",
            hours: "Offline",
            response: "Email response within 24 hours"
        }
    ];

    const isOpen = getCurrentStatus();

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-6">
                    <BsClock className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold">Live Support Hours</h2>
                </div>

                {/* Status Banner */}
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${isOpen ? 'bg-green-50' : 'bg-gray-50'}`}>
                    <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`} />
                    <span className={`text-sm font-medium ${isOpen ? 'text-green-700' : 'text-gray-600'}`}>
                        {isOpen ? 'Live Support is Currently Available' : 'Live Support is Currently Offline'}
                    </span>
                </div>

                {/* Schedule Grid */}
                <div className="space-y-4">
                    {supportSchedule.map((schedule, index) => (
                        <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                {index === 0 ? (
                                    <BsSun className="text-blue-500" size={20} />
                                ) : (
                                    <BsMoon className="text-blue-500" size={20} />
                                )}
                                <div>
                                    <h3 className="font-medium text-secondary text-sm">
                                        {schedule.day}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {schedule.hours}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <IoMdChatboxes className="text-gray-400" size={16} />
                                <span>{schedule.response}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm text-center">
                        All times are in Eastern Standard Time (EST).
                        For urgent matters outside of business hours,
                        please submit a support ticket and we'll respond as soon as possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LiveSupportHours;