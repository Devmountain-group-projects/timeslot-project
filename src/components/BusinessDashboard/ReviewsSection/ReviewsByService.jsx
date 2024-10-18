import React from 'react'
import { FaChartBar } from 'react-icons/fa'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ReviewsByService = () => {
    const data = {
        labels: ['Haircut', 'Coloring', 'Styling', 'Treatments', 'Manicure'],
        datasets: [
            {
                label: 'Average Rating',
                data: [4.5, 4.2, 4.8, 4.3, 4.6],
                backgroundColor: '#e03800',
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                ticks: {
                    stepSize: 1,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaChartBar className="text-xl md:text-2xl text-[#e03800]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Reviews by Service</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex flex-col p-4">
                <div className="flex-grow">
                    <Bar data={data} options={options} />
                </div>
                <hr className='border-t border-gray-300 w-full my-2' />
                <p className="text-xs text-gray-500 text-center">
                    This chart shows the average rating for each service.
                    It helps identify which services are performing well and which may need improvement based on client feedback.
                </p>
            </section>
        </div>
    )
}

export default ReviewsByService