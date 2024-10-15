import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionImg from '../../assets/images/sectionimg6.jpg'
import { FaChevronRight, FaPhone } from 'react-icons/fa';
import { MdAddBusiness } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const BusinessRegister = ({ onContinue }) => {
    const [formData, setFormData] = useState({
        businessName: '',
        address_line1: '',
        address_line2: '',
        city: '',
        zipCode: '',
        contactInfo: '',
        // website: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        onContinue(formData); // Call the onContinue prop to move to the next step
    };

    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    return (
        <div className="font-[sans-serif] relative">
            <div className="min-h-screen flex items-center justify-center py-6 px-4">
                <div className="w-full max-w-7xl flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border border-gray-300 rounded-lg p-8 max-w-md bg-white shadow-lg z-10 mx-auto md:mx-0"
                    >
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <h3 className="text-gray-800 text-3xl font-extrabold">Get Started with Your Business<span className='text-primary text-3xl sm:text-5xl'>.</span></h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Join thousands of businesses that trust Timeline Slot to manage their appointments, streamline client interactions, and grow their operations. Create your business account to unlock easy scheduling, real-time availability updates, and seamless payment processing—all from one powerful platform.</p>
                            </motion.div>

                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Business name</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="businessName"
                                        type="text"
                                        required
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter business name"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                    />
                                    <MdAddBusiness className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>

                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Where are you located?</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="address_line1"
                                        type="text"
                                        required
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your Address"
                                        value={formData.address_line1}
                                        onChange={handleInputChange}
                                    />
                                    <FaLocationDot className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>

                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Unit or Suite (optional)</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="address_line2"
                                        type="text"
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter unit number"
                                        value={formData.address_line2}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={inputVariants} initial="hidden" animate="visible" className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="text-gray-800 text-sm mb-2 block">City</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="city"
                                            type="text"
                                            required
                                            className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                            placeholder="Enter your city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="text-gray-800 text-sm mb-2 block">Zip Code</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="zipCode"
                                            type="text"
                                            required
                                            className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                            placeholder="Enter zip code"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </motion.div>


                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">What is your Business Phone Number?</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="contactInfo"
                                        type="text"
                                        required
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your phone number"
                                        value={formData.contactInfo}
                                        onChange={handleInputChange}
                                    />
                                    <FaPhone className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div>

                            {/* <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">What is your Website?</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="website"
                                        type="text"
                                        required
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your Website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                    />
                                    <TbWorldWww className="w-[18px] h-[18px] text-gray-500 absolute right-4 cursor-pointer" />
                                </div>
                            </motion.div> */}

                            <motion.div
                                className="flex items-center justify-center !mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.button
                                    type="submit"
                                    className="btn-blue flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Continue
                                    <motion.div
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <FaChevronRight className="ml-2" />
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block md:w-[600px] lg:w-[800px] xl:w-[1000px] h-[1000px] max-h-screen overflow-hidden"
                    >
                        <img
                            src={SectionImg}
                            className="w-full h-full object-cover"
                            alt="Dining Experience"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default BusinessRegister