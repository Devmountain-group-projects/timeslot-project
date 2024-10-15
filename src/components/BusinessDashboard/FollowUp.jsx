import React from 'react';
import { FaExpandAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import User1Img from '../../assets/images/user1.png';
import User2Img from '../../assets/images/user2.png';
import User4Img from '../../assets/images/user4.png';

const ClientSection = ({ image, name, date, sessionType, notes, isLast }) => (
    <div className={`${!isLast ? 'border-b border-gray-300' : ''}`}>
        <div className="flex items-center py-4 px-4">
            <div className="w-1/6">
                <img src={image} alt={name} className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
            </div>
            <div className="w-3/6 pr-2">
                <h3 className="font-semibold text-sm md:text-base">{name}</h3>
                <p className="text-xs text-gray-500 mb-1">{date}</p>
                <p className="text-xs md:text-sm font-medium">{sessionType}</p>
                <p className="text-xs text-gray-400">{notes}</p>
            </div>
            <div className="w-2/6 flex justify-end items-center space-x-2">
                <button className="bg-gradient-gray text-primary p-1.5 md:p-2 rounded-full ring-1 ring-primary hover:bg-secondary hover:text-white hover:ring-1 hover:ring-secondary transition-colors duration-300">
                    <FaPhone className="text-base md:text-lg" />
                </button>
                <div className="h-8 border-l border-gray-300"></div>
                <button className="bg-gradient-gray text-primary p-1.5 md:p-2 rounded-full ring-1 ring-primary hover:bg-secondary hover:text-white hover:ring-1 hover:ring-secondary transition-colors duration-300">
                    <FaEnvelope className="text-base md:text-lg" />
                </button>
                <FaChevronRight className="text-gray-400 ml-2" />
            </div>
        </div>
    </div>
);

const FollowUp = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-4 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Follow-Up Clients</h2>
                <button
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Expand"
                >
                    <FaExpandAlt className="text-lg" />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                <ClientSection
                    image={User1Img}
                    name="Jane Doe"
                    date="August 26, 2024"
                    sessionType="Therapy Session"
                    notes="No show for therapy"
                />
                <ClientSection
                    image={User2Img}
                    name="Precious Smith"
                    date="August 27, 2024"
                    sessionType="Therapy Session"
                    notes="Rescheduled appointment"
                />
                <ClientSection
                    image={User4Img}
                    name="Alex Johnson"
                    date="August 28, 2024"
                    sessionType="Therapy Session"
                    notes="Follow-up required"
                    isLast={true}
                />
            </section>
        </div>
    );
};

export default FollowUp;