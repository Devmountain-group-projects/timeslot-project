import React, { createContext, useState, useContext } from "react";

import axios from "axios";

// Create the Appointment Context
const AppointmentContext = createContext();

// Create a custom hook to use the AppointmentContext
export const useAppointment = () => {
    return useContext(AppointmentContext);
};

// Create the Appointment Provider
export const AppointmentProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);
    const [clients, setClients] = useState([]); // For managing client data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch appointments by user
    const fetchAppointmentsByUser = async (userId) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `/api/appointments/getAppointmentByUser`,
                {
                    params: { userId },
                },
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
            await axios.post(`/api/appointments/updateAppointment`, {
                appointmentId,
                ...updatedData,
            });
            setAppointments((prev) =>
                prev.map((appointment) =>
                    appointment.appointment_id === appointmentId
                        ? { ...appointment, ...updatedData }
                        : appointment,
                ),
            );
        } catch (err) {
            setError(err.message);
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
                prev.filter(
                    (appointment) => appointment.appointment_id !== appointmentId,
                ),
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
                appointments,
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
