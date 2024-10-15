import React from 'react'
import SharedScheduler from './SharedScheduler'

const Schedule = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-lg md:text-xl font-medium">Full Calendar</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto p-4">
                <SharedScheduler />
            </section>
        </div>
    )
}

export default Schedule