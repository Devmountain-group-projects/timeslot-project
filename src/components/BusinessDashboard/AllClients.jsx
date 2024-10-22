import React, { useState } from 'react'
import { motion } from 'framer-motion'
// Row 1
import TotalClients from './ClientsSection/TotalClients'
import NewClients from './ClientsSection/NewClients'
import TopClients from './ClientsSection/TopClients'
import InactiveClients from './ClientsSection/InactiveClients'
// Row 2
import ClientList from './ClientsSection/ClientList'
import AddAppointment from './ClientsSection/AddAppointment'
// Row 3
import ReturningClients from './ClientsSection/ReturningClients'
import ClientSatisfaction from './ClientsSection/ClientSatisfaction'
import ClientRetention from './ClientsSection/ClientRetention'
// Modals
import AddClientModal from './ClientsSection/AddClientModal'
import EditClientModal from './ClientsSection/EditClientModal'
import CreateAppointmentModal from './ClientsSection/CreateAppointmentModal'
import EditDeleteAppointmentModal from './ClientsSection/EditDeleteAppointmentModal'

const AllClients = () => {
    const [showAddClientModal, setShowAddClientModal] = useState(false);
    const [showEditClientModal, setShowEditClientModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const [showCreateAppointmentModal, setShowCreateAppointmentModal] = useState(false);
    const [showEditAppointmentModal, setShowEditAppointmentModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    // Add clients state
    const [clients, setClients] = useState([
        { id: 1, name: 'Jane Smith', email: 'rodrigomcobos@gmail.com' },
        { id: 2, name: 'Alice Johnson', email: 'rodrigomcobos@gmail.com' },
        { id: 3, name: 'Bob Brown', email: 'rodrigomcobos@gmail.com' },
    ]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    const handleAddClient = (newClient) => {
        // Implement add client logic here
        console.log('Adding new client:', newClient);
        setClients([...clients, newClient]);
        setShowAddClientModal(false);
    }

    const handleUpdateClient = (updatedClient) => {
        // Implement update client logic here
        console.log('Updating client:', updatedClient);
        setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
        setShowEditClientModal(false);
    }

    const handleDeleteClient = (clientId) => {
        // Implement delete client logic here
        console.log('Deleting client:', clientId);
        setClients(clients.filter(client => client.id !== clientId));
        setShowEditClientModal(false);
    }

    const handleAddAppointment = (newAppointment) => {
        // Implement add appointment logic here
        console.log('Adding new appointment:', newAppointment);
        setShowCreateAppointmentModal(false);
    }

    const handleEditAppointment = (updatedAppointment) => {
        // Implement update appointment logic here
        console.log('Updating appointment:', updatedAppointment);
        setShowEditAppointmentModal(false);
    }

    const handleDeleteAppointment = (appointmentId) => {
        // Implement delete appointment logic here
        console.log('Deleting appointment:', appointmentId);
        setShowEditAppointmentModal(false);
    }

    return (
        <motion.div
            className="h-screen flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Row 1 - Using vh for height */}
            <motion.div
                className="flex-shrink-0 flex flex-col sm:flex-row flex-wrap gap-4"
                variants={rowVariants}
            >
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[15vh]"><TotalClients /></Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[15vh]"><NewClients /></Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[15vh]"><TopClients /></Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[15vh]"><InactiveClients /></Card>
            </motion.div>

            {/* Row 2 - Flexible height with min/max in vh */}
            <motion.div
                className="flex-1 flex flex-col md:flex-row gap-4 min-h-[45vh] max-h-[60vh]"
                variants={rowVariants}
            >
                <Card className="w-full md:w-[30%] h-full">
                    <div className="h-full">
                        <ClientList
                            onAddClient={() => setShowAddClientModal(true)}
                            onEditClient={(client) => {
                                setSelectedClient(client);
                                setShowEditClientModal(true);
                            }}
                        />
                    </div>
                </Card>
                <Card className="w-full md:w-[70%] h-full">
                    <div className="h-full">
                        <AddAppointment
                            onCreateAppointment={() => setShowCreateAppointmentModal(true)}
                            onEditAppointment={(appointment) => {
                                setSelectedAppointment(appointment);
                                setShowEditAppointmentModal(true);
                            }}
                        />
                    </div>
                </Card>
            </motion.div>

            {/* Row 3 - Using vh for height */}
            <motion.div
                className="flex-shrink-0 flex flex-col md:flex-row gap-4"
                variants={rowVariants}
            >
                <Card className="w-full md:w-1/3 h-[24vh]"><ReturningClients /></Card>
                <Card className="w-full md:w-1/3 h-[24vh]"><ClientSatisfaction /></Card>
                <Card className="w-full md:w-1/3 h-[24vh]"><ClientRetention /></Card>
            </motion.div>


            {/* Modals remain the same */}
            {showAddClientModal && (
                <AddClientModal
                    onClose={() => setShowAddClientModal(false)}
                    onAddClient={handleAddClient}
                />
            )}

            {showEditClientModal && selectedClient && (
                <EditClientModal
                    client={selectedClient}
                    onClose={() => setShowEditClientModal(false)}
                    onUpdateClient={handleUpdateClient}
                    onDeleteClient={handleDeleteClient}
                />
            )}

            {showCreateAppointmentModal && (
                <CreateAppointmentModal
                    onClose={() => setShowCreateAppointmentModal(false)}
                    onCreate={handleAddAppointment}
                    clients={clients}
                />
            )}

            {showEditAppointmentModal && selectedAppointment && (
                <EditDeleteAppointmentModal
                    appointment={selectedAppointment}
                    onClose={() => setShowEditAppointmentModal(false)}
                    onEdit={handleEditAppointment}
                    onDelete={handleDeleteAppointment}
                />
            )}
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
)

export default AllClients