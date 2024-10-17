import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalComponent = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

const EditDeleteAppointmentModal = ({ appointment, onClose, onEdit, onDelete }) => {
    const [updatedAppointment, setUpdatedAppointment] = useState({
        ...appointment,
        details: { ...appointment.details }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name in updatedAppointment) {
            setUpdatedAppointment(prev => ({ ...prev, [name]: value }));
        } else {
            setUpdatedAppointment(prev => ({ ...prev, details: { ...prev.details, [name]: value } }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(updatedAppointment);
    };

    return (
        <ModalComponent onClose={onClose}>
            <h2 className="text-base font-semibold mb-4">Edit Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                    <div className="w-1/2 space-y-4">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                Appointment Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={updatedAppointment.date}
                                onChange={handleInputChange}
                                required
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                                Appointment Time
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={updatedAppointment.time}
                                onChange={handleInputChange}
                                required
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                                Service Type
                            </label>
                            <select
                                id="serviceType"
                                name="serviceType"
                                value={updatedAppointment.serviceType}
                                onChange={handleInputChange}
                                required
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            >
                                <option value="Consultation">Consultation</option>
                                <option value="Follow-up">Follow-up</option>
                                <option value="Therapy">Therapy</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <input
                                type="text"
                                id="status"
                                name="status"
                                value={updatedAppointment.status}
                                onChange={handleInputChange}
                                required
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-4">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={updatedAppointment.details.price}
                                onChange={handleInputChange}
                                required
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700 mb-1">
                                Payment Status
                            </label>
                            <input
                                type="text"
                                id="paymentStatus"
                                name="paymentStatus"
                                value={updatedAppointment.details.paymentStatus}
                                onChange={handleInputChange}
                                required
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={updatedAppointment.details.description}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        type="submit"
                        className="btn-blue-dashboard"
                    >
                        Update Appointment
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(appointment.id)}
                        className="btn-red"
                    >
                        Delete Appointment
                    </button>
                </div>
            </form>
        </ModalComponent>
    );
};

export default EditDeleteAppointmentModal;