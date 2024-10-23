import React, { useState } from 'react';
import { FaPlus, FaCalendarAlt, FaClock, FaClipboardList, FaCheckCircle, FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';
import User9 from '/src/assets/images/user9.png';


const AddAppointment = ({ onCreateAppointment, onEditAppointment }) => {

    const [selectedClient, setSelectedClient] = useState(0);
    const [clients, setClients] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'rodrigomcobos@gmail.com',
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
    ]);

    const toggleAccordion = (index) => {
        if (selectedClient === index) {
            setSelectedClient(null);
        } else {
            setSelectedClient(index);
        }
    };

    return (
        <div className="flex flex-col h-full overflow-hidden border-2 border-gray-300 rounded-xl">
            <header className="flex-shrink-0 flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Add Appointment</h2>
                <button
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Add Appointment"
                    onClick={onCreateAppointment}
                >
                    <FaPlus className="text-lg" />
                </button>
            </header>
            <hr className="border-t border-gray-300 w-full m-0" />

            <div className="flex-grow overflow-hidden">
                <div className="lg:hidden overflow-y-auto h-full">
                    {clients.map((client, index) => (
                        <div key={client.id} className="border-b border-gray-300 last:border-b-0">
                            <div
                                className="flex items-start justify-between p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
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
                                {selectedClient === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {selectedClient === index && (
                                <div className="p-4 bg-gray-50">
                                    <AppointmentDetails client={client} onEdit={() => onEditAppointment(client)} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex h-full">
                    <div className="w-[45%] overflow-y-auto border-r border-gray-300 h-full">
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

                    <div className="w-[55%] overflow-y-auto h-full">
                        {clients[selectedClient] && (
                            <AppointmentDetails
                                client={clients[selectedClient]}
                                onEdit={() => onEditAppointment(clients[selectedClient])}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AppointmentDetails = ({ client, onEdit }) => (
    <div className="p-4">
        <h3 className="font-semibold text-base mb-4">Appointment Details</h3>
        <InfoItem label="Service Provider" value={client.details.serviceProvider} />
        <InfoItem label="Created At" value={client.details.createdAt} />
        <InfoItem label="Updated At" value={client.details.updatedAt} />
        <InfoItem label="Price" value={`$${client.details.price}`} />
        <InfoItem label="Description" value={client.details.description} />
        <InfoItem label="Payment Status" value={client.details.paymentStatus} />

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
                    onClick={onEdit}
                    className="btn-blue-dashboard"
                >
                    Edit Appointment
                </button>
            </div>
        </div>
    </div>
);

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center text-xs md:text-sm mb-1">
        {Icon && <Icon size={12} className="mr-1 text-secondary" />}
        <span className="font-medium mr-1 uppercase text-xs text-secondary">{label}:</span>
        <span className="text-gray-600 text-sm">{value}</span>
    </div>
);

export default AddAppointment;