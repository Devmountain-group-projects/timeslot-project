import { useState } from 'react';
import { FaPlus, FaChevronRight } from 'react-icons/fa';
import { useAppointment } from '../../../context/ApptContext';
import axios from "axios";
import PlaceholderAvatar from '/src/assets/images/placeholderavatar.png';
import User8 from '/src/assets/images/user8.png';
import User9 from '/src/assets/images/user9.png';
import User10 from '/src/assets/images/user10.png';
import AddClientModal from './AddClientModal';
import EditClientModal from './EditClientModal';

const ClientItem = ({ client, onEdit }) => {
    const defaultImage = PlaceholderAvatar;
    const clientPhoto = client.profile_picture ? client.profile_picture : defaultImage;

    return (
        <div className="border-b border-gray-300 last:border-b-0">
            <div className="flex items-center justify-between py-4 px-3">
                <div className="flex items-center flex-grow">
                    <div className="w-12 h-12 relative flex-shrink-0 mr-4">
                        <img
                            src={clientPhoto}
                            alt={client.name}
                            className="rounded-full object-cover absolute inset-0 w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <h3 className="font-medium text-base">{client.name}</h3>
                        <p className="text-xs text-gray-500">Since: {client.dateCreated}</p>
                        <p className="text-xs text-gray-600">{client.email}</p>
                    </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                    <button onClick={() => onEdit(client)} className="text-gray-400 hover:text-gray-600">
                        <FaChevronRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ClientList = () => {
    const { createClient, updateClient, removeClient } = useAppointment();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
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

            const response = await axios.post('/api/appointments/createClient', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const createdClient = response.data.client;
            setClients(prevClients => [...prevClients, createdClient]);
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };

    const handleUpdateClient = (updatedClient) => {
        updateClient(updatedClient.id, updatedClient);
        setClients(prevClients =>
            prevClients.map(client =>
                client.id === updatedClient.id ? updatedClient : client
            )
        );
    };

    const handleDeleteClient = (clientId) => {
        removeClient(clientId);
        setClients(prevClients => prevClients.filter(client => client.id !== clientId));
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