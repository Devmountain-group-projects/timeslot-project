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
        <div className="w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <h2 className="text-xs md:text-sm font-medium p-3 bg-tertiary border-b-2 border-gray-30">Returning Clients</h2>
            <div className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 md:w-32 md:h-32 relative">
                    <Doughnut data={data} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-bold">{returningClientsPercentage}%</span>
                    </div>
                </div>
                <p className="mt-2 md:mt-4 text-xs md:text-sm text-gray-600 text-center">of clients have returned for additional services</p>
            </div>
        </div>
    );
};

export default ReturningClients;