import React from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa6';
import Graph2 from '../../assets/images/graph2.png'

const RevenueOverview = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaMoneyBillTrendUp className="text-xl md:text-2xl text-[#e03800]" />
                </div>
                <h2 className="w-[80%] text-xs md:text-sm text-center font-medium">Revenue Overview</h2>
                <div className="w-[10%] flex justify-end">
                    <FaChevronRight className="text-gray-400" />
                </div>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex items-center justify-between p-4">
                <div className="w-[70%]">
                    <p className="text-xl md:text-2xl font-medium">$3,000</p>
                    <p className="text-xs md:text-sm text-gray-500">Collected</p>
                </div>
                <img src={Graph2} className="w-[20%] md:w-[30%]" alt="Graph image icon" />
            </section>
        </div>
    );
};

export default RevenueOverview;