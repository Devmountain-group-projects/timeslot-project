import React, { useState } from 'react';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import PlaceholderAvatar from '/src/assets/images/placeholderavatar.png';

const ClientInfoModal = ({ client, onClose }) => (
    <div className="fixed inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-secondary">Client Info</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <FaTimes />
                </button>
            </div>
            <div className="flex items-center mb-4">
                <img src={PlaceholderAvatar} alt={client.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h3 className="font-semibold text-base">{client.name}</h3>
                    <p className="text-gray-600 text-sm">{client.email}</p>
                    <p className="text-gray-600 text-sm">{client.phone}</p>
                </div>
            </div>
            <hr className="my-4" />
            <div>
                <h3 className="font-semibold text-lg mb-2 text-secondary">Appointment Info</h3>
                <p className='text-sm'><span className="font-medium text-secondary text-sm">Date Time Start:</span> {client.appointmentStart}</p>
                <p className='text-sm'><span className="font-medium text-secondary text-sm">Date Time End:</span> {client.appointmentEnd}</p>
                <p className='text-sm'><span className="font-medium text-secondary text-sm">Status:</span> {client.status}</p>
                <p className='text-sm'><span className="font-medium text-secondary text-sm">Notes:</span> {client.notes}</p>
                <p className='text-sm'><span className="font-medium text-secondary text-sm">Date Created:</span> {client.dateCreated}</p>
                <p className='text-sm'><span className="font-medium text-secondary text-sm">Date Updated:</span> {client.dateUpdated}</p>
            </div>
        </div>
    </div>
);

const BookingItem = ({ client, onClick, isLast }) => (
    <div className={`${!isLast ? 'border-b border-gray-300' : ''}`}>
        <div className="flex items-center py-4 px-3 cursor-pointer" onClick={onClick}>
            <div className="w-[22%] flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <img
                        src={PlaceholderAvatar}
                        alt={client.name}
                        className="rounded-full object-cover absolute inset-0 w-full h-full"
                    />
                </div>
            </div>
            <div className="w-[45%] flex flex-col justify-center items-start text-left">
                <h3 className="font-semibold text-sm md:text-base">{client.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{client.date}</p>
                <p className="text-xs md:text-sm font-medium">{client.service}</p>
            </div>
            <div className="w-[32%] flex justify-end items-center">
                <FaChevronRight className="text-gray-400" />
            </div>
        </div>
    </div>
);

const RecentBookings = () => {
    const [selectedClient, setSelectedClient] = useState(null);

    const recentBookings = [
        {
            name: "John Doe",
            service: "Haircut",
            date: "October 15, 2024",
            email: "john.doe@example.com",
            phone: "(555) 123-4567",
            appointmentStart: "October 15, 2024 10:00 AM",
            appointmentEnd: "October 15, 2024 11:00 AM",
            status: "Confirmed",
            notes: "Client prefers a shorter style this time",
            dateCreated: "October 1, 2024 9:30 AM",
            dateUpdated: "October 10, 2024 2:15 PM"
        },
        {
            name: "Jane Smith",
            service: "Manicure",
            date: "October 16, 2024",
            email: "jane.smith@example.com",
            phone: "(555) 987-6543",
            appointmentStart: "October 16, 2024 2:00 PM",
            appointmentEnd: "October 16, 2024 3:00 PM",
            status: "Pending",
            notes: "First-time client, allergic to certain nail polishes",
            dateCreated: "October 5, 2024 11:45 AM",
            dateUpdated: "October 5, 2024 11:45 AM"
        },
        {
            name: "Mike Johnson",
            service: "Beard Trim",
            date: "October 17, 2024",
            email: "mike.johnson@example.com",
            phone: "(555) 456-7890",
            appointmentStart: "October 17, 2024 11:30 AM",
            appointmentEnd: "October 17, 2024 12:00 PM",
            status: "Confirmed",
            notes: "Regular client, prefers traditional straight razor shave",
            dateCreated: "October 3, 2024 3:20 PM",
            dateUpdated: "October 12, 2024 10:05 AM"
        },
    ];

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Recent Bookings</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                {recentBookings.map((client, index) => (
                    <BookingItem
                        key={index}
                        client={client}
                        onClick={() => setSelectedClient(client)}
                        isLast={index === recentBookings.length - 1}
                    />
                ))}
            </section>
            {selectedClient && (
                <ClientInfoModal
                    client={selectedClient}
                    onClose={() => setSelectedClient(null)}
                />
            )}
        </div>
    );
};

export default RecentBookings;