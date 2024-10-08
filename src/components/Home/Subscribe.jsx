import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <div className="font-[sans-serif] px-6 py-16 bg-gradient-gray">
                <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
                    <h2 className="title-text">Stay Updated with Timeline Slot<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                    <div className="mt-8">
                        <p className="text-base text-gray-500 leading-relaxed">Join our community to receive the latest news, tips, and exclusive offers straight to your inbox. Whether you’re a service provider looking to streamline your bookings or a client seeking seamless appointment management, we’ve got you covered!</p>
                    </div>

                    <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
                        <input type='email' placeholder='Enter your email' className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
                        <button type='button'
                            className="btn-blue transition-all text-white text-sm rounded-full px-4 py-2.5">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe