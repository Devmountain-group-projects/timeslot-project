import React from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa6';
import Graph1 from '../../assets/images/graph2.png'

const RevenueOverview = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300">
            <section className="h-[35%] flex justify-between items-center p-4 bg-tertiary">
                <div className="w-[10%]">
                    <FaMoneyBillTrendUp className="text-3xl text-[#e03800]" />
                </div>
                <h2 className="w-[80%] text-base text-center font-medium">Revenue Overview</h2>
                <div className="w-[10%] flex justify-end">
                    <FaChevronRight className="text-gray-400" />
                </div>
            </section>
            <hr className='border-gray-300 border-2 w-full' />
            <section className="h-[65%] flex justify-between items-center p-4">
                <div className="w-[70%]">
                    <p className="text-3xl font-bold">$3,000</p>
                    <p className="text-sm text-gray-500">Collected</p>
                </div>
                <img src={Graph1} className="w-[30%]" alt="Graph image icon" />
            </section>
        </div>
    );
};

export default RevenueOverview;