import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { BiSolidPencil } from "react-icons/bi";
import User6 from '../../../assets/images/user6.png'
import CoverImg from '../../../assets/images/coverimg.jpeg'

const BasicInfo = () => {
    const basicInfoData = {
        name: 'John Doe',
        profileImg: User6,
        coverImg: CoverImg,
        city: 'Lehi',
        state: 'UT',
        created_At: 'October 17, 2022',
        profileCompletion: 75,
    }

    const handleUpdate = (field) => {
        console.log(`${field} has been updated`);
    }

    return (
        <div className="w-full space-y-4">
            {/* Card 1 */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    {/* Row 1.1 */}
                    <div className="relative h-40 mb-16">
                        {/* Cover image placeholder */}
                        <img src={CoverImg} alt="CoverImg" className="w-full h-[125%] object-cover rounded-t-lg" />
                        {/* Profile image placeholder */}
                        <div className="absolute -bottom-[60%] left-1/2 transform -translate-x-[50%] w-32 h-32">
                            <div className="relative w-full h-full">
                                <img src={User6} alt="User6" className="w-full h-full rounded-full bg-gray-300 border-4 border-white" />
                                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
                                    <BiSolidPencil className="text-white" size={16} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 1.2 */}
                    <div className="text-center my-4 pt-12">
                        <h2 className="text-xl font-bold">{basicInfoData.name}</h2>
                        <div className="flex justify-center items-center space-x-6 text-gray-600 mt-2">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-1" size={16} />
                                <span className='text-sm'>{basicInfoData.city}, <span>{basicInfoData.state}</span></span>
                            </div>
                            <div className="flex items-center">
                                <FaCalendarAlt className="mr-1" size={16} />
                                <span className='text-sm'>Joined <span>{basicInfoData.created_At}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Row 1.3 */}
                    <div className="flex justify-between items-center">
                        <div className="w-1/3">
                            <div className="flex justify-between items-center mb-2">
                                <p className='text-sm'>Profile Completion</p>
                                <span className="text-blue-600 font-semibold">{basicInfoData.profileCompletion}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${basicInfoData.profileCompletion}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="space-x-2">
                            <button className="btn-blue-dashboard">
                                Follow
                            </button>
                            <button className="btn-blue-dashboard">
                                Hire Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Edit your Account Information</h3>
                    <form className="space-y-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('Name')}
                                    className="btn-blue-dashboard"
                                >
                                    Update Name
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('Email')}
                                    className="btn-blue-dashboard"
                                >
                                    Update Email
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('Phone')}
                                    className="btn-blue-dashboard"
                                >
                                    Update Phone
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About you / Bio</label>
                            <textarea
                                id="bio"
                                rows="6"
                                placeholder="Tell us about yourself"
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('About you')}
                                    className="btn-blue-dashboard"
                                >
                                    Update About you
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;