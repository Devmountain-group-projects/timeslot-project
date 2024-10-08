import React from 'react'
import PlaceholderImg from '../../assets/images/placeholder.png'
import GoogleImg from '../../assets/images/google.png'
import OutlookImg from '../../assets/images/outlook.png'

const Hero = () => {
    return (
        <div>
            <div className="font-sans bg-white py-24 px-6 mt-28 bg-gradient-to-b from-primary to-secondary">
                <div className="max-w-max max-md:max-w-md mx-auto max-md:text-center">
                    <h2 className="text-white lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">Streamline Your Appointments with Ease</h2>
                    <p className="text-white text-2xl mt-6 mb-12">The ultimate solution for scheduling, managing, and growing your service-based business.</p>
                    <div className="grid md:grid-cols-2 gap-12 mt-6">
                        <div>
                            <p className="text-white text-base leading-relaxed">Book, track, and manage appointments in real time. Whether you’re a client or a provider, Timeline Slot simplifies your scheduling process—all in one platform.</p>
                            <div className="mt-12 flex gap-4 items-center flex-wrap max-md:justify-center">
                                <button type='button'
                                    className="bg-white hover:bg-secondary hover:text-white transition-all text-gray-800 font-bold text-md rounded-full px-6 py-3">Get Started</button>
                                <button type='button'
                                    className="bg-white hover:bg-secondary hover:text-white transition-all text-gray-800 font-bold text-md rounded-full px-6 py-3">Book an Appointment</button>
                            </div>

                            <div className="mt-24 grid grid-cols-2 md:grid-cols-2 gap-2 items-center">
                                <img src={GoogleImg} className="w-44 mx-auto" alt="google-logo" />
                                <img src={OutlookImg} className="w-44 mx-auto" alt="facebook-logo" />
                            </div>
                        </div>
                        <div>
                            <img src={PlaceholderImg} className="shrink-0 w-full h-full rounded-md object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero