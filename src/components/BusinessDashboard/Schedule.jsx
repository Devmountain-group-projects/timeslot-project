import React from 'react'
import { useLocation } from 'react-router-dom'
import { Scheduler } from "@aldabil/react-scheduler";

const Schedule = () => {
    const location = useLocation();
    const selectedDate = location.state?.selectedDate || new Date();

    // function validateEvent(events, newEvent) {
    //     for (const event of events) {
    //         if (newEvent.start < event.end && newEvent.end > event.start) {
    //             return false; // events overlap
    //         }
    //     }
    //     return true; // no overlap
    // }

    const events = [
        {
            event_id: 1,
            title: "Event 1",
            start: new Date(new Date().setHours(new Date().getHours())),
            end: new Date(new Date().setHours(new Date().getHours() + 1)),
        },
        // {
        //     event_id: 2,
        //     title: "Event 2",
        //     start: new Date(new Date().setHours(new Date().getHours())),
        //     end: new Date(new Date().setHours(new Date().getHours() + 1)),
        // },
    ];

    // const newEvent = {
    //     event_id: 3,
    //     title: "Event 3",
    //     start: new Date(new Date().setHours(new Date().getHours() + 2)),
    //     end: new Date(new Date().setHours(new Date().getHours() + 3)),
    // };
    //
    // if (validateEvent(events, newEvent)) {
    //     events.push(newEvent);
    // } else {
    //     console.log("Event time frames overlap");
    // }

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex-none flex justify-between items-center py-2 px-3 bg-tertiary">
                <h2 className="text-lg md:text-xl font-medium">Schedule</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-hidden">
                <div className="h-full overflow-y-auto">
                    <Scheduler
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
                        }}
                        fields={[
                            {
                                name: "client",
                                type: "input",
                                default: "",
                                config: { label: "Client Name", required: true, min: 3, variant: "outlined" }
                            },
                            {
                                name: "service",
                                type: "select",
                                default: "",
                                options: [
                                    { id: 1, text: "Haircut", value: "Haircut" },
                                    { id: 2, text: "Coloring", value: "Coloring" },
                                    { id: 3, text: "Styling", value: "Styling" },
                                ],
                                config: { label: "Service Type", required: true, variant: "outlined" }
                            }
                        ]}
                        hourFormat="24"
                    />
                </div>
            </section>
        </div>
    )
}

export default Schedule