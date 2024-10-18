import React from 'react';
import { FaClock, FaChevronRight } from 'react-icons/fa';
import User3Img from '../../assets/images/user3.png';

const OngoingAppts = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">On Going Appointments</h2>
                <button
                    className="text-gray-400 cursor-pointer hover:text-primary transition-colors duration-200"
                    aria-label="Expand"
                >
                    <FaChevronRight className="text-lg" />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />

            <section className="flex-grow overflow-y-auto">
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={User3Img} alt="Josh Simmons" className="w-12 h-12 rounded-full mr-3" />
                            <div>
                                <h3 className="font-semibold text-sm md:text-base">Joshua Simmons</h3>
                                <p className="text-xs md:text-sm text-gray-500">Service Type: Therapy Session</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className='text-xs md:text-sm text-gray-500 font-medium'>11:00 - 12:00</span>
                            <FaClock size={36} className="text-primary ml-2 ring-1 ring-primary rounded-full p-[.4rem] bg-gradient-gray" />
                        </div>
                    </div>
                </div>
                <hr className='border-t border-gray-300 w-full m-0' />

                {/* Appointment Details */}
                <div className="p-4">
                    <div className="flex gap-5">
                        <div className="w-[20%] space-y-4">
                            <InfoItem label="Service Provider" value="John Doe" />
                            <InfoItem label="Service ID" value="#12345" />
                            <InfoItem label="Created at" value="10/14/2024" />
                            <InfoItem label="Updated at" value="10/14/2024" />
                            <InfoItem label="Price" value="$200" />
                        </div>
                        <div className="w-[30%]">
                            <InfoItem label="Description" value="Initial therapy session for stress management and anxiety reduction." />
                            <InfoItem label="Payment status" value="Paid" />
                            <InfoItem label="Status" value="On Time" />
                            <InfoItem label="Address" value="795 Ave No Name, Lehi, UT" />
                        </div>
                        <div className="w-[50%] flex flex-col">
                            <label htmlFor="notes" className="text-secondary text-xs font-medium uppercase mb-2">Appointment Notes</label>
                            <textarea
                                id="notes"
                                className="flex-grow border-2 border-gray-300 rounded-lg p-2 mb-2 text-xs md:text-sm"
                                placeholder="Enter appointment notes here..."
                            />
                            <div className="flex justify-end gap-2 mt-2">
                                <button className="text-sm bg-white text-secondary px-4 py-2 ring-2 ring-secondary rounded-full hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary transition-colors duration-300">
                                    Reschedule
                                </button>
                                <button className="btn-blue ring-2 ring-secondary text-sm px-4 py-2">
                                    Finish Appointment
                                </button>
                            </div>
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
        <p className="text-xs md:text-sm text-gray-600 mb-4">{value}</p>
    </div>
);

export default OngoingAppts;