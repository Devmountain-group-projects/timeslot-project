// TotalRevenue.jsx
import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { TrendingUp } from 'lucide-react';
import { mockData } from './mockData';

const TotalRevenue = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaDollarSign className="text-xl md:text-2xl text-green-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Total Revenue</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex flex-col justify-center items-center p-4">
                <p className="text-2xl font-bold">${mockData.totalRevenue.amount.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span>{mockData.totalRevenue.period}</span>
                    <div className="flex items-center ml-2 text-green-500">
                        <TrendingUp size={16} />
                        <span className="ml-1">+{mockData.totalRevenue.percentageChange}%</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TotalRevenue;