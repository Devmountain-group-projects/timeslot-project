// PaymentMethods.jsx
import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { mockData } from './mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentMethods = () => {
    const chartData = {
        labels: mockData.paymentMethods.map(item => item.method),
        datasets: [{
            data: mockData.paymentMethods.map(item => item.percentage),
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    font: {
                        size: 11
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.parsed}%`
                }
            }
        }
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-2 bg-tertiary">
                <div className="w-[10%]">
                    <FaWallet className="text-xl md:text-2xl text-blue-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Payment Methods</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex items-center justify-center p-4">
                <div className="w-full h-[150px]">
                    <Pie data={chartData} options={options} />
                </div>
            </section>
        </div>
    );
};

export default PaymentMethods;