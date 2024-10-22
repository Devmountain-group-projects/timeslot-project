import React from 'react';
import { motion } from 'framer-motion';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

// TODO: Replace this with actual data fetching from the database
const fetchAnalyticsData = () => {
    // Simulated data - replace with actual API call
    return {
        appointmentTrends: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            data: [12, 19, 3, 5, 2, 3, 8, 14, 11, 7],
        },
        revenue: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            data: [1200, 1900, 300, 500, 200, 300, 800, 1400, 1100, 700],
        },
        servicePopularity: {
            labels: ['Haircuts', 'Massages', 'Consultations'],
            data: [300, 50, 100],
        },
        clientRetention: {
            labels: ['Returning Clients', 'New Clients'],
            data: [65, 35],
        },
        noShowsCancellations: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            data: [5, 8, 2, 3, 1, 2, 4, 6, 5, 3],
        },
        avgAppointmentDuration: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            data: [45, 50, 48, 52, 47, 49, 51, 53, 50, 48],
        },
    };
};

const AllAnalytics = () => {
    // TODO: Use React Query or similar for data fetching and caching
    const analyticsData = fetchAnalyticsData();

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

    // Chart data
    const lineChartData = {
        labels: analyticsData.appointmentTrends.labels,
        datasets: [
            {
                label: 'Appointments',
                data: analyticsData.appointmentTrends.data,
                borderColor: '#2264ba',
                tension: 0.1,
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(34, 100, 186, 0.5)');
                    gradient.addColorStop(1, 'rgba(34, 100, 186, 0.05)');
                    return gradient;
                }
            }
        ]
    };

    const barChartData = {
        labels: analyticsData.revenue.labels,
        datasets: [
            {
                label: 'Revenue',
                data: analyticsData.revenue.data,
                backgroundColor: '#007dfe'
            }
        ]
    };

    const pieChartData = {
        labels: analyticsData.servicePopularity.labels,
        datasets: [
            {
                data: analyticsData.servicePopularity.data,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
            }
        ]
    };

    const doughnutChartData = {
        labels: analyticsData.clientRetention.labels,
        datasets: [
            {
                data: analyticsData.clientRetention.data,
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']
            }
        ]
    };

    const noShowsCancellationsData = {
        labels: analyticsData.noShowsCancellations.labels,
        datasets: [
            {
                label: 'No-Shows and Cancellations',
                data: analyticsData.noShowsCancellations.data,
                backgroundColor: '#ffa500'
            }
        ]
    };

    const avgAppointmentDurationData = {
        labels: analyticsData.avgAppointmentDuration.labels,
        datasets: [
            {
                label: 'Average Appointment Duration (minutes)',
                data: analyticsData.avgAppointmentDuration.data,
                borderColor: '#4caf50',
                tension: 0.1,
            }
        ]
    };

    // Chart options
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

    const largeChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    minRotation: 0
                }
            }
        }
    };

    return (
        <motion.div
            className="h-full flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Row 1 - Taller top cards */}
            <motion.div className="flex flex-col sm:flex-row gap-4 h-[45%] sm:h-[30%]" variants={rowVariants}>
                <Card className="w-full sm:w-1/2 h-1/2 sm:h-full" title="Service Popularity & Client Retention">
                    <div className="flex h-full flex-row sm:flex-row">
                        <div className="w-1/2 h-full">
                            <Pie data={pieChartData} options={smallChartOptions} />
                        </div>
                        <div className="w-1/2 h-full">
                            <Doughnut data={doughnutChartData} options={smallChartOptions} />
                        </div>
                    </div>
                </Card>
                <Card className="w-full sm:w-1/2 h-1/2 sm:h-full" title="Client Growth">
                    <Bar data={barChartData} options={smallChartOptions} />
                </Card>
            </motion.div>

            {/* Row 2 - Middle cards */}
            <motion.div className="flex flex-col sm:flex-row gap-4 h-[50%] sm:h-[35%]" variants={rowVariants}>
                <Card className="w-full sm:w-1/2 h-[300px] sm:h-full" title="Appointment Trends">
                    <Line data={lineChartData} options={largeChartOptions} />
                </Card>
                <Card className="w-full sm:w-1/2 h-[300px] sm:h-full" title="Revenue Breakdown">
                    <Bar data={barChartData} options={largeChartOptions} />
                </Card>
            </motion.div>

            {/* Row 3 */}
            <motion.div className="flex flex-col sm:flex-row gap-4 h-[50%] sm:h-[35%]" variants={rowVariants}>
                <Card className="w-full sm:w-1/2 h-[300px] sm:h-full" title="No-Shows and Cancellations">
                    <Bar data={noShowsCancellationsData} options={largeChartOptions} />
                </Card>
                <Card className="w-full sm:w-1/2 h-[300px] sm:h-full" title="Average Appointment Duration">
                    <Line data={avgAppointmentDurationData} options={largeChartOptions} />
                </Card>
            </motion.div>
        </motion.div>
    );
};

const Card = ({ children, title, className = '' }) => (
    <div className={`bg-white rounded-xl border-2 border-gray-300 flex flex-col shadow-sm overflow-hidden ${className}`}>
        <div className="px-4 py-3 bg-tertiary border-b border-gray-200">
            <h3 className="text-base font-medium text-gray-800">{title}</h3>
        </div>
        <div className="p-4 flex-grow overflow-hidden">
            {children}
        </div>
    </div>
);

export default AllAnalytics;