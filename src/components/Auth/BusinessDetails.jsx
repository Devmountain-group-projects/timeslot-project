import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionImg from '../../assets/images/sectionimg7.jpg'
import { FaChevronRight } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";

const BusinessDetails = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        description: '',
        website: '',
        serviceName: '',
        serviceDescription: '',
        serviceDuration: '',
        servicePrice: '',
        availability: {
            monday: { start: '', end: '' },
            tuesday: { start: '', end: '' },
            wednesday: { start: '', end: '' },
            thursday: { start: '', end: '' },
            friday: { start: '', end: '' },
            saturday: { start: '', end: '' },
            sunday: { start: '', end: '' },
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAvailabilityChange = (day, field, value) => {
        setFormData(prevState => ({
            ...prevState,
            availability: {
                ...prevState.availability,
                [day]: {
                    ...prevState.availability[day],
                    [field]: value
                }
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        onSubmit(formData); // Call the onSubmit prop to complete registration
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
            <div className="min-h-screen flex items-center justify-center">

                {/* Fixed background image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed right-[37%] hidden md:block md:w-[600px] lg:w-[800px] xl:w-[1000px] h-[1000px] max-h-screen overflow-hidden"
                >
                    <img
                        src={SectionImg}
                        className="w-full h-full object-cover"
                        alt="Dining Experience"
                    />
                </motion.div>

                {/* Scrollable content area */}
                <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center py-6 px-4 md:ml-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border border-gray-300 rounded-lg p-8 max-w-md bg-white shadow-lg z-10 max-h-[90vh] overflow-y-auto"
                    >
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <h3 className="text-gray-800 text-3xl font-extrabold">Set Your Availability and Services<span className='text-primary text-3xl sm:text-5xl'>.</span></h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Help your clients book appointments easily by providing your business hours and available services. Simply enter the days and times you're available, and list the services you offer along with their duration and pricing.</p>
                            </motion.div>

                            {/* Website Input */}
                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Website</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="website"
                                        type="url"
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Enter your website URL"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                    />
                                    <TbWorldWww className="w-[18px] h-[18px] text-gray-500 absolute right-4" />
                                </div>
                            </motion.div>

                            {/* Service Details Inputs */}
                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Service Name</label>
                                <input
                                    name="serviceName"
                                    type="text"
                                    required
                                    className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                    placeholder="Enter service name"
                                    value={formData.serviceName}
                                    onChange={handleInputChange}
                                />
                            </motion.div>

                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Service Description</label>
                                <input
                                    name="serviceDescription"
                                    type="text"
                                    required
                                    className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                    placeholder="Brief description of the service"
                                    value={formData.serviceDescription}
                                    onChange={handleInputChange}
                                />
                            </motion.div>

                            <motion.div variants={inputVariants} initial="hidden" animate="visible" className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="text-gray-800 text-sm mb-2 block">Service Duration (minutes)</label>
                                    <input
                                        name="serviceDuration"
                                        type="number"
                                        required
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Duration"
                                        value={formData.serviceDuration}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-gray-800 text-sm mb-2 block">Price</label>
                                    <input
                                        name="servicePrice"
                                        type="number"
                                        required
                                        className="w-full text-sm text-gray-800 border px-4 py-3 rounded-lg outline-primary"
                                        placeholder="Price"
                                        value={formData.servicePrice}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </motion.div>

                            {/* Availability Inputs */}
                            <motion.div variants={inputVariants} initial="hidden" animate="visible">
                                <label className="text-gray-800 text-sm mb-2 block">Availability</label>
                                {Object.entries(formData.availability).map(([day, times]) => (
                                    <div key={day} className="flex items-center space-x-2 mb-2">
                                        <span className="w-24 text-sm">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                                        <input
                                            type="time"
                                            className="text-sm text-gray-800 border px-2 py-1 rounded-lg outline-primary"
                                            value={times.start}
                                            onChange={(e) => handleAvailabilityChange(day, 'start', e.target.value)}
                                        />
                                        <span>to</span>
                                        <input
                                            type="time"
                                            className="text-sm text-gray-800 border px-2 py-1 rounded-lg outline-primary"
                                            value={times.end}
                                            onChange={(e) => handleAvailabilityChange(day, 'end', e.target.value)}
                                        />
                                    </div>
                                ))}
                            </motion.div>

                            {/* Submit Button */}
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
                                    Proceed to Dashboard
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
                </div>
            </div>
        </div>
    )
}

export default BusinessDetails