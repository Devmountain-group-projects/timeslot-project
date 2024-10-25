import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import { useAppointment } from "../../../context/ApptContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

const AppointmentModal = ({ appt, closeModal }) => {
    const { addAppointment, updateAppointment, clients, services } =
        useAppointment();
    const [appointment, setAppointment] = useState(appt);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const selectedClient = clients.find(
                (client) => client.user_id === parseInt(appointment.user_id),
            );

            if (!selectedClient) {
                throw new Error("No client selected");
            }

            console.log("Selected client:", selectedClient);
            console.log("Client email:", selectedClient.email);

            const appointmentData = {
                ...appointment,
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().toLocaleDateString(),
            };

            if (appt) {
                updateAppointment(appt.appointment_id, appointmentData);
            } else {
                addAppointment(appointmentData);
            }

            closeModal();
        } catch (error) {
            console.error("Error creating appointment:", error);
            alert("Failed to create appointment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const modalContent = (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] px-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl w-full relative">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    disabled={isSubmitting}
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-base font-semibold mb-4">
                    {appt ? "Update" : "Create New"} Appointment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="w-full sm:w-1/2 space-y-4">
                            <div>
                                <label
                                    htmlFor="user_id"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Client Name
                                </label>
                                <select
                                    id="user_id"
                                    name="user_id"
                                    value={appointment?.user_id}
                                    onChange={handleInputChange}
                                    required
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select a client</option>
                                    {clients.map((client) => (
                                        <option key={client.user_id} value={client.user_id}>
                                            {client.name} ({client.email})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="appointment_date"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Appointment Date
                                </label>
                                <input
                                    type="date"
                                    id="appointment_date"
                                    name="appointment_date"
                                    value={
                                        appointment
                                            ? dayjs
                                                .tz(appointment.appointment_date)
                                                .format("YYYY-MM-DD")
                                            : ""
                                    }
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div className="flex flex-row space-x-4">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="appointment_start"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        id="appointment_start"
                                        name="appointment_start"
                                        value={appointment?.appointment_start}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label
                                        htmlFor="appointment_end"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        End Time
                                    </label>
                                    <input
                                        type="time"
                                        id="appointment_end"
                                        name="appointment_end"
                                        value={appointment?.appointment_end}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="service_type"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Service Type
                                </label>
                                <select
                                    id="service_id"
                                    name="service_id"
                                    value={appointment?.service_id}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select a service type</option>
                                    {services.map((service) => (
                                        <option key={service.service_id} value={service.service_id}>
                                            {service.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 space-y-4 mt-4 sm:mt-0">
                            <div className="flex flex-row space-x-4">
                                <div className="w-1/2">
                                    <label
                                        htmlFor="status"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={appointment?.status}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                        className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Select status</option>
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="notes"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Notes
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={appointment?.notes}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    rows={3}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="payment_status"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Payment Status
                                </label>
                                <select
                                    id="payment_status"
                                    name="payment_status"
                                    value={appointment?.payment_status}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select payment status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Overdue">Overdue</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-blue-dashboard mt-4 w-full sm:w-auto ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isSubmitting
                            ? `${appt ? "Updating" : "Creating"} Appointment...`
                            : `${appt ? "Update" : "Create"} Appointment`}
                    </button>
                </form>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default AppointmentModal;
