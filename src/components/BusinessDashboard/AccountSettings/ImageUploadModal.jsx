import React from 'react'
import { BsCloudUpload } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useState } from 'react';



const ImageUploadModal = ({ onClose, uploadType, onSubmit }) => {
    
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Photo Selected:', file);
            console.log(prev => ({ ...prev, photo: file }));
        }
        // console.log(newPhoto)
        onSubmit(uploadType, file)
    };

    return (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-black before:opacity-60 before:rounded-lg overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <section className="flex items-center pb-3 border-b border-gray-200">
                    <div className="flex-1">
                        <h3 className="text-gray-800 text-xl font-bold">Upload {uploadType === 'cover' ? 'Cover' : 'Profile'} Image</h3>
                    </div>

                    <MdClose size={24} onClick={onClose} className="w-6 ml-2 cursor-pointer shrink-0 text-gray-500 hover:text-red-500" />
                </section>

                <section className="rounded-lg border-2 border-gray-200 border-dashed mt-6">
                    <div className="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
                        <BsCloudUpload size={50} className="w-10 mb-4 text-gray-600" />

                        <h4 className="text-sm text-gray-600">Drag & Drop or <label htmlFor="chooseFile" className="text-secondary cursor-pointer">Choose file</label> to upload</h4>
                        <input type="file" id="chooseFile" className="" onChange={handlePhotoUpload} />
                    </div>
                </section>

                <section className="border-t border-gray-200 pt-6 flex justify-end gap-4 mt-6">
                    <button type="button"
                        className="btn-blue-dashboard text-secondary bg-tertiary hover:bg-white active:bg-tertiary transition duration-300"
                        onClick={onClose}>
                        Cancel
                    </button>
                    <button type="button"
                        className="btn-blue-dashboard" onClick={onClose}>
                        Import
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ImageUploadModal