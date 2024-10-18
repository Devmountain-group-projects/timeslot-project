import React from 'react'
import { FaChartLine } from 'react-icons/fa'

const Overview = () => {
    const stats = [
        { title: "Total Reviews", value: "1,234" },
        {
            title: "Average Rating",
            value: (
                <div className="flex items-center">
                    <span className="mr-1">4.5</span>
                </div>
            )
        },
        { title: "Recent Reviews", value: "78", subtitle: "Last 30 days" }
    ]

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaChartLine className="text-xl md:text-2xl text-primary" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Overview</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex flex-col justify-center">
                {stats.map((stat, index) => (
                    <React.Fragment key={stat.title}>
                        <StatItem
                            title={stat.title}
                            value={stat.value}
                            subtitle={stat.subtitle}
                        />
                        {index < stats.length - 1 && <hr className='border-t border-gray-300 w-full m-0' />}
                    </React.Fragment>
                ))}
            </section>
        </div>
    )
}

const StatItem = ({ title, value, subtitle }) => (
    <div className="flex items-center justify-between p-4">
        <div className="text-left">
            <p className="text-sm text-gray-500">{title}</p>
            {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
        <div className="text-right">
            <p className="text-3xl font-bold text-secondary">{value}</p>
        </div>
    </div>
)

export default Overview