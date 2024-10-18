import React from 'react';
import { FaExpandAlt, FaChevronRight } from 'react-icons/fa';
import User1Img from '../../assets/images/user1.png';
import User2Img from '../../assets/images/user2.png';
import User4Img from '../../assets/images/user4.png';

const ClientSection = ({ image, name, date, isLast }) => (
    <div className={`${!isLast ? 'border-b border-gray-300' : ''}`}>
        <div className="flex items-center py-4 px-4">
            <div className="w-2/12">
                <img src={image} alt={name} className="w-10 h-10 rounded-full" />
            </div>
            <div className="w-8/12">
                <h3 className="font-semibold text-sm md:text-base">{name}</h3>
                <p className="text-xs text-gray-500">{date}</p>
            </div>
            <div className="w-2/12 flex justify-end items-center">
                <FaChevronRight className="text-gray-400" />
            </div>
        </div>
    </div>
);

const ReviewReport = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Review Report</h2>
                <div className="w-[10%] flex justify-end">
                    <FaChevronRight
                        className="text-gray-400 cursor-pointer hover:text-primary transition-colors duration-200"
                    />
                </div>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                <ClientSection
                    image={User1Img}
                    name="Jane Doe"
                    date="August 26, 2024"
                />
                <ClientSection
                    image={User2Img}
                    name="Precious Smith"
                    date="August 27, 2024"
                />
                <ClientSection
                    image={User4Img}
                    name="Alex Johnson"
                    date="August 28, 2024"
                    isLast={true}
                />
            </section>
        </div>
    );
};

export default ReviewReport;