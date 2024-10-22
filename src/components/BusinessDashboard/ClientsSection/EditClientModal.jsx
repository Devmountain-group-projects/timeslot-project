import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";

const EditClientModal = ({
    client,
    onClose,
    onUpdateClient,
    onDeleteClient,
}) => {
    const [editedClient, setEditedClient] = useState(client);
    const [profileImage, setProfileImage] = useState(
        editedClient.profile_picture,
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedClient((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditedClient((prev) => ({ ...prev, photo: file }));

            let reader = new FileReader();
            reader.onload = function (e) {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdateClient(editedClient);
        onClose();
    };

    const modalContent = (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] px-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-base font-semibold mb-4">Edit Client</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Client Picture
                            <div className="w-12 h-12 relative flex-shrink-0 mr-4 mt-1">
                                <img
                                    id="profile-img"
                                    src={profileImage}
                                    alt={editedClient.name}
                                    className="rounded-full object-cover absolute inset-0 w-full h-full"
                                />
                            </div>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-2 file:border-transparent file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-white hover:file:border-2 hover:file:border-secondary hover:file:text-secondary file:transition file:duration-300"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Client Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={editedClient.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Client Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editedClient.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Client Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={editedClient.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="flex justify-between pt-4">
                        <button type="submit" className="btn-blue-dashboard">
                            Update Client
                        </button>
                        <button
                            type="button"
                            onClick={() => onDeleteClient(editedClient.user_id)}
                            className="btn-red"
                        >
                            Delete Client
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default EditClientModal;