import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { appointmentService } from '../../../services/appointmentService';

const EditDeleteAppointmentModal = ({ appointment, onClose, onEdit, onDelete }) => {
    const [updatedAppointment, setUpdatedAppointment] = useState({
        ...appointment,
        details: { ...appointment.details }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name in updatedAppointment) {
            setUpdatedAppointment(prev => ({ ...prev, [name]: value }));
        } else {
            setUpdatedAppointment(prev => ({ ...prev, details: { ...prev.details, [name]: value } }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send update notification email
            await appointmentService.updateAppointment(
                updatedAppointment,
                updatedAppointment.email // Email from the appointment data
            );

            onEdit(updatedAppointment);
        } catch (error) {
            console.error('Error updating appointment:', error);
            alert('Failed to update appointment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        setIsSubmitting(true);

        try {
            // Send cancellation notification email
            await appointmentService.deleteAppointment(
                appointment,
                appointment.email
            );

            onDelete(appointment.id);
        } catch (error) {
            console.error('Error deleting appointment:', error);
            alert('Failed to delete appointment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl w-full relative">
                <button
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-base font-semibold mb-4">Edit Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="w-full sm:w-1/2 space-y-4">
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                <select
                                    id="status"
                                    name="status"
                                    value={updatedAppointment.status}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Confirmed">Confirmed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 space-y-4">
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
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700 mb-1">
                                    Payment Status
                                </label>
                                <select
                                    id="paymentStatus"
                                    name="paymentStatus"
                                    value={updatedAppointment.details.paymentStatus}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Overdue">Overdue</option>
                                </select>
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
                                    disabled={isSubmitting}
                                    rows={4}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`btn-blue-dashboard w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Updating...' : 'Update Appointment'}
                        </button>
                        <button
                            type="button"
                            onClick={handleDelete}
                            disabled={isSubmitting}
                            className={`btn-red w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Deleting...' : 'Delete Appointment'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDeleteAppointmentModal;