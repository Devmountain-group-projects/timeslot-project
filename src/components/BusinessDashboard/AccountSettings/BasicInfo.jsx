import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import { BiSolidPencil } from "react-icons/bi";
import User6 from '../../../assets/images/placeholderavatar.png'
import CoverImg from '../../../assets/images/placeholdercover.png'
import ImageUploadModal from './ImageUploadModal';
import { userCheck } from '../../../context/AuthContext';
import { updateBusiness, photoUpdate, getPhotos } from '../../../context/businessContext';
import axios from 'axios';


const BasicInfo = () => {
    const [showModal, setShowModal] = useState(false);
    const [uploadType, setUploadType] = useState('');
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [bio, setBio] = useState("Tell us about yourself")
    const [photo, setPhoto] = useState(User6)
    const [cover, setCover] = useState(CoverImg)
    const [business, setBusiness] = useState(null)
    const [city, setCity] = useState("No")
    const [state, setState] = useState("Address")
    const [created_At, setCreated_At] = useState(null)
    const [newName, setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const [newPhone, setNewPhone] = useState(phone)
    const [newBio, setNewBio] = useState(null)
    const [newPhoto, setNewPhoto] = useState(User6)

    useEffect(()  => {
        sessionCheck()
        photoCheck()
    }, [])

    const sessionCheck = async () => {
        const res = await userCheck()
        if (res.success) {
            setName(res.user.name)
            setNewName(res.user.name)
            
            if (res.user.profile_picture === "Default") {
                setPhoto(User6)
            } else {
                setPhoto(res.user.profile_picture)
            }
            
            
            if (res.user.business[0]) {
                setBusiness(res.user.business[0].business_name)
                setCity(res.user.business[0].city)
                setState(res.user.business[0].state)
                setBio(res.user.business[0].description)
            }
            
            const formatData = res.user.createdAt.split("T")
            setCreated_At(formatData[0])
            setEmail(res.user.email)
            setPhone(res.user.phone)
            
        } else {
            setName("User Not logged in")
            setBusiness("No business")
        }


    }

    const photoCheck = async () => {
        const res = await userCheck()
        if (res.success) {
            console.log("res.user.profile_picture: ", res.user.profile_picture)
            if (res.user.profile_picture === "Default") {
                setPhoto(User6)
            } else {
                setPhoto(res.user.profile_picture)
            }
            console.log("Is this updating", photo)
        } else {
            setPhoto(User6)
        }
    }

    const basicInfoData = {
        name,
        profileImg: photo,
        coverImg: CoverImg,
        city,
        state,
        created_At,
    }

    const handleUpdate = async (field, input) => {
        if(input){
           console.log(`${field} has been updated to ${input}`);
           const res = await updateBusiness(field, input)
           console.log(res) 
           
        } else {
            console.log("Feild is Empty")
        }
        
    }

    const handleImageUpload = async (type, input) => {
        setUploadType(type);
        setShowModal(true);
        console.log("handleImageUpload-type: ", type)
        console.log("handleImageUpload-input: ", input)
        photoCheck()
    }

    const imageUpload = (type, image) => {
        console.log("Updating image")
        console.log(type, image)
        setNewPhoto(image)
        console.log("New Photo", newPhoto)
        photoUpdate(type, image)
        window.location.reload();
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
                                <img src={basicInfoData.profileImg} alt="User6" className="w-full h-full rounded-full bg-gray-300 border-4 border-white" />
                                <div
                                    className="absolute bottom-0 right-0 bg-blue-500 ring-4 ring-white rounded-full p-2 cursor-pointer text-white hover:bg-white hover:text-blue-500 hover:ring-4 hover:ring-blue-500 transition duration-300"
                                    onClick={() => {handleImageUpload('photo', newPhoto)}}
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
                                placeholder={name}
                                onChange={(e) => setNewName(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() =>{ handleUpdate('name', newName), setName(newName)}}
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
                                placeholder={email}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => {handleUpdate('email', newEmail), setEmail(newEmail)}}
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
                                placeholder={phone}
                                onChange={(e) => setNewPhone(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => {handleUpdate('phone', newPhone), setPhone(newPhone)}}
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
                                placeholder={bio}
                                onChange={(e) => setNewBio(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => {handleUpdate('about', newBio), setBio(newBio)}}
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
                    onClose={() => {setShowModal(false)}}
                    onSubmit={imageUpload}
                    uploadType={uploadType}
                />
            )}
        </div>
    );
};

export default BasicInfo;