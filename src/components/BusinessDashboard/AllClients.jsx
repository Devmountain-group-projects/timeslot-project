import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Row 1
import TotalClients from "./ClientsSection/TotalClients";
import NewClients from "./ClientsSection/NewClients";
import TopClients from "./ClientsSection/TopClients";
import InactiveClients from "./ClientsSection/InactiveClients";
// Row 2
import ClientList from "./ClientsSection/ClientList";
import AddAppointment from "./ClientsSection/AddAppointment";
// Row 3
import ReturningClients from "./ClientsSection/ReturningClients";
import ClientSatisfaction from "./ClientsSection/ClientSatisfaction";
import ClientRetention from "./ClientsSection/ClientRetention";
// Modals
import AddClientModal from "./ClientsSection/AddClientModal";
import EditClientModal from "./ClientsSection/EditClientModal";
import CreateAppointmentModal from "./ClientsSection/CreateAppointmentModal";
import EditDeleteAppointmentModal from "./ClientsSection/EditDeleteAppointmentModal";
import { useAppointment } from "../../context/ApptContext.jsx";

const AllClients = () => {
    const { fetchClients, fetchAppointments, fetchServices } = useAppointment();

    const [showAddClientModal, setShowAddClientModal] = useState(false);
    const [showEditClientModal, setShowEditClientModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const [showCreateAppointmentModal, setShowCreateAppointmentModal] =
        useState(false);
    const [showEditAppointmentModal, setShowEditAppointmentModal] =
        useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const handleAddClient = (newClient) => {
        console.log("Adding new client:", newClient);
        setShowAddClientModal(false);
    };

    const handleUpdateClient = (updatedClient) => {
        console.log("Updating client:", updatedClient);
        setShowEditClientModal(false);
    };

    const handleDeleteClient = (clientId) => {
        console.log("Deleting client:", clientId);
        setShowEditClientModal(false);
    };

    const handleAddAppointment = (newAppointment) => {
        console.log("Adding new appointment:", newAppointment);
        setShowCreateAppointmentModal(false);
    };

    const handleEditAppointment = (updatedAppointment) => {
        console.log("Updating appointment:", updatedAppointment);
        setShowEditAppointmentModal(false);
    };

    const handleDeleteAppointment = (appointmentId) => {
        console.log("Deleting appointment:", appointmentId);
        setShowEditAppointmentModal(false);
    };

    useEffect(() => {
        fetchClients();
        fetchAppointments();
        fetchServices();
    }, []);

    return (
        <>
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
                    <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[14vh]">
                        <TotalClients />
                    </Card>
                    <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[14vh]">
                        <NewClients />
                    </Card>
                    <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[14vh]">
                        <TopClients />
                    </Card>
                    <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[14vh]">
                        <InactiveClients />
                    </Card>
                </motion.div>

                {/* Row 2 - Flexible height with min/max in vh */}
                <motion.div
                    className="flex-1 flex flex-col md:flex-row gap-4 min-h-[45vh] max-h-[60vh]"
                    variants={rowVariants}
                >
                    <Card className="w-full md:w-[30%] h-full">
                        <div className="h-full">
                            <ClientList />
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
                    <Card className="w-full md:w-1/3 h-[24vh]">
                        <ReturningClients />
                    </Card>
                    <Card className="w-full md:w-1/3 h-[24vh]">
                        <ClientSatisfaction />
                    </Card>
                    <Card className="w-full md:w-1/3 h-[24vh]">
                        <ClientRetention />
                    </Card>
                </motion.div>
            </motion.div>

            {/* Modals rendered outside the main container */}
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
        </>
    );
};

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
);

export default AllClients;
