import React, { useState } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { contactService } from '../../../services/contactServices';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        issueType: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const issueTypes = [
        { id: 'technical', label: 'Technical Support' },
        { id: 'billing', label: 'Billing Inquiry' },
        { id: 'feedback', label: 'Product Feedback' },
        { id: 'feature', label: 'Feature Request' },
        { id: 'other', label: 'Other' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error/success messages when user starts typing
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (!formData.name || !formData.email || !formData.issueType || !formData.subject || !formData.message) {
            setError('Please fill in all the fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await contactService.createContact({
                toName: 'Business Owner',
                fromName: formData.name,
                email: formData.email,
                subject: `${formData.issueType}: ${formData.subject}`,
                message: formData.message,
            });

            setSuccess(response.message || 'Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                issueType: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setError(error.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="p-6">
                {/* Header */}
                <motion.div
                    className="flex items-center space-x-2 mb-6"
                    variants={itemVariants}
                >
                    <BsEnvelope className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-gray-600 text-sm mb-6"
                    variants={itemVariants}
                >
                    Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.
                </motion.p>

                {/* Error/Success Messages */}
                {error && (
                    <motion.div
                        className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-lg"
                        variants={itemVariants}
                    >
                        {error}
                    </motion.div>
                )}
                {success && (
                    <motion.div
                        className="mb-4 p-3 bg-green-50 text-green-500 text-sm rounded-lg"
                        variants={itemVariants}
                    >
                        {success}
                    </motion.div>
                )}

                {/* Contact Form */}
                <motion.form
                    className="space-y-4"
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                >
                    {/* Name Input */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500"
                        />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500"
                        />
                    </motion.div>

                    {/* Issue Type Dropdown */}
                    <motion.div variants={itemVariants}>
                        <select
                            name="issueType"
                            value={formData.issueType}
                            onChange={handleInputChange}
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500 bg-white"
                        >
                            <option value="" disabled>Select Issue Type</option>
                            {issueTypes.map(type => (
                                <option key={type.id} value={type.id}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </motion.div>

                    {/* Subject Input */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500"
                        />
                    </motion.div>

                    {/* Message Textarea */}
                    <motion.div variants={itemVariants}>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            rows="6"
                            className="w-full text-sm text-gray-800 ring-1 ring-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        className="flex justify-center"
                        variants={itemVariants}
                    >
                        <button
                            type="submit"
                            className="btn-blue-dashboard"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.div>
                </motion.form>

                {/* Privacy Notice */}
                <motion.div
                    className="mt-6 bg-gray-50 ring-2 ring-gray-200 rounded-lg p-4"
                    variants={itemVariants}
                >
                    <p className="text-gray-600 text-sm text-center">
                        By submitting this form, you agree to our privacy policy.
                        We'll only use your information to respond to your inquiry.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactUs;