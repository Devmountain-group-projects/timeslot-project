import React from 'react';
import { FaClipboardList } from "react-icons/fa6";
import PlaceholderAvatar from '/src/assets/images/placeholderavatar.png';

const BookingItem = ({ name, service, date }) => (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-100 transition-colors duration-300">
        <img src={PlaceholderAvatar} alt={name} className="w-10 h-10 rounded-full" />
        <div className="flex-grow">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500">{service} - {date}</p>
        </div>
    </div>
);

const RecentBookings = () => {
    const recentBookings = [
        { name: "John Doe", service: "Haircut", date: "Oct 15" },
        { name: "Jane Smith", service: "Manicure", date: "Oct 16" },
        { name: "Mike Johnson", service: "Beard Trim", date: "Oct 17" },
    ];

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Recent Bookings</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                {recentBookings.map((booking, index) => (
                    <React.Fragment key={index}>
                        <BookingItem {...booking} />
                        {index < recentBookings.length - 1 && <hr className='border-t border-gray-200 w-full m-0' />}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default RecentBookings;