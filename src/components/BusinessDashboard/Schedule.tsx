import { useLocation } from 'react-router-dom';
import { Scheduler } from "@aldabil/react-scheduler";
import React from 'react';
import SchedulerForm from './SchedulerForm';

const Schedule = () => {
    const location = useLocation();
    const selectedDate = location.state?.selectedDate || new Date();


    const events = [
        {
            event_id: 1,
            name: "Event 1",
            start: new Date(new Date().setHours(new Date().getHours())),
            end: new Date(new Date().setHours(new Date().getHours() + 1)),
        },
    ];

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
                                    <p>Name: {event.user}</p>
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