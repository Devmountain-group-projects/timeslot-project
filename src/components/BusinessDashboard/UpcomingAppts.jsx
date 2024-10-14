import React from 'react';
import { BsCalendar2WeekFill } from "react-icons/bs";
import { FaChevronRight } from 'react-icons/fa6';
import Graph1 from '../../assets/images/graph1.png'

const UpcomingAppts = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300">
            <section className="h-[35%] flex justify-between items-center p-4 bg-gradient-gray">
                <div className="w-[10%]">
                    <BsCalendar2WeekFill className="text-3xl text-[#35485e]" />
                </div>
                <h2 className="w-[80%] text-base text-center">Upcoming Appointments</h2>
                <div className="w-[10%] flex justify-end">
                    <FaChevronRight className="text-gray-400" />
                </div>
            </section>
            <hr className='border-gray-300 border-2 w-full' />
            <section className="h-[50%] flex justify-between items-center p-4 mt-2">
                <div className="w-[70%]">
                    <p className="text-3xl font-bold">5</p>
                    <p className="text-sm text-gray-500">Appointments</p>
                </div>
                <img src={Graph1} className="w-[30%]" alt="Graph image icon" />
            </section>
        </div>
    );
};

export default UpcomingAppts;