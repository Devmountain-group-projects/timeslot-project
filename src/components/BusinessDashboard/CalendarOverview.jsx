import React from 'react';
import { FaChevronRight } from "react-icons/fa6";
import SharedScheduler from './SharedScheduler';
// // Will look into later, focusing on calendar first
// const ProgressBar = ({ value, max }) => {
//     const percentage = (value / max) * 100;
//     return (
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//             <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
//         </div>
//     );
// };

// const InfoContainer = ({ label, value, max }) => (
//     <div className="w-1/2 py-2 px-4 ring-1 ring-gray-300 rounded-lg">
//         <div className="flex justify-between items-center my-2">
//             <span className="text-xs font-normal">{label}</span>
//             <span className="text-xs font-normal">{value}/{max}</span>
//         </div>
//         <ProgressBar value={value} max={max} />
//     </div>
// );

const CalendarOverview = ({ onViewCalendar }) => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Calendar Overview</h2>
                <button
                    className="text-gray-400 cursor-pointer hover:text-primary transition-colors duration-200"
                    aria-label="Expand"
                    onClick={onViewCalendar}
                >
                    <FaChevronRight className="text-lg" onClick={onViewCalendar} />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                {/*<div className="p-4">*/}
                {/*    <div className="flex gap-4 mb-1">*/}
                {/*        <InfoContainer label="New Clients" value={3} max={29} />*/}
                {/*        <InfoContainer label="Follow-Up Clients" value={0} max={17} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <hr className='border-t border-gray-300 w-full m-0' />
                <div className="p-4">
                    <SharedScheduler isOverview={true} />
                </div>
            </section>
        </div>
    );
};

export default CalendarOverview;