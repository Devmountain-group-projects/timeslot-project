import { useLocation } from "react-router-dom";
import { Scheduler } from "@aldabil/react-scheduler";
import React, { useRef } from "react";
import SchedulerForm from "./SchedulerForm";
import { useState, useEffect } from "react";
import { useAppointment } from "../../context/ApptContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Button } from "@mui/material";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

const Schedule = () => {
    const { fetchAppointments, appointments, isAppointmentsLoaded } =
        useAppointment();
    const location = useLocation();
    const selectedDate = location.state?.selectedDate || new Date();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getAppointments = async () => {
            const response = await fetchAppointments();
            const appts = await response;

            let appointmentList: React.SetStateAction<any[]> = [];

            appts.forEach(
                (appt: {
                    appointment_date: string | number | Date | dayjs.Dayjs;
                    appointment_id: any;
                    user: { name: any };
                    notes: any;
                    status: any;
                    payment_status: any;
                    appointment_start: any;
                    appointment_end: any;
                }) => {
                    const apptDate = dayjs.tz(appt.appointment_date).format("YYYY-MM-DD");

                    appointmentList.push({
                        event_id: appt.appointment_id,
                        title: appt.user.name,
                        notes: appt.notes,
                        status: appt.status,
                        payment_status: appt.payment_status,
                        start: new Date(`${apptDate} ${appt.appointment_start}`),
                        end: new Date(`${apptDate} ${appt.appointment_end}`),
                        editable: false,
                        deletable: false,
                        draggable: false,
                    });
                },
            );

            setEvents(appointmentList);
        };

        getAppointments();
    }, []);

    // @ts-ignore
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex-none flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-lg md:text-xl font-medium">Schedule</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow overflow-hidden">
                <div className="h-full overflow-y-auto">
                    <Scheduler
                        customEditor={(scheduler) => (
                            <SchedulerForm scheduler={scheduler} />
                        )}
                        viewerExtraComponent={(fields, event) => {
                            return (
                                <div>
                                    <p>Notes: {event.notes}</p>
                                    <p>Status: {event.status}</p>
                                    <p>Payment Status: {event.payment_status}</p>
                                </div>
                            );
                        }}
                        events={events}
                        view="week"
                        selectedDate={selectedDate}
                        week={{
                            weekDays: [0, 1, 2, 3, 4, 5, 6],
                            weekStartOn: 1,
                            startHour: 9,
                            endHour: 22,
                            step: 60,
                            cellRenderer: ({ height, start, onClick, ...props }) => {
                                return (
                                    <Button
                                        onClick={() => {
                                            return false;
                                        }}
                                        {...props}
                                    ></Button>
                                );
                            },
                        }}
                        day={{
                            startHour: 9,
                            endHour: 22,
                            step: 60,
                        }}
                        month={{
                            weekDays: [0, 1, 2, 3, 4, 5, 6],
                            weekStartOn: 1,
                            startHour: 9,
                            endHour: 22,
                        }}
                        hourFormat="12"
                    />
                </div>
            </section>
        </div>
    );
};
export default Schedule;
