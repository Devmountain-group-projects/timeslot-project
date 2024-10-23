// TaxSummary.jsx
import React from 'react';
import { FaReceipt } from 'react-icons/fa';
import { TrendingUp } from 'lucide-react';
import { mockData } from './mockData';

const TaxSummary = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-2 bg-tertiary">
                <div className="w-[10%]">
                    <FaReceipt className="text-xl md:text-2xl text-purple-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Tax Summary</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex flex-col">
                <div className="flex items-center justify-between p-3">
                    <span className="text-sm text-gray-500">Current Month</span>
                    <span className="text-sm font-medium">${mockData.taxSummary.currentMonth}</span>
                </div>
                <hr className="border-t border-gray-300 w-full m-0" />
                <div className="flex items-center justify-between p-3">
                    <span className="text-sm text-gray-500">Previous Month</span>
                    <span className="text-sm font-medium">${mockData.taxSummary.previousMonth}</span>
                </div>
                <hr className="border-t border-gray-300 w-full m-0" />
                <div className="flex items-center justify-between p-3">
                    <span className="text-sm text-gray-500">Year to Date</span>
                    <span className="text-sm font-medium">${mockData.taxSummary.yearToDate}</span>
                </div>
                <hr className="border-t border-gray-300 w-full m-0" />
                <div className="flex items-center justify-between p-3 bg-gray-50">
                    <span className="text-sm text-gray-500">Monthly Change</span>
                    <div className="flex items-center text-green-500">
                        <TrendingUp size={14} className="mr-1" />
                        <span className="text-sm font-medium">+{mockData.taxSummary.percentageChange}%</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaxSummary;