import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import { BiSolidPencil } from "react-icons/bi";
import User6 from '../../../assets/images/placeholderavatar.png'
import CoverImg from '../../../assets/images/placeholdercover.png'
import ImageUploadModal from './ImageUploadModal';


const BasicInfo = () => {
    const [showModal, setShowModal] = useState(false);
    const [uploadType, setUploadType] = useState('');

    const basicInfoData = {
        name: 'John Doe',
        profileImg: User6,
        coverImg: CoverImg,
        city: 'Lehi',
        state: 'UT',
        created_At: 'October 17, 2022',
    }

    const handleUpdate = (field) => {
        console.log(`${field} has been updated`);
    }

    const handleImageUpload = (type) => {
        setUploadType(type);
        setShowModal(true);
    }

    return (
        <div className="w-full space-y-4">
            {/* Card 1 */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    {/* Row 1.1 */}
                    <div className="relative h-40 mb-16">
                        {/* Cover image placeholder */}
                        <div className="relative group h-44">
                            <img src={CoverImg} alt="CoverImg" className="w-full h-full object-cover rounded-lg" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer"
                                onClick={() => handleImageUpload('cover')}
                            >
                                <div className="text-white text-center">
                                    <FaCamera className="mx-auto mb-1" size={20} />
                                    <span className='text-sm'>Update Cover Image</span>
                                </div>
                            </div>
                        </div>
                        {/* Profile image placeholder */}
                        <div className="absolute -bottom-[45%] left-1/2 transform -translate-x-[50%] w-32 h-32">
                            <div className="relative w-full h-full">
                                <img src={User6} alt="User6" className="w-full h-full rounded-full bg-gray-300 border-2 border-gray-300" />
                                <div
                                    className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer text-white hover:bg-white hover:text-blue-500 hover:ring-2 hover:ring-blue-500 transition duration-300"
                                    onClick={() => handleImageUpload('profile')}
                                >
                                    <BiSolidPencil className="" size={16} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 1.2 */}
                    <div className="text-center my-4 pt-4">
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
                    <div className="flex justify-end items-center space-x-2">
                        <button className="btn-blue-dashboard">
                            Follow
                        </button>
                        <button className="btn-blue-dashboard">
                            Hire Me
                        </button>
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

            {showModal && (
                <ImageUploadModal
                    onClose={() => setShowModal(false)}
                    uploadType={uploadType}
                />
            )}
        </div>
    );
};

export default BasicInfo;