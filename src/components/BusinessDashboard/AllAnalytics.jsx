import React from 'react'
import NoDataImg from '../../assets/images/nodataimg.jpg'

const AllAnalytics = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-xl shadow-sm">
            <img
                src={NoDataImg}
                alt="No Data Available"
                className="max-w-md w-full h-auto"
            />
            <p className="mt-4 text-lg text-gray-600">Payments & Invoicing data coming soon</p>
        </div>
    )
}

export default AllAnalytics