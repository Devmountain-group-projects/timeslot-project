import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { appointmentService } from '../../../services/appointmentService';
import { useAppointment } from '../../../context/ApptContext';

const CreateAppointmentModal = ({ onClose, onCreate, clients }) => {
        const {
            appointments,
            addAppointment,
            fetchClients,
        } = useAppointment();
    const [newAppointment, setNewAppointment] = useState({
        clientId: '',
        date: '',
        startTime: '',
        endTime: '',
        serviceType: '',
        status: '',
        price: '',
        description: '',
        paymentStatus: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // fetchClients()
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const selectedClient = clients.find(client => client.id === parseInt(newAppointment.clientId));

            if (!selectedClient) {
                throw new Error('No client selected');
            }

            console.log('Selected client:', selectedClient);
            console.log('Client email:', selectedClient.email);

            const appointmentData = {
                ...newAppointment,
                name: selectedClient.name,
                time: newAppointment.startTime,
                details: {
                    serviceProvider: 'TBD',
                    createdAt: new Date().toLocaleDateString(),
                    updatedAt: new Date().toLocaleDateString(),
                    price: newAppointment.price,
                    description: newAppointment.description,
                    paymentStatus: newAppointment.paymentStatus,
                }
            };

            //Adds tha appointment to the data base
            addAppointment(newAppointment)

            // console.log('Email sent to:', selectedClient.email);
            // console.log('Appointment created and email sent:', result);

            onCreate(appointmentData);
            onClose();

        } catch (error) {
            console.error('Error creating appointment:', error);
            alert('Failed to create appointment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const modalContent = (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] px-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    disabled={isSubmitting}
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-base font-semibold mb-4">Create New Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="w-full sm:w-1/2 space-y-4">
                            <div>
                                <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 mb-1">
                                    Client Name
                                </label>
                                <select
                                    id="clientId"
                                    name="clientId"
                                    value={newAppointment.clientId}
                                    onChange={handleInputChange}
                                    required
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select a client</option>
                                    {clients.map(client => (
                                        <option key={client.id} value={client.id}>
                                            {client.name} ({client.email})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Appointment Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={newAppointment.date}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div className="flex flex-row space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        id="startTime"
                                        name="startTime"
                                        value={newAppointment.startTime}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                                        End Time
                                    </label>
                                    <input
                                        type="time"
                                        id="endTime"
                                        name="endTime"
                                        value={newAppointment.endTime}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                                    Service Type
                                </label>
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={newAppointment.serviceType}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select a service type</option>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Follow-up">Follow-up</option>
                                    <option value="Therapy">Therapy</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 space-y-4 mt-4 sm:mt-0">
                            <div className="flex flex-row space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={newAppointment.status}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Select status</option>
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={newAppointment.price}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={newAppointment.description}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    rows={3}
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
                                    value={newAppointment.paymentStatus}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select payment status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Overdue">Overdue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-blue-dashboard mt-4 w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Creating Appointment...' : 'Create Appointment'}
                    </button>
                </form>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default CreateAppointmentModal;