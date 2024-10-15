import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaExpandAlt } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
    const [busiestDaysState, setBusiestDaysState] = useState({ clicked: false, label: '' });
    const [appointmentTypesState, setAppointmentTypesState] = useState({ clicked: false, label: '' });

    const busiestDaysData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                data: [20, 24, 20, 14, 12, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                ],
            },
        ],
    };

    const busiestDaysDrilldownData = {
        labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
        datasets: [
            {
                data: [5, 8, 10, 7, 6, 9, 11, 8, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(201, 203, 207, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                ],
            },
        ],
    };

    const appointmentTypesData = {
        labels: ['Haircut', 'Color', 'Style', 'Treat', 'Other'],
        datasets: [
            {
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                ],
            },
        ],
    };

    const appointmentTypesDrilldownData = {
        labels: ['New Clients', 'Returning Clients', 'VIP Clients'],
        datasets: [
            {
                data: [15, 25, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
            },
        ],
    };

    const chartOptions = (onClick) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        onClick: onClick
    });

    const handleBusiestDaysClick = (event, elements) => {
        if (elements.length > 0) {
            const { index } = elements[0];
            setBusiestDaysState({ clicked: true, label: busiestDaysData.labels[index] });
        }
    };

    const handleAppointmentTypesClick = (event, elements) => {
        if (elements.length > 0) {
            const { index } = elements[0];
            setAppointmentTypesState({ clicked: true, label: appointmentTypesData.labels[index] });
        }
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-4 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Analytics</h2>
                <button
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Expand"
                >
                    <FaExpandAlt className="text-lg" />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                <div className="flex flex-col md:flex-row p-4">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-4 md:mb-0">
                        <h3 className="text-base font-medium mb-1">
                            {busiestDaysState.clicked ? `Hourly Breakdown - ${busiestDaysState.label}` : 'Busiest Days'}
                        </h3>
                        <div className="w-full aspect-square max-w-[300px]">
                            <Doughnut
                                data={busiestDaysState.clicked ? busiestDaysDrilldownData : busiestDaysData}
                                options={chartOptions(busiestDaysState.clicked ? null : handleBusiestDaysClick)}
                            />
                        </div>
                        {busiestDaysState.clicked && (
                            <button
                                className="mt-4 p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                                onClick={() => setBusiestDaysState({ clicked: false, label: '' })}
                            >
                                Back to Overview
                            </button>
                        )}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                        <h3 className="text-base font-medium mb-1">
                            {appointmentTypesState.clicked ? `${appointmentTypesState.label} Breakdown` : 'Appointment Types'}
                        </h3>
                        <div className="w-full aspect-square max-w-[300px]">
                            <Doughnut
                                data={appointmentTypesState.clicked ? appointmentTypesDrilldownData : appointmentTypesData}
                                options={chartOptions(appointmentTypesState.clicked ? null : handleAppointmentTypesClick)}
                            />
                        </div>
                        {appointmentTypesState.clicked && (
                            <button
                                className="mt-4 p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                                onClick={() => setAppointmentTypesState({ clicked: false, label: '' })}
                            >
                                Back to Overview
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Analytics;