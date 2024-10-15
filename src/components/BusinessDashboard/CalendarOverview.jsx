import React, { useState } from 'react';
import { FaCalendarPlus } from "react-icons/fa6";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ProgressBar = ({ value, max }) => {
    const percentage = (value / max) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

const InfoContainer = ({ label, value, max }) => (
    <div className="w-1/2 py-2 px-4 ring-1 ring-gray-300 rounded-lg">
        <div className="flex justify-between items-center my-2">
            <span className="text-xs font-normal">{label}</span>
            <span className="text-xs font-normal">{value}/{max}</span>
        </div>
        <ProgressBar value={value} max={max} />
    </div>
);

const CalendarOverview = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Calendar Overview</h2>
                <button
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Add to calendar"
                >
                    <FaCalendarPlus className="text-lg" />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                <div className="p-4">
                    <div className="flex gap-4 mb-1">
                        <InfoContainer label="New Clients" value={3} max={29} />
                        <InfoContainer label="Follow-Up Clients" value={0} max={17} />
                    </div>
                </div>
                <hr className='border-t border-gray-300 w-full m-0' />
                <div className="p-4">
                    <Calendar
                        onChange={onChange}
                        value={date}
                        className="w-full border-none"
                        tileClassName={({ date, view }) =>
                            view === 'month' && date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()
                                ? 'bg-secondary text-white rounded'
                                : ''
                        }
                    />
                </div>
            </section>
        </div>
    );
};

export default CalendarOverview;