import React from 'react';
import { BsEnvelope } from 'react-icons/bs';

const ContactUs = () => {
    const issueTypes = [
        { id: 'technical', label: 'Technical Support' },
        { id: 'billing', label: 'Billing Inquiry' },
        { id: 'feedback', label: 'Product Feedback' },
        { id: 'feature', label: 'Feature Request' },
        { id: 'other', label: 'Other' }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-6">
                    <BsEnvelope className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                    Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.
                </p>

                {/* Contact Form */}
                <form className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500 "
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500 "
                        />
                    </div>

                    {/* Issue Type Dropdown */}
                    <div>
                        <select
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500  bg-white"
                            defaultValue=""
                        >
                            <option value="" disabled>Select Issue Type</option>
                            {issueTypes.map(type => (
                                <option key={type.id} value={type.id}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Subject Input */}
                    <div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500 "
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <textarea
                            placeholder="Message"
                            rows="6"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500  resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="btn-blue-dashboard"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Privacy Notice */}
                <div className="mt-6 bg-gray-50 ring-2 ring-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm text-center">
                        By submitting this form, you agree to our privacy policy.
                        We'll only use your information to respond to your inquiry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;