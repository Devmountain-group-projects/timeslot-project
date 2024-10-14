import React from 'react';
import { FaCalendarPlus } from "react-icons/fa6";

const CalendarOverview = () => {
    // Mock data for the calendar
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
    const today = currentDate.getDate();

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-lg border-2 border-gray-300">
            <section className="h-[12%] flex justify-between items-center p-4 bg-gradient-gray">
                <h2 className="w-[90%] text-base text-left">Calendar Overview</h2>
                <div className="w-[10%] flex justify-end">
                    <button
                        className="p-2 bg-gradient-gray ring-2 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                        aria-label="Add to calendar"
                    >
                        <FaCalendarPlus className="text-xl" />
                    </button>
                </div>
            </section>
            <hr className='border-gray-300 border-2 w-full' />
            <section className="h-[88%] p-4 overflow-y-auto">
                <h3 className="text-lg text-secondary font-semibold mb-2 uppercase">{currentMonth} {currentYear}</h3>
                <hr className='border-gray-200 border-2 w-full my-4' />
                <div className="grid grid-cols-7 gap-1">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center font-bold">{day}</div>
                    ))}
                    {[...Array(daysInMonth)].map((_, index) => {
                        const day = index + 1;
                        const isToday = day === today;
                        return (
                            <div
                                key={index}
                                className={`text-center p-2 border border-gray-200 hover:bg-primary hover:text-white transition duration-300 rounded ${isToday ? 'bg-secondary text-white' : ''
                                    }`}
                            >
                                {day}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default CalendarOverview;