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
    <div className="w-1/2 py-2 px-4 border-2 border-gray-300 rounded-lg">
        <div className="flex justify-between items-center my-2">
            <span className="text-sm font-normal">{label}</span>
            <span className="text-sm font-normal">{value}/{max}</span>
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
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300">
            <section className="h-[12%] flex justify-between items-center p-4 bg-tertiary">
                <h2 className="w-[90%] text-base text-lefty font-medium">Calendar Overview</h2>
                <div className="w-[10%] flex justify-end">
                    <button
                        className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                        aria-label="Add to calendar"
                    >
                        <FaCalendarPlus className="text-xl" />
                    </button>
                </div>
            </section>
            <hr className='border-gray-300 border-2 w-full' />
            <section className="h-[88%] p-4 overflow-y-auto">
                <div className="flex gap-4 mb-3">
                    <InfoContainer label="New Clients" value={3} max={29} />
                    <InfoContainer label="Follow-Up Clients" value={0} max={17} />
                </div>
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
            </section>
        </div>
    );
};

export default CalendarOverview;