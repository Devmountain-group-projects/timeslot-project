import { useLocation } from 'react-router-dom';
import { Scheduler } from "@aldabil/react-scheduler";
import React from 'react';
import SchedulerForm from './SchedulerForm';
import { useState, useEffect } from 'react';
import { useAppointment } from "../../context/ApptContext.jsx";
// timeslot-project\src\context\ApptContext.jsx

const Schedule = () => {
    const { fetchClients, fetchAppointments, fetchAppointmentsByUser, fetchServices, appointments, isAppointmentsLoaded } = useAppointment();
    const [newAppointments, setNewAppointments] = useState(appointments)
    const [gotData, setGotData] = useState(false)
    const location = useLocation();
    const selectedDate = location.state?.selectedDate || new Date();
    let temp = 1
    const [events, setEvents] = useState([
        {
            event_id: 1,
            name: "Event 1",
            notes: 'Testing',
            status: "confirmed",
            payment_status: "pending",
            start: new Date(new Date().setHours(new Date().getHours())),
            end: new Date(new Date().setHours(new Date().getHours() + 1)),
        },
    ]);

    useEffect(() => {
        // fetchClients();
        fetchServices();
        // fetchAppointments();
        getAppointments()
        console.log("useEffect")
    }, []);

    const getAppointments = () => {
        fetchAppointments();
        console.log(isAppointmentsLoaded)
        if(gotData === false && appointments) {
            console.log("#####Start of get appointments#####")
            let startEvent = true
            console.log("appointments", appointments)
            appointments.map((appt) => {
                setEvents(events)
                const date = new Date(appt.appointment_date).getDate()
                const startHour = (appt.appointment_start).substring(0,2)
                const startMin = (appt.appointment_start).substring(3,5)
                const endHour = (appt.appointment_end).substring(0,2)
                const endMin = (appt.appointment_end).substring(3,5)
                console.log("startEvent", startEvent)
                console.log("appt", appt)
                console.log("appt", appt.service.name)
                if (startEvent) {
                    setEvents([{
                        event_id: appt.appointment_id,
                        name: appt.service.name,
                        notes: appt.notes,
                        status: appt.status,
                        payment_status: appt.payment_status,
                        start: new Date(new Date(new Date(new Date().setMinutes(startMin)).setHours(startHour)).setDate(date)),
                        end: new Date(new Date(new Date(new Date().setMinutes(endMin)).setHours(endHour)).setDate(date)),
                    }])
                    startEvent = false
                    console.log("First Event: ", events)
                } else {
                // console.log(new Date(new Date(new Date(new Date().setMinutes(startMin)).setHours(startHour)).setDate(date)))
                // console.log(new Date(new Date(new Date(new Date().setMinutes(endMin)).setHours(endHour)).setDate(date)))
                console.log("What appr is this", appt.appointment_id)
                events.push({
                    event_id: appt.appointment_id,
                    name: appt.service.name,
                    notes: appt.notes,
                    status: appt.status,
                    payment_status: appt.payment_status,
                    start: new Date(new Date(new Date(new Date().setMinutes(startMin)).setHours(startHour)).setDate(date)),
                    end: new Date(new Date(new Date(new Date().setMinutes(startMin)).setHours(endHour)).setDate(date)),
                })
                console.log("added new event: ", events)
            }
            })
            // console.log("appointments", appointments)
            // console.log("appointments[0]", appointments[0])
            // setNewAppointments(appointments)
            // console.log("newAppointments", newAppointments)
            // const date = new Date(appointments[0].appointment_date).getDate()
            // const startHour = (appointments[0].appointment_start).substring(0,2)
            // const startMin = (appointments[0].appointment_start).substring(3,5)
            // const endHour = (appointments[0].appointment_end).substring(0,2)
            // const endMin = (appointments[0].appointment_end).substring(3,5)
            // console.log(new Date(new Date(new Date(new Date().setMinutes(startMin)).setHours(startHour)).setDate(date)))
            // console.log(new Date(new Date(new Date(new Date().setMinutes(endMin)).setHours(endHour)).setDate(date)))
            
            console.log("EVENTS: ", events)
            // setGotData(true)

            // appointments.map((appt) => {
            //     console.log(appt)
                // setEvents({
                //     event_id: appt.appointment_id,
                //     name: appt.service.name,
                //     tart: new Date(new Date().setHours(new Date().getHours() + 1)),
                //     end: new Date(new Date().setHours(new Date().getHours() + 2)),
                // })
            // })
        }
        
    }

    // @ts-ignore
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex-none flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-lg md:text-xl font-medium">Schedule</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-hidden">
                <div className="h-full overflow-y-auto">
                    <Scheduler
                        customEditor={(scheduler) => <SchedulerForm scheduler={scheduler} />}
                        viewerExtraComponent={(fields, event) => {
                            return (
                                <div>
                                    <p>Name: {event.name}</p>
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
                            weekDays: [0, 1, 2, 3, 4, 5],
                            weekStartOn: 1,
                            startHour: 9,
                            endHour: 22,
                            step: 60,
                        }}
                        day={{
                            startHour: 9,
                            endHour: 22,
                            step: 60,
                        }}
                        month={{
                            weekDays: [0, 1, 2, 3, 4, 5],
                            weekStartOn: 1,
                            startHour: 9,
                            endHour: 22,

                        }}
                        hourFormat="12"
                    />
                </div>
            </section>
        </div>
    )
}
export default Schedule;