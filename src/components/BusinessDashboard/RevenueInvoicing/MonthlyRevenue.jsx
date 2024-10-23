// MonthlyRevenue.jsx
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
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

const MonthlyRevenue = () => {
    const chartData = {
        labels: mockData.monthlyRevenue.map(item => item.month),
        datasets: [
            {
                label: 'Revenue',
                data: mockData.monthlyRevenue.map(item => item.revenue),
                backgroundColor: '#007dfe',
                borderWidth: 1,
                barThickness: 20  // Make bars thinner
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                padding: 6,
                displayColors: false,
                callbacks: {
                    label: (context) => `$${context.parsed.y.toLocaleString()}`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `$${value.toLocaleString()}`,
                    font: {
                        size: 10
                    },
                    maxTicksLimit: 5  // Limit the number of y-axis ticks
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    drawBorder: false
                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        },
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 0,
                left: 0
            }
        }
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-2 bg-tertiary">
                <div className="w-[10%]">
                    <FaChartLine className="text-lg md:text-xl text-blue-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Monthly Revenue</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex flex-col p-2">
                <div className="relative w-full h-full min-h-[120px]">
                    <Bar
                        data={chartData}
                        options={options}
                        className="absolute inset-0"
                    />
                </div>
            </section>
        </div>
    );
};

export default MonthlyRevenue;