import { useState } from 'react';
import { FaPlus, FaTimes, FaChevronRight } from 'react-icons/fa';
import { useAppointment } from '../../../context/ApptContext';  // Use context
import axios from "axios";
import PlaceholderAvatar from '/src/assets/images/placeholderavatar.png';
import User8 from '/src/assets/images/user8.png';
import User9 from '/src/assets/images/user9.png';
import User10 from '/src/assets/images/user10.png';

const ClientItem = ({ client, onEdit }) => {
    const defaultImage = PlaceholderAvatar;  // Fallback image

    // Use client.photo if it exists, else fallback to default
    const clientPhoto = client.profile_picture ? client.profile_picture : defaultImage;

    return (
        <div className="border-b border-gray-300 last:border-b-0">
            <div className="flex items-center py-4 px-3">
                <div className="w-[20%] flex-shrink-0">
                    <div className="w-12 h-12 relative">
                        <img
                            src={clientPhoto}  // Display the correct profile picture
                            alt={client.name}
                            className="rounded-full object-cover absolute inset-0 w-full h-full"
                        />
                    </div>
                </div>
                <div className="w-[70%] flex flex-col justify-center items-start text-left">
                    <h3 className="font-medium text-base">{client.name}</h3>
                    <p className="text-xs text-gray-500">Since: {client.dateCreated}</p>
                    <p className="text-xs text-gray-600">{client.email}</p>
                </div>
                <div className="w-[10%] flex justify-end items-center">
                    <button onClick={() => onEdit(client)} className="text-gray-400 hover:text-gray-600">
                        <FaChevronRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const AddClientModal = ({ onClose, onAddClient }) => {
    const [newClient, setNewClient] = useState({
        name: '',
        email: '',
        phone: '',
        photo: null
    });
    const [error, setError] = useState(null);  // To handle errors

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Input Changed: ${name} = ${value}`);
        setNewClient(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Photo Selected:', file);
            setNewClient(prev => ({ ...prev, photo: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!newClient.name || !newClient.email || !newClient.phone) {
            setError('Please fill in all required fields.');
            return;
        }
        console.log(newClient)
        onAddClient(newClient);  // Use the passed onAddClient method
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
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

const EditClientModal = ({ client, onClose, onUpdateClient, onDeleteClient }) => {
    const [editedClient, setEditedClient] = useState(client);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedClient(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedClient(prev => ({ ...prev, photo: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdateClient(editedClient);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Edit Client</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes size={24} />
                    </button>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Client Picture
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
                            value={editedClient.name}
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
                            value={editedClient.email}
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
                            value={editedClient.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="btn-blue-dashboard"
                        >
                            Update Client
                        </button>
                        <button
                            type="button"
                            onClick={() => onDeleteClient(client.id)}
                            className="btn-red"
                        >
                            Delete Client
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ClientList = () => {
    const { createClient, updateClient, removeClient } = useAppointment();  // Use context
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    // Sample clients
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "(555) 123-4567",
            dateCreated: "October 1, 2024",
            photo: User9
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "(555) 987-6543",
            dateCreated: "October 5, 2024",
            photo: User8
        },
        {
            id: 3,
            name: "Yasmin Abdulaziz",
            email: "yazmin.abdulaziz@example.com",
            phone: "(555) 456-7890",
            dateCreated: "October 3, 2024",
            photo: User10
        }
    ]);

    const handleAddClient = async (newClient) => {
        try {
            const formData = new FormData();
            formData.append('clientName', newClient.name);
            formData.append('clientEmail', newClient.email);
            formData.append('clientPhone', newClient.phone);
            if (newClient.photo) {
                formData.append('photo', newClient.photo);
            }

            // Log the formData to see if the correct values are being appended
            console.log('Form Data before sending:');
            for (const pair of formData.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }

            // Send request
            const response = await axios.post('/api/appointments/createClient', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Add the new client to local state
            const createdClient = response.data.client;
            setClients(prevClients => [...prevClients, createdClient]);
        } catch (error) {
            console.error('Error adding client:', error);
            if (error.response) {
                console.error('Server Response:', error.response.data);
            }
        }
    };

    const handleUpdateClient = (updatedClient) => {
        updateClient(updatedClient.id, updatedClient);  // Call the updateClient method from context
    };

    const handleDeleteClient = (clientId) => {
        removeClient(clientId);  // Call the removeClient method from context
        setShowEditModal(false);
    };

    const handleEditClick = (client) => {
        setSelectedClient(client);
        setShowEditModal(true);
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex-shrink-0 flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Client List</h2>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Add client"
                >
                    <FaPlus className="text-lg" />
                </button>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                <div className="min-h-full">
                    {clients.map((client) => (
                        <ClientItem key={client.id} client={client} onEdit={handleEditClick} />
                    ))}
                </div>
            </section>
            {showAddModal && (
                <AddClientModal
                    onClose={() => setShowAddModal(false)}
                    onAddClient={handleAddClient}
                />
            )}
            {showEditModal && selectedClient && (
                <EditClientModal
                    client={selectedClient}
                    onClose={() => setShowEditModal(false)}
                    onUpdateClient={handleUpdateClient}
                    onDeleteClient={handleDeleteClient}
                />
            )}
        </div>
    );
};

export default ClientList;