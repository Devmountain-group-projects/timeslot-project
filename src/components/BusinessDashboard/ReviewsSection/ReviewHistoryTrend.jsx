import React from 'react'
import { FaChartArea } from 'react-icons/fa'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const ReviewHistoryTrend = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Reviews',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#3cbd5b',
                tension: 0.1,
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(60, 189, 91, 0.5)');
                    gradient.addColorStop(1, 'rgba(60, 189, 91, 0.05)');
                    return gradient;
                }
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaChartArea className="text-xl md:text-2xl text-[#3cbd5b]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Review History Trend</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex flex-col justify-center p-4">
                <div className="h-[70%]">
                    <Line data={data} options={options} />
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Track review volume over time to identify trends and correlate with business activities.
                </p>
            </section>
        </div>
    )
}

export default ReviewHistoryTrend