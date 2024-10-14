import React from 'react';
import { FaExpandAlt, FaClock } from 'react-icons/fa';
import User3Img from '../../assets/images/user3.png';

const OngoingAppts = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300">
            <section className="h-[12%] flex justify-between items-center p-4 bg-gradient-gray">
                <h2 className="w-[90%] text-base text-left">On Going Appointments</h2>
                <div className="w-[10%] flex justify-end">
                    <button
                        className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                        aria-label="Expand"
                    >
                        <FaExpandAlt className="text-xl" />
                    </button>
                </div>
            </section>
            <hr className='border-gray-300 border-2 w-full' />
            <section className="flex-grow p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <img src={User3Img} alt="Josh Simmons" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <h3 className="font-semibold">Joshua Simmons</h3>
                            <p className="text-sm text-gray-500">New Client - Therapy Session</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className='text-base text-gray-500 font-medium'>11:00 - 12:00</span>
                        <FaClock size={36} className="text-primary ml-2 border-2 border-primary rounded-full p-[.4rem] bg-gradient-gray" />
                    </div>
                </div>
                <hr className='border-gray-300 border-1 w-full my-4' />


                {/* Appointment Details */}
                <div className="flex gap-4">
                    <div className="w-[25%] space-y-4">
                        <InfoItem label="Username" value="John Doe" />
                        <InfoItem label="Service ID" value="#12345" />
                        <InfoItem label="Created at" value="10/14/2024" />
                        <InfoItem label="Updated at" value="10/14/2024" />
                        <InfoItem label="Price" value="$200" />
                    </div>
                    <div className="w-[25%]">
                        <InfoItem label="Description" value="Initial therapy session for stress management and anxiety reduction." />
                        <InfoItem label="Payment status" value="Paid" />
                        <InfoItem label="Status" value="On Time" />
                        <InfoItem label="Address" value="795 Ave No Name, Lehi, UT" />
                    </div>
                    <div className="w-[50%] flex flex-col">
                        <label htmlFor="notes" className="text-sm font-medium text-secondary mb-2">Appointment Notes</label>
                        <textarea
                            id="notes"
                            className="flex-grow border-2 border-gray-300 rounded-lg p-2 mb-2"
                            placeholder="Enter appointment notes here..."
                        />
                        <div className="flex justify-end gap-2">
                            <button className="text-sm bg-white text-secondary px-4 py-2 ring-2 ring-secondary rounded-full hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary transition-colors duration-300">
                                Reschedule
                            </button>
                            <button className="btn-blue text-sm px-4 py-2">
                                Finish Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="mb-2">
        <p className="text-secondary text-sm font-medium">{label}</p>
        <p className="text-sm text-gray-600">{value}</p>
    </div>
);

export default OngoingAppts;