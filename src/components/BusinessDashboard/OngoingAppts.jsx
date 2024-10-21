import React from 'react';
import { FaClock, FaChevronRight } from 'react-icons/fa';
import User3Img from '../../assets/images/user3.png';

const OngoingAppts = ({ onViewAllClients, onViewCalendar }) => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-3 px-3 bg-tertiary">
                <h2 className="text-xs sm:text-sm font-medium">On Going Appointments</h2>
                <button
                    className="text-gray-400 cursor-pointer hover:text-primary transition-colors duration-200"
                    aria-label="Expand"
                    onClick={onViewAllClients}
                >
                    <FaChevronRight className="text-lg" />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />

            <section className="flex-grow overflow-y-auto">
                <div className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <img src={User3Img} alt="Josh Simmons" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3" />
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base">Joshua Simmons</h3>
                                <p className="text-xs sm:text-sm text-gray-500">Service Type: Therapy Session</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className='text-xs sm:text-sm text-gray-500 font-medium'>11:00 - 12:00</span>
                            <FaClock
                                size={32}
                                className="text-primary ml-2 ring-1 ring-primary rounded-full p-[.4rem] bg-gradient-gray hover:bg-secondary hover:text-white hover:ring-1 hover:ring-secondary transition duration-300 cursor-pointer"
                                onClick={onViewCalendar}
                            />
                        </div>
                    </div>
                </div>
                <hr className='border-t border-gray-300 w-full m-0' />

                {/* Appointment Details */}
                <div className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                        <div className="w-full sm:w-[20%] space-y-3 sm:space-y-4">
                            <InfoItem label="Service Provider" value="John Doe" />
                            <InfoItem label="Service ID" value="#12345" />
                            <InfoItem label="Created at" value="10/14/2024" />
                            <InfoItem label="Updated at" value="10/14/2024" />
                            <InfoItem label="Price" value="$200" />
                        </div>
                        <div className="w-full sm:w-[30%] space-y-3 sm:space-y-4">
                            <InfoItem label="Description" value="Initial therapy session for stress management and anxiety reduction." />
                            <InfoItem label="Payment status" value="Paid" />
                            <InfoItem label="Status" value="On Time" />
                            <InfoItem label="Address" value="795 Ave No Name, Lehi, UT" />
                        </div>
                        <div className="w-full sm:w-[50%] flex flex-col">
                            <label htmlFor="notes" className="text-secondary text-xs font-medium uppercase mb-2">Appointment Notes</label>
                            <textarea
                                id="notes"
                                className="flex-grow border-2 border-gray-300 rounded-lg p-2 mb-2 text-xs sm:text-sm"
                                placeholder="Enter appointment notes here..."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="mb-2">
        <p className="text-secondary text-xs font-medium uppercase mb-1">{label}</p>
        <p className="text-xs sm:text-sm text-gray-600">{value}</p>
    </div>
);

export default OngoingAppts;