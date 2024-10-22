import React, { useState } from 'react';
import ContactImg from '../../assets/images/contactimg.jpg';
import { motion } from 'framer-motion';
import { contactService } from '../../services/contactServices.js';  // Ensure to import ContactService

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError('Please fill in all the fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await contactService.createContact({
                toName: 'Business Owner',  // Replace with the recipient's name
                fromName: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            });

            setSuccess(response.message);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="my-24 px-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 items-center gap-24">
                    <motion.div className="max-lg:text-center" variants={itemVariants}>
                        <motion.h2 className="title-text mb-4" variants={itemVariants}>Get in Touch with Us<span className='text-primary text-3xl sm:text-5xl'>.</span></motion.h2>
                        <motion.p className="text-sm text-gray-600 mb-8 leading-relaxed" variants={itemVariants}>Have questions or need assistance? We're here to help! Feel free to reach out.</motion.p>

                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}

                        <motion.form className="bg-gradient-gray rounded-xl p-6 space-y-4" onSubmit={handleSubmit} variants={containerVariants}>
                            {['name', 'email', 'subject'].map((field, index) => (
                                <motion.input
                                    key={index}
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300"
                                    variants={itemVariants}
                                />
                            ))}
                            <motion.textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder='Message'
                                rows="6"
                                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300"
                                variants={itemVariants}
                            ></motion.textarea>
                            <motion.button
                                type='submit'
                                className="btn-blue m-auto block"
                                disabled={isSubmitting}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    <motion.div
                        className="flex justify-center items-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="w-full aspect-square overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={ContactImg}
                                alt="Contact Us"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;