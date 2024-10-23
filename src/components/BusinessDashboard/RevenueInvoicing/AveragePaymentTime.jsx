// AveragePaymentTime.jsx
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { TrendingDown } from 'lucide-react';
import { mockData } from './mockData';

const AveragePaymentTime = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-2 bg-tertiary">
                <div className="w-[10%]">
                    <FaClock className="text-xl md:text-xl text-purple-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Average Payment Time</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex flex-col justify-center items-center p-4">
                <p className="text-2xl font-bold">{mockData.averagePayment.days} Days</p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span>Payment Time</span>
                    <div className="flex items-center ml-2 text-green-500">
                        <TrendingDown size={16} />
                        <span className="ml-1">{mockData.averagePayment.percentageChange}%</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AveragePaymentTime;