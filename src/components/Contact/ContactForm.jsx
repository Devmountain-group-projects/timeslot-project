import React from 'react'
import ContactImg from '../../assets/images/contactimg.jpg'
import { motion } from 'framer-motion';

const ContactForm = () => {
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
                        <motion.p className="text-sm text-gray-600 mb-8 leading-relaxed" variants={itemVariants}>Have questions or need assistance? We're here to help! Whether you're a current user or just exploring Timeline Slot, feel free to reach out to our team. We're committed to providing you with the support you need to make the most of our platform.</motion.p>

                        <motion.form className="bg-gradient-gray rounded-xl p-6 space-y-4" variants={containerVariants}>
                            {['Name', 'Email', 'Subject'].map((placeholder, index) => (
                                <motion.input
                                    key={index}
                                    type={placeholder.toLowerCase() === 'email' ? 'email' : 'text'}
                                    placeholder={placeholder}
                                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300"
                                    variants={itemVariants}
                                />
                            ))}
                            <motion.textarea
                                placeholder='Message'
                                rows="6"
                                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-primary transition duration-300"
                                variants={itemVariants}
                            ></motion.textarea>
                            <motion.button
                                type='button'
                                className="btn-blue m-auto block"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
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
    )
}

export default ContactForm