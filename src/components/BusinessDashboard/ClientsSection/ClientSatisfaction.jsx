import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const ClientSatisfaction = () => {
    const customerSatisfactionData = {
        labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
        datasets: [{
            data: [38, 40, 15, 5, 2],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
            ],
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
                enabled: true,
            },
        },
    };

    const averageSatisfaction = (
        (5 * 38 + 4 * 40 + 3 * 15 + 2 * 5 + 1 * 2) /
        (38 + 40 + 15 + 5 + 2)
    ).toFixed(1);

    return (
        <div className="w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <h2 className="text-xs md:text-sm font-medium p-3 bg-tertiary border-b-2 border-gray-30">Client Satisfaction</h2>
            <div className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 md:w-30 md:h-30 relative">
                    <Doughnut data={customerSatisfactionData} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-bold">{averageSatisfaction}</span>
                    </div>
                </div>
                <p className="mt-2 md:mt-4 text-xs md:text-sm text-gray-600 text-center">Average client satisfaction rating</p>
            </div>
        </div>
    );
};

export default ClientSatisfaction;