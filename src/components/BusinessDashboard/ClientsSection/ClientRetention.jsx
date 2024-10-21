import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ClientRetention = () => {
    const retentionRate = 78;

    const data = {
        datasets: [{
            data: [retentionRate, 100 - retentionRate],
            backgroundColor: ['#2196F3', '#E0E0E0'],
            borderColor: ['#2196F3', '#E0E0E0'],
            borderWidth: 1,
        }],
    };

    const options = {
        cutout: '75%',
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
            <h2 className="text-xs md:text-sm font-medium p-3 bg-tertiary border-b-2 border-gray-300">Client Retention Rate</h2>
            <div className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 md:w-30 md:h-30 relative">
                    <Doughnut data={data} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-bold">{retentionRate}%</span>
                    </div>
                </div>
                <p className="mt-2 md:mt-4 text-xs md:text-sm text-gray-600 text-center">of clients return within a set time frame</p>
            </div>
        </div>
    );
};

export default ClientRetention;