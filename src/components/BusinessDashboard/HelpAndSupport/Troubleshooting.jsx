import React, { useState } from 'react';
import { IoMdBuild } from "react-icons/io";
import { FaChevronDown, FaChevronUp, FaExclamationCircle } from 'react-icons/fa';
import { MdNotifications, MdPayment, MdLogin } from "react-icons/md";
import { AiOutlineSync } from "react-icons/ai";

const Troubleshooting = () => {
    const [openIssue, setOpenIssue] = useState(null);

    const commonIssues = [
        {
            id: 1,
            title: "I'm unable to log in",
            icon: <MdLogin size={20} />,
            description: "Having trouble accessing your account? Here are some common solutions:",
            solutions: [
                "Make sure you're using the correct email address",
                "Check if your password is correct (use the 'Forgot Password' link if needed)",
                "Clear your browser cache and cookies",
                "Try using a different browser",
                "Check if your account is verified (check your email for verification link)"
            ],
            quickFix: "Try resetting your password using the 'Forgot Password' link on the login page.",
            additionalHelp: "If you're still unable to log in, contact our support team with your account email."
        },
        {
            id: 2,
            title: "My clients are not receiving booking notifications",
            icon: <MdNotifications size={20} />,
            description: "If your clients aren't receiving notifications, check these potential issues:",
            solutions: [
                "Verify the email addresses are entered correctly",
                "Check your notification settings in the dashboard",
                "Ensure automated notifications are enabled",
                "Check if the client hasn't unsubscribed from notifications",
                "Verify the notification templates are properly configured"
            ],
            quickFix: "Go to Settings > Notifications to verify your notification settings are enabled.",
            additionalHelp: "You can manually resend notifications from the appointment details page."
        },
        {
            id: 3,
            title: "Appointments are not syncing with Google Calendar",
            icon: <AiOutlineSync size={20} />,
            description: "Issues with Google Calendar sync can be resolved by checking these points:",
            solutions: [
                "Verify your Google Calendar integration is still connected",
                "Check if you've granted all necessary permissions",
                "Ensure you're using the correct Google account",
                "Try disconnecting and reconnecting the integration",
                "Check if there are any conflicts in appointment times"
            ],
            quickFix: "Go to Settings > Integrations and try reconnecting your Google Calendar.",
            additionalHelp: "You may need to reauthorize the integration if it's been more than 6 months."
        },
        {
            id: 4,
            title: "I'm having trouble processing payments",
            icon: <MdPayment size={20} />,
            description: "Payment processing issues can be resolved by checking these common causes:",
            solutions: [
                "Verify your payment gateway integration is active",
                "Check if your payment account is properly configured",
                "Ensure your client's card details are valid",
                "Check for any payment gateway outages",
                "Verify transaction limits and restrictions"
            ],
            quickFix: "Test your payment integration using the test mode in Settings > Payments.",
            additionalHelp: "Contact your payment provider's support for specific error codes and solutions."
        }
    ];

    const toggleIssue = (id) => {
        setOpenIssue(openIssue === id ? null : id);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-6">
                    <IoMdBuild className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold">Troubleshooting</h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                    Find solutions to common issues and learn how to quickly resolve them. If you can't find what you're looking for, please contact our support team.
                </p>

                {/* Issues List */}
                <div className="space-y-4">
                    {commonIssues.map((issue) => (
                        <div
                            key={issue.id}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleIssue(issue.id)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="text-blue-500">
                                        {issue.icon}
                                    </div>
                                    <h3 className="font-medium text-sm text-gray-800">
                                        {issue.title}
                                    </h3>
                                </div>
                                {openIssue === issue.id ?
                                    <FaChevronUp className="text-gray-400" /> :
                                    <FaChevronDown className="text-gray-400" />
                                }
                            </button>

                            {openIssue === issue.id && (
                                <div className="p-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-600 text-sm mb-4">
                                        {issue.description}
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm mb-4">
                                        {issue.solutions.map((solution, index) => (
                                            <li key={index} className="ml-4">
                                                {solution}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Quick Fix Section */}
                                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                                        <div className="flex items-center space-x-2 text-blue-700 mb-2">
                                            <FaExclamationCircle size={16} />
                                            <span className="font-medium text-sm">Quick Fix</span>
                                        </div>
                                        <p className="text-blue-600 text-sm">
                                            {issue.quickFix}
                                        </p>
                                    </div>

                                    {/* Additional Help */}
                                    <p className="text-sm text-gray-500 italic">
                                        {issue.additionalHelp}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Help Footer */}
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-center">
                        Still having issues? Our support team is here to help!
                        <a href="/contact-support" className="text-blue-500 hover:text-blue-700 ml-1">
                            Contact Support
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Troubleshooting;