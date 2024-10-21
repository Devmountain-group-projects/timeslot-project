import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AddClientModal = ({ onClose, onAddClient }) => {
    const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
        photo: null
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewClient(prev => ({ ...prev, photo: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newClient.name || !newClient.email || !newClient.phone) {
            setError('Please fill in all required fields.');
            return;
        }

        onAddClient(newClient);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Add New Client</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes size={24} />
                    </button>
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Client Picture
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-2 file:border-transparent file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-white hover:file:border-2 hover:file:border-secondary hover:file:text-secondary file:transition file:duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Client Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newClient.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Client Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={newClient.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Client Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={newClient.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-blue-dashboard"
                    >
                        Add Client
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClientModal;