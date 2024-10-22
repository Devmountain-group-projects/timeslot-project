import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppointment } from "../../../context/ApptContext";
import axios from "axios";
import PlaceholderAvatar from "/src/assets/images/placeholderavatar.png";
import User8 from "/src/assets/images/user8.png";
import User9 from "/src/assets/images/user9.png";
import User10 from "/src/assets/images/user10.png";
import AddClientModal from "./AddClientModal";
import EditClientModal from "./EditClientModal";

const ClientItem = ({ client, onEdit }) => {
    const defaultImage = PlaceholderAvatar;
    const clientPhoto = client.profile_picture
        ? client.profile_picture
        : defaultImage;

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
                        <p className="text-xs text-gray-500">
                            Since: {new Date(client.createdAt).toLocaleString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        })}
                        </p>
                        <p className="text-xs text-gray-600">{client.email}</p>
                    </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                    <button
                        onClick={() => onEdit(client)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FaPlus className="text-lg"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

const ClientList = () => {
    const {
        createClient,
        updateClient,
        removeClient,
        fetchClients,
        clients,
        setClients,
    } = useAppointment();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    // const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    // 1. Handle Adding Client
    const handleAddClient = async (newClient) => {
        // console.log("handleAddClient triggered with new client:", newClient);

        try {
            const formData = new FormData();
            formData.append("clientName", newClient.name);
            formData.append("clientEmail", newClient.email);
            formData.append("clientPhone", newClient.phone);
            formData.append("clientDateCreated", newClient.createdAt);
            if (newClient.photo) {
                formData.append("photo", newClient.photo);
            }

            // console.log("Form data to be sent:", formData);

            const response = await axios.post("/api/client/createClient", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Response from server:", response);

            const createdClient = response.data.client;
            // console.log("New client created on the server:", createdClient);

            // Update state with new client
            setClients((prevClients) => [...prevClients, createdClient]);
            setShowAddModal(false); // Close the modal after adding
        } catch (error) {
            console.error("Error adding client:", error);
        }
    };

    // 2. Handle Updating Client
    const handleUpdateClient = async (updatedClient) => {
        // console.log(
        //   "handleUpdateClient triggered with updated client:",
        //   updatedClient,
        // );

        try {
            const formData = new FormData();
            formData.append("clientName", updatedClient.name);
            formData.append("clientEmail", updatedClient.email);
            formData.append("clientPhone", updatedClient.phone);
            if (updatedClient.photo) {
                formData.append("photo", updatedClient.photo);
            }

            // console.log("Form data to be sent:", formData);

            const response = await axios.put(
                `/api/client/updateClient/${updatedClient.user_id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );

            console.log("Response from server:", response);

            if (response.data.success) {
                const updatedClientData = response.data.client;
                // Update state with the modified client
                setClients((prevClients) =>
                    prevClients.map((client) =>
                        client.user_id === updatedClientData.user_id
                            ? updatedClientData
                            : client,
                    ),
                );
                setShowEditModal(false); // Close the modal after updating
            }
        } catch (error) {
            console.error("Error updating client:", error);
        }
    };

    // 3. Handle Deleting Client
    const handleDeleteClient = async (clientId) => {
        // console.log("handleDeleteClient triggered for clientId:", clientId); // Log clientId

        try {
            const response = await axios.delete(
                `/api/client/removeClient/${clientId}`,
            );

            console.log("Response from server:", response);

            if (response.data.success) {
                // Remove the client from the state
                setClients((prevClients) =>
                    prevClients.filter((client) => client.user_id !== clientId),
                );
                setShowEditModal(false); // Close modal after deletion
            }
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    };

    // 4. Handle Editing Client
    const handleEditClick = (client) => {
        // console.log("handleEditClick triggered for client:", client); // Log the selected client
        setSelectedClient(client);
        setShowEditModal(true);
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex-shrink-0 flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Client List</h2>
                <button
                    onClick={() => {
                        // console.log("Add Client button clicked");
                        setShowAddModal(true);
                    }}
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Add client"
                >
                    <FaPlus className="text-lg"/>
                </button>
            </section>
            <hr className="border-t border-gray-300 w-full m-0"/>
            <section className="flex-grow overflow-y-auto">
                <div className="min-h-full">
                    {clients.sort((a, b) => a.name.localeCompare(b.name)).map((client) => (
                        <ClientItem
                            key={client.id}
                            client={client}
                            onEdit={handleEditClick}
                        />
                    ))}
                </div>
            </section>

            {/* Add Client Modal */}
            {showAddModal && (
                <AddClientModal
                    onAddClient={handleAddClient}
                    onClose={() => {
                        // console.log("Add Client Modal closed");
                        setShowAddModal(false);
                    }}
                />
            )}

            {/* Edit Client Modal */}
            {showEditModal && selectedClient && (
                <EditClientModal
                    client={selectedClient}
                    onUpdateClient={handleUpdateClient}
                    onDeleteClient={handleDeleteClient} // Pass the delete handler here
                    onClose={() => {
                        // console.log("Edit Client Modal closed");
                        setShowEditModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default ClientList;
