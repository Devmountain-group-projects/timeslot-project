import React from 'react'
import { FaStar } from 'react-icons/fa'
import User8 from '/src/assets/images/user8.png';


const TopClients = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaStar className="text-xl md:text-2xl text-[#cd942d]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Top Client</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex items-center justify-center p-4">
                <div className="flex items-center">
                    <img src={User8} alt="Jane Smith" className="w-12 h-12 rounded-full mr-3" />
                    <div className="text-left">
                        <p className="text-sm font-medium">Jane Smith</p>
                        <p className="text-xs text-gray-500 mt-1">10 Appointments</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopClients