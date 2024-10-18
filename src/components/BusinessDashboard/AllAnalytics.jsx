import React from 'react';
import { motion } from 'framer-motion';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const AllAnalytics = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    // Dummy data for charts (unchanged)
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Appointments',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#2264ba',
                tension: 0.1
            }
        ]
    };

    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: '#007dfe'
            }
        ]
    };

    const pieChartData = {
        labels: ['Haircuts', 'Massages', 'Consultations'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
            }
        ]
    };

    const doughnutChartData = {
        labels: ['Returning Clients', 'New Clients'],
        datasets: [
            {
                data: [65, 35],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']
            }
        ]
    };

    // Chart options for smaller graphs
    const smallChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    font: {
                        size: 10
                    }
                }
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <motion.div
            className="h-full flex flex-col gap-2 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-bold text-gray-800">Analytics Dashboard</h1>
                <div className="flex gap-4">
                    <select className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="last7days">Last 7 days</option>
                        <option value="last30days">Last 30 days</option>
                        <option value="last3months">Last 3 months</option>
                        <option value="lastyear">Last year</option>
                    </select>
                    <button className="btn-blue-dashboard">
                        Download Report
                    </button>
                </div>
            </div>

            <div className="flex-grow flex flex-col gap-2 overflow-hidden">
                {/* Row 1 - Taller top cards */}
                <motion.div className="h-[25%] flex gap-2 md:gap-4" variants={rowVariants}>
                    <Card className="w-1/2" title="Service Popularity & Client Retention">
                        <div className="flex h-full">
                            <div className="w-1/2 h-full">
                                <Pie data={pieChartData} options={smallChartOptions} />
                            </div>
                            <div className="w-1/2 h-full">
                                <Doughnut data={doughnutChartData} options={smallChartOptions} />
                            </div>
                        </div>
                    </Card>
                    <Card className="w-1/2" title="Client Growth">
                        <Bar data={barChartData} options={smallChartOptions} />
                    </Card>
                </motion.div>

                {/* Row 2 - Shorter middle cards */}
                <motion.div className="h-[40%] flex gap-2 md:gap-4" variants={rowVariants}>
                    <Card className="w-1/2" title="Appointment Trends">
                        <Line data={lineChartData} />
                    </Card>
                    <Card className="w-1/2" title="Revenue Breakdown">
                        <Bar data={barChartData} />
                    </Card>
                </motion.div>

                {/* Row 3 */}
                <motion.div className="h-[35%] flex gap-2 md:gap-4 overflow-hidden" variants={rowVariants}>
                    <Card className="w-1/2" title="No-Shows and Cancellations">
                        <Bar data={barChartData} />
                    </Card>
                    <Card className="w-1/2" title="Average Appointment Duration">
                        <Line data={lineChartData} />
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Card = ({ children, title, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden ${className}`}>
        <div className="w-full h-full flex flex-col">
            <div className="px-4 py-3 bg-tertiary border-b border-gray-200">
                <h3 className="text-base font-medium text-gray-800">{title}</h3>
            </div>
            <div className="p-4 flex-grow overflow-hidden">
                {children}
            </div>
        </div>
    </div>
);

export default AllAnalytics;