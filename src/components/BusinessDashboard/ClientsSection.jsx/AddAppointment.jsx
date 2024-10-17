import React, { useState } from 'react';
import { FaPlus, FaUser, FaCalendarAlt, FaClock, FaClipboardList, FaCheckCircle, FaChevronRight, FaTimes } from 'react-icons/fa';
import placeholderAvatar from '/src/assets/images/placeholderavatar.png';
import User8 from '/src/assets/images/user8.png';
import User9 from '/src/assets/images/user9.png';
import User10 from '/src/assets/images/user10.png';
import User11 from '/src/assets/images/user11.png';
import User12 from '/src/assets/images/user12.png';

const AddAppointment = () => {
    const [selectedClient, setSelectedClient] = useState(0);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [clients, setClients] = useState([
        {
            id: 1,
            name: 'John Doe',
            date: '2024-10-20',
            time: '10:00',
            serviceType: 'Consultation',
            status: 'Scheduled',
            photo: User9,
            details: {
                serviceProvider: 'Dr. Emily Brown',
                createdAt: '2024-10-15',
                updatedAt: '2024-10-16',
                price: '150',
                description: 'Initial consultation for new patient',
                paymentStatus: 'Paid',
            }
        },
        {
            id: 2,
            name: 'Jane Smith',
            date: '2024-10-21',
            time: '14:00',
            serviceType: 'Follow-up',
            status: 'Pending',
            photo: User8,
            details: {
                serviceProvider: 'Dr. Michael Lee',
                createdAt: '2024-10-18',
                updatedAt: '2024-10-19',
                price: '100',
                description: 'Follow-up appointment for medication review',
                paymentStatus: 'Pending',
            }
        },
        {
            id: 3,
            name: 'Yasmin Abdulaziz',
            date: '2024-10-22',
            time: '11:30',
            serviceType: 'Therapy',
            status: 'Confirmed',
            photo: User10,
            details: {
                serviceProvider: 'Dr. Sarah Wilson',
                createdAt: '2024-10-17',
                updatedAt: '2024-10-17',
                price: '200',
                description: 'Weekly therapy session for anxiety management',
                paymentStatus: 'Insured',
            }
        },
    ]);

    const mockClients = [
        { id: 1, name: 'John Doe', photo: User9 },
        { id: 2, name: 'Jane Smith', photo: User8 },
        { id: 3, name: 'Yasmin Abdulaziz', photo: User10 },
        { id: 4, name: 'Michael Johnson', photo: User11 },
        { id: 5, name: 'Emily Chen', photo: User12 },
    ];

    const handleEditAppointment = (updatedAppointment) => {
        const updatedClients = clients.map(client =>
            client.id === updatedAppointment.id
                ? { ...client, ...updatedAppointment, details: { ...client.details, ...updatedAppointment.details, updatedAt: new Date().toLocaleDateString() } }
                : client
        );
        setClients(updatedClients);
        setShowEditModal(false);
    };

    const handleDelete = (id) => {
        const updatedClients = clients.filter(client => client.id !== id);
        setClients(updatedClients);
        setSelectedClient(0);
    };

    const handleCreateAppointment = (newAppointment) => {
        const updatedClients = [...clients, { ...newAppointment, id: clients.length + 1 }];
        setClients(updatedClients);
        setShowCreateModal(false);
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <header className="flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Add Appointment</h2>
                <button
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Add Appointment"
                    onClick={() => setShowCreateModal(true)}
                >
                    <FaPlus className="text-lg" />
                </button>
            </header>
            <hr className="border-t border-gray-300 w-full m-0" />

            <div className="flex-grow flex overflow-hidden">
                <div className="w-[45%] overflow-y-auto border-r border-gray-300">
                    {clients.map((client, index) => (
                        <div
                            key={client.id}
                            className={`border-b border-gray-300 last:border-b-0 p-4 cursor-pointer ${selectedClient === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                            onClick={() => setSelectedClient(index)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <img src={client.photo} alt={client.name} className="w-12 h-12 rounded-full mr-3 object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-sm md:text-base">{client.name}</h3>
                                        <InfoItem icon={FaCalendarAlt} label="Appointment Date" value={client.date} />
                                        <InfoItem icon={FaClock} label="Appointment Time" value={client.time} />
                                        <InfoItem icon={FaClipboardList} label="Service Type" value={client.serviceType} />
                                        <InfoItem icon={FaCheckCircle} label="Status" value={client.status} />
                                    </div>
                                </div>
                                {selectedClient === index && (
                                    <FaChevronRight className="text-gray-400 text-lg" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-[55%] p-4 overflow-y-auto">
                    <h3 className="font-semibold text-base mb-4">Appointment Details</h3>
                    <InfoItem label="Service Provider" value={clients[selectedClient].details.serviceProvider} />
                    <InfoItem label="Created At" value={clients[selectedClient].details.createdAt} />
                    <InfoItem label="Updated At" value={clients[selectedClient].details.updatedAt} />
                    <InfoItem label="Price" value={`$${clients[selectedClient].details.price}`} />
                    <InfoItem label="Description" value={clients[selectedClient].details.description} />
                    <InfoItem label="Payment Status" value={clients[selectedClient].details.paymentStatus} />

                    <div className="mt-4">
                        <label htmlFor="notes" className="block text-xs font-medium text-secondary mb-1 uppercase">
                            Appointment Notes
                        </label>
                        <textarea
                            id="notes"
                            rows={4}
                            className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4"
                            placeholder="Enter appointment notes here..."
                        />
                        <div className="flex justify-start gap-4">
                            <button
                                onClick={() => setShowEditModal(true)}
                                className="btn-blue-dashboard"
                            >
                                Edit Appointment
                            </button>
                            <button
                                onClick={() => handleDelete(clients[selectedClient].id)}
                                className="btn-red"
                            >
                                Delete Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showEditModal && (
                <EditAppointmentModal
                    appointment={clients[selectedClient]}
                    onClose={() => setShowEditModal(false)}
                    onEdit={handleEditAppointment}
                />
            )}

            {showCreateModal && (
                <CreateAppointmentModal
                    onClose={() => setShowCreateModal(false)}
                    onCreate={handleCreateAppointment}
                    clients={mockClients}
                />
            )}
        </div>
    );
};

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center text-xs md:text-sm mb-1">
        {Icon && <Icon size={12} className="mr-1 text-secondary" />}
        <span className="font-medium mr-1 uppercase text-xs text-secondary">{label}:</span>
        <span className="text-gray-600 text-sm">{value}</span>
    </div>
);
const EditAppointmentModal = ({ appointment, onClose, onEdit }) => {
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-base font-semibold">Edit Appointment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2 space-y-4">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                    Date
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
                                    Time
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
                    <button
                        type="submit"
                        className="btn-blue-dashboard mt-4"
                    >
                        Update Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

const CreateAppointmentModal = ({ onClose, onCreate, clients }) => {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedClient = clients.find(client => client.id === parseInt(newAppointment.clientId));
        onCreate({
            ...newAppointment,
            name: selectedClient.name,
            photo: selectedClient.photo,
            time: newAppointment.startTime,
            details: {
                serviceProvider: 'TBD',
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().toLocaleDateString(),
                price: newAppointment.price,
                description: newAppointment.description,
                paymentStatus: newAppointment.paymentStatus,
            }
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-base font-semibold">Create New Appointment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2 space-y-4">
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
                                        <option key={client.id} value={client.id}>{client.name}</option>
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
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                                    Appointment Start Time
                                </label>
                                <input
                                    type="time"
                                    id="startTime"
                                    name="startTime"
                                    value={newAppointment.startTime}
                                    onChange={handleInputChange}
                                    required
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                                    Appointment End Time
                                </label>
                                <input
                                    type="time"
                                    id="endTime"
                                    name="endTime"
                                    value={newAppointment.endTime}
                                    onChange={handleInputChange}
                                    required
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 space-y-4">
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
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select a service type</option>
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
                                    value={newAppointment.status}
                                    onChange={handleInputChange}
                                    required
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={newAppointment.price}
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
                                    value={newAppointment.description}
                                    onChange={handleInputChange}
                                    required
                                    rows={2}
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
                                    value={newAppointment.paymentStatus}
                                    onChange={handleInputChange}
                                    required
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn-blue-dashboard mt-4"
                    >
                        Create Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAppointment;