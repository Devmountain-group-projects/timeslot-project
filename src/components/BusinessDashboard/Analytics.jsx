import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaChevronRight } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip);

const Analytics = ({ onViewAllAnalytics }) => {
    // Mock data for four different doughnut charts
    const appointmentTypesData = {
        labels: ['Haircut', 'Color', 'Style', 'Treat', 'Other'],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        }],
    };

    const revenueData = {
        labels: ['Services', 'Products', 'Gift Cards', 'Other'],
        datasets: [{
            data: [60, 25, 10, 5],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        }],
    };

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

    const clientRetentionData = {
        labels: ['Retained', 'New', 'Lost'],
        datasets: [{
            data: [70, 20, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        }],
    };

    const chartOptions = {
        cutout: '70%',
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

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Analytics <span className="text-gray-400 text-[.70rem]">(Hover to Show)</span></h2>
                <div className="w-[10%] flex justify-end">
                    <FaChevronRight
                        className="text-gray-400 cursor-pointer hover:text-primary transition-colors duration-200"
                        onClick={onViewAllAnalytics}
                    />
                </div>
            </section>
            <hr className='border-t border-gray-300 w-full' />
            <section className="flex-grow overflow-y-auto p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                        <h3 className="text-xs font-medium mb-2 text-center">Appointment Types</h3>
                        <div className="w-32 h-32 relative">
                            <Doughnut data={appointmentTypesData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xs font-medium mb-2 text-center">Revenue Sources</h3>
                        <div className="w-32 h-32 relative">
                            <Doughnut data={revenueData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xs font-medium mb-2 text-center">Customer Satisfaction</h3>
                        <div className="w-32 h-32 relative">
                            <Doughnut data={customerSatisfactionData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xs font-medium mb-2 text-center">Client Retention</h3>
                        <div className="w-32 h-32 relative">
                            <Doughnut data={clientRetentionData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Analytics;