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

    const toggleAccordion = (index) => {
        setSelectedAppointment(index === selectedAppointment ? null : index);
    };

    useEffect(() => {
        setSelectedAppointment(0);
    }, [isAppointmentsLoaded]);

    return (
        <div className="flex flex-col h-full overflow-hidden border-2 border-gray-300 rounded-xl">
            <header className="flex-shrink-0 flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Add Appointment</h2>
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
                <div className="lg:flex h-full">
                    <div className="w-[45%] overflow-y-auto border-r border-gray-300 h-full">
                        {appointments.map(function (appointment, index) {
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
                                                <InfoItem
                                                    icon={FaCalendarAlt}
                                                    label="Appointment Date"
                                                    value={dayjs(appointment.appointment_date).format(
                                                        "YYYY-MM-DD",
                                                    )}
                                                />
                                                <InfoItem
                                                    icon={FaClock}
                                                    label="Appointment Time"
                                                    value={appointment.appointment_start}
                                                />
                                                <InfoItem
                                                    icon={FaClipboardList}
                                                    label="Service Type"
                                                    value={appointment.service.name}
                                                />
                                                <InfoItem
                                                    icon={FaCheckCircle}
                                                    label="Status"
                                                    value={appointment.status}
                                                />
                                            </div>
                                        </div>
                                        {selectedAppointment === index ? (
                                            <FaChevronUp />
                                        ) : (
                                            <FaChevronDown />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-[55%] overflow-y-auto h-full">
                        {isAppointmentsLoaded && selectedAppointment !== null && (
                            <AppointmentDetails
                                appointment={appointments[selectedAppointment]}
                                onEdit={() => onEditAppointment(appointments[selectedAppointment])}
                                onDelete={() => onDeleteAppointment(appointments[selectedAppointment].appointment_id)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AppointmentDetails = ({ appointment, onEdit, onDelete }) => (
    <div className="p-4">
        <h3 className="font-semibold text-base mb-4">Appointment Details</h3>
        <InfoItem label="Service Provider" value="" />
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

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center text-xs md:text-sm mb-1">
        {Icon && <Icon size={12} className="mr-1 text-secondary" />}
        <span className="font-medium mr-1 uppercase text-xs text-secondary">
            {label}:
        </span>
        <span className="text-gray-600 text-sm">{value}</span>
    </div>
);

export default AddAppointment;