import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReturningClients = () => {
    const returningClientsPercentage = 65;

    const data = {
        datasets: [{
            data: [returningClientsPercentage, 100 - returningClientsPercentage],
            backgroundColor: ['#4CAF50', '#E0E0E0'],
            borderColor: ['#4CAF50', '#E0E0E0'],
            borderWidth: 1,
        }],
    };

    const options = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Returning Clients</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow p-4 flex flex-col items-center justify-center">
                <div className="w-32 h-32 relative">
                    <Doughnut data={data} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">{returningClientsPercentage}%</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">of clients have returned for additional services</p>
            </section>
        </div>
    );
};

export default ReturningClients;