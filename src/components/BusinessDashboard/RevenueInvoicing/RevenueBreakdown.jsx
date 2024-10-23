// RevenueBreakdown.jsx
import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { mockData } from './mockData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const RevenueBreakdown = () => {
    const chartData = {
        labels: mockData.serviceRevenue.map(item => item.service),
        datasets: [{
            label: 'Revenue',
            data: mockData.serviceRevenue.map(item => item.amount),
            backgroundColor: '#3cbd5b',
            barThickness: 20
        }]
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context) => `$${context.parsed.x.toLocaleString()}`
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    callback: (value) => `$${value.toLocaleString()}`,
                    font: {
                        size: 10
                    }
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 11
                    }
                }
            }
        }
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-2 bg-tertiary">
                <div className="w-[10%]">
                    <FaChartBar className="text-xl md:text-2xl text-green-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Revenue by Service</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex items-center p-4">
                <div className="relative w-full h-[150px]">
                    <Bar data={chartData} options={options} />
                </div>
            </section>
        </div>
    );
};

export default RevenueBreakdown;