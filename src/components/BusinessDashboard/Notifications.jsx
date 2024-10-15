import React from 'react';
import { RiNotificationBadgeFill } from "react-icons/ri";
import { FaChevronRight } from 'react-icons/fa6';
import Graph4 from '../../assets/images/graph4.png'

const Notifications = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-4 bg-tertiary">
                <div className="w-[10%]">
                    <RiNotificationBadgeFill className="text-xl md:text-2xl text-[#3cbd5b]" />
                </div>
                <h2 className="w-[80%] text-xs md:text-sm text-center font-medium">Notifications</h2>
                <div className="w-[10%] flex justify-end">
                    <FaChevronRight className="text-gray-400" />
                </div>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex items-center justify-between p-4">
                <div className="w-[70%]">
                    <p className="text-xl md:text-2xl font-medium">0</p>
                    <p className="text-xs md:text-sm text-gray-500">New notifications</p>
                </div>
                <img src={Graph4} className="w-[20%] md:w-[30%]" alt="Graph image icon" />
            </section>
        </div>
    );
};

export default Notifications;