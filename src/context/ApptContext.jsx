import { createContext, useState, useContext } from "react";

import axios from "axios";

// Create the Appointment Context
const AppointmentContext = createContext();

// Create a custom hook to use the AppointmentContext
export const useAppointment = () => {
    return useContext(AppointmentContext);
};

// Create the Appointment Provider
export const AppointmentProvider = ({ children }) => {
    const businessId = 1; //static for one business now
    const [appointments, setAppointments] = useState([]);
    const [clients, setClients] = useState([]); // For managing client data
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isAppointmentsLoaded, setIsAppointmentsLoaded] = useState(false);

    const fetchServices = async () => {
        try {
            const response = await axios.get(`/api/business/services/${businessId}`);
            if (response.data.success) {
                setServices(response.data.services);
            } else {
                console.error("Failed to fetch services");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    // Function to fetch appointments by user ID
    const fetchAppointments = async () => {
        try {
            const response = await axios.get("/api/appointments/getAppointments");
            console.log("Testing: ", response.data)
            if (response.data.success) {
                setAppointments(response.data.appointments);
                setIsAppointmentsLoaded(true);
            } else {
                console.error("Failed to fetch appointments");
            }
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    // Fetch appointments by user ID
    const fetchAppointmentsByUser = async (userId) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `/api/appointments/getAppointments/user/${userId}`,
                { params: { userId } },
            );
            setAppointments(response.data.appointments);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch appointments by user
    const fetchClients = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/client/getClients`, {});
            console.log("Fetched Users: ", response);
            setClients(response.data.clients);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Add a new appointment
    const addAppointment = async (appointmentData) => {
        setLoading(true);
        console.log("AppointmentData", appointmentData);
        try {
            const response = await axios.post(
                `/api/appointments/addAppointment`,
                appointmentData,
            );
            setAppointments((prev) => [...prev, response.data.appointment]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    // Update an existing appointment
    const updateAppointment = async (appointmentId, updatedData) => {
        setLoading(true);
        try {
            const response = await axios.put(`/api/appointments/updateAppointment/${appointmentId}`, updatedData);
            if (response.data.success) {
                setAppointments(prev => prev.map(app =>
                    app.appointment_id === appointmentId ? response.data.appointment : app
                ));
                return response.data.appointment;
            } else {
                throw new Error(response.data.message || 'Failed to update appointment');
            }
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Remove an appointment
    const removeAppointment = async (appointmentId) => {
        setLoading(true);
        try {
            await axios.delete(`/api/appointments/removeAppointment`, {
                data: { appointmentId },
            });
            setAppointments((prev) =>
                prev.filter((appointment) => appointment.appointment_id !== appointmentId)
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // --- USER (CLIENT) METHODS ---

    // Create a new client
    const createClient = async (clientData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "/api/client/createClient",
                clientData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // To handle image uploads
                    },
                },
            );
            console.log(response.data.client);
            setClients((prev) => [...prev, response.data.client]);
            console.log(clients);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Update an existing client
    const updateClient = async (clientId, updatedData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `/api/client/updateClient/` + clientId,
                updatedData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // To handle image uploads
                    },
                },
            );
            setClients((prev) =>
                prev.map((client) =>
                    client.user_id === clientId
                        ? { ...client, ...response.data.client }
                        : client,
                ),
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Remove a client
    const removeClient = async (clientId) => {
        setLoading(true);
        try {
            await axios.post(`/api/client/removeClient`, { clientId });
            setClients((prev) =>
                prev.filter((client) => client.user_id !== clientId),
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppointmentContext.Provider
            value={{
                loading,
                error,
                services,
                fetchServices,
                appointments,
                isAppointmentsLoaded,
                fetchAppointments,
                fetchAppointmentsByUser,
                addAppointment,
                updateAppointment,
                removeAppointment,
                clients,
                setClients,
                fetchClients,
                createClient,
                updateClient,
                removeClient,
            }}
        >
            {children}
        </AppointmentContext.Provider>
    );
};
