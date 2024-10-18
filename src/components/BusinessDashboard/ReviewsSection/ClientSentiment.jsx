import React from 'react'
import { FaSmile } from 'react-icons/fa'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const ClientSentiment = () => {
    const data = {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
            {
                data: [65, 25, 10],
                backgroundColor: ['#4CAF50', '#FFA000', '#F44336'],
                borderColor: ['#43A047', '#FF8F00', '#E53935'],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    }

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaSmile className="text-xl md:text-2xl text-[#4CAF50]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Client Sentiment Analysis</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex flex-col p-4">
                <div className="flex-grow">
                    <Pie data={data} options={options} />
                </div>
                <hr className='border-t border-gray-300 w-full my-2' />
                <p className="text-xs text-gray-500 text-center">
                    This chart shows the proportion of positive, neutral, and negative reviews.
                    It provides a quick view of overall client satisfaction, helping businesses identify areas for improvement or maintain high standards.
                </p>
            </section>
        </div>
    )
}

export default ClientSentiment