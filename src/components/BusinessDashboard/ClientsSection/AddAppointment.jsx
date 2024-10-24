import { useEffect, useState } from "react";
import {
    FaPlus,
    FaCalendarAlt,
    FaClock,
    FaClipboardList,
    FaCheckCircle,
    FaChevronDown,
    FaChevronUp,
    FaChevronRight,
} from "react-icons/fa";
import { useAppointment } from "../../../context/ApptContext.jsx";
import dayjs from "dayjs";

const AddAppointment = ({ onCreateAppointment, onEditAppointment, onDeleteAppointment }) => {
    const { appointments, isAppointmentsLoaded } = useAppointment();
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [expandedAppointment, setExpandedAppointment] = useState(null);

    // Set the first appointment as selected by default for desktop view
    useEffect(() => {
        if (isAppointmentsLoaded && appointments.length > 0 && !selectedAppointment) {
            setSelectedAppointment(appointments[0]);
        }
    }, [isAppointmentsLoaded, appointments]);

    const toggleAccordion = (index) => {
        setExpandedAppointment(expandedAppointment === index ? null : index);
    };

    return (
        <div className="flex flex-col h-full overflow-hidden border-2 border-gray-300 rounded-xl">
            <header className="flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="w-[90%] text-sm text-left font-medium">Add Appointment</h2>
                <button
                    className="p-2 bg-gradient-gray ring-1 ring-secondary rounded-lg hover:bg-secondary text-secondary hover:text-white transition-colors duration-300"
                    aria-label="Add Appointment"
                    onClick={onCreateAppointment}
                >
                    <FaPlus className="text-lg" />
                </button>
            </header>
            <hr className="border-t border-gray-300 w-full m-0" />

            <div className="flex-grow overflow-hidden">
                {/* Mobile View */}
                <div className="lg:hidden overflow-y-auto h-full">
                    {appointments.map((appointment, index) => {
                        const client = appointment.user;
                        return (
                            <div
                                key={appointment.appointment_id}
                                className="border-b border-gray-300 last:border-b-0"
                            >
                                <div
                                    className="flex items-start justify-between p-4 cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="flex items-start">
                                        <img
                                            src={client.profile_picture}
                                            alt={client.name}
                                            className="w-12 h-12 rounded-full mr-3 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-sm md:text-base">
                                                {client.name}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                Date: {dayjs(appointment.appointment_date).format("YYYY-MM-DD")}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Service: {appointment.service.name}
                                            </p>
                                        </div>
                                    </div>
                                    {expandedAppointment === index ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expandedAppointment === index && (
                                    <div className="p-4 bg-gray-50">
                                        <AppointmentDetails
                                            appointment={appointment}
                                            onEdit={() => onEditAppointment(appointment)}
                                            onDelete={() => onDeleteAppointment(appointment.appointment_id)}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex h-full">
                    <div className="w-[45%] overflow-y-auto border-r border-gray-300">
                        {appointments.map((appointment) => (
                            <AppointmentCard
                                key={appointment.appointment_id}
                                appointment={appointment}
                                isSelected={selectedAppointment && selectedAppointment.appointment_id === appointment.appointment_id}
                                onClick={() => setSelectedAppointment(appointment)}
                            />
                        ))}
                    </div>
                    <div className="w-[55%] overflow-y-auto">
                        {selectedAppointment && (
                            <div className="p-4">
                                <AppointmentDetails
                                    appointment={selectedAppointment}
                                    onEdit={() => onEditAppointment(selectedAppointment)}
                                    onDelete={() => onDeleteAppointment(selectedAppointment.appointment_id)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AppointmentCard = ({ appointment, isSelected, onClick }) => {
    const client = appointment.user;
    return (
        <div
            className={`p-4 flex items-start cursor-pointer ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
            onClick={onClick}
        >
            <img
                src={client.profile_picture}
                alt={client.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
            />
            <div className="flex-grow">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-sm md:text-base">{client.name}</h3>
                        <p className="text-xs text-gray-500">
                            Date: {dayjs(appointment.appointment_date).format("YYYY-MM-DD")}
                        </p>
                        <InfoItem
                            icon={FaClipboardList}
                            value={appointment.service.name}
                            className="text-xs text-gray-500"
                        />
                        <InfoItem
                            icon={FaCheckCircle}
                            value={appointment.status}
                            className="text-xs text-gray-500"
                        />
                    </div>
                    {isSelected && <FaChevronRight className="text-gray-400 text-lg" />}
                </div>
            </div>
        </div>
    );
};

const AppointmentDetails = ({ appointment, onEdit, onDelete }) => (
    <div>
        <h3 className="font-semibold text-base mb-2">Appointment Details</h3>
        <InfoItem label="Service Provider" value={appointment.service.name} />
        <InfoItem
            label="Created At"
            value={dayjs(appointment.createdAt).format("YYYY-MM-DD")}
        />
        <InfoItem
            label="Updated At"
            value={dayjs(appointment.updateAt).format("YYYY-MM-DD")}
        />
        <InfoItem label="Price" value={`$${appointment.service.price}`} />
        <InfoItem label="Description" value={appointment.service.description} />
        <InfoItem label="Payment Status" value={appointment.payment_status} />

        <div className="mt-4">
            <label
                htmlFor="notes"
                className="block text-xs font-medium text-secondary mb-1 uppercase"
            >
                Appointment Notes
            </label>
            <textarea
                id="notes"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4"
                placeholder="Enter appointment notes here..."
            />
            <div className="flex justify-start gap-4">
                <button onClick={onEdit} className="btn-blue-dashboard">
                    Edit Appointment
                </button>
                <button onClick={onDelete} className="btn-red">
                    Delete Appointment
                </button>
            </div>
        </div>
    </div>
);

const InfoItem = ({ icon: Icon, label, value, className = "" }) => (
    <div className={`flex items-center ${className} mb-2`}>
        {Icon && <Icon size={12} className="mr-1 text-secondary" />}
        {label && (
            <span className="font-medium mr-1 uppercase text-xs text-secondary">
                {label}:
            </span>
        )}
        <span className="text-gray-600">{value}</span>
    </div>
);

export default AddAppointment;