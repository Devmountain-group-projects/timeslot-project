import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

const NewClients = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaUserPlus className="text-xl md:text-2xl text-[#e03800]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">New Clients</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <p className="text-3xl font-bold text-[#e03800]">15</p>
                    <p className="text-xs text-gray-500 mt-1">New clients (October)</p>
                </div>
            </section>
        </div>
    )
}

export default NewClients