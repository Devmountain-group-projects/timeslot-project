import React from 'react';
import { Scheduler } from "@aldabil/react-scheduler";

const SharedScheduler = ({ isOverview = false }) => {
    const events = [
        {
            event_id: 1,
            title: "Event 1",
            start: new Date(new Date().setHours(new Date().getHours() - 3)),
            end: new Date(new Date().setHours(new Date().getHours() + 3)),
        },
        {
            event_id: 2,
            title: "Event 2",
            start: new Date(new Date().setHours(new Date().getHours() - 2)),
            end: new Date(new Date().setHours(new Date().getHours() + 2)),
        },
    ];

    return (
        <Scheduler
            events={events}
            view="month"
            week={{
                weekDays: [0, 1, 2, 3, 4, 5],
                weekStartOn: 1,
                startHour: 9,
                endHour: 17,
            }}
            day={{
                startHour: 9,
                endHour: 17,
            }}
            month={{
                weekDays: [0, 1, 2, 3, 4, 5],
                weekStartOn: 1,
            }}
            viewerExtraComponent={(fields, event) => {
                return (
                    <div>
                        {/* Add any extra fields you want to display in the event viewer */}
                    </div>
                );
            }}
            fields={[
                {
                    name: "client",
                    type: "input",
                    default: "No Client",
                    config: { label: "Client Name", required: true, min: 3, variant: "outlined" }
                },
                {
                    name: "service",
                    type: "select",
                    default: "Haircut",
                    options: [
                        { id: 1, text: "Haircut", value: "Haircut" },
                        { id: 2, text: "Coloring", value: "Coloring" },
                        { id: 3, text: "Styling", value: "Styling" },
                    ],
                    config: { label: "Service Type", required: true, variant: "outlined" }
                }
            ]}
            resourceFields={[
                {
                    name: "stylist",
                    type: "select",
                    default: "John",
                    options: [
                        { id: 1, text: "John", value: "John" },
                        { id: 2, text: "Sarah", value: "Sarah" },
                        { id: 3, text: "Emma", value: "Emma" },
                    ],
                    config: { label: "Stylist", required: true, variant: "outlined" }
                }
            ]}
            resourceViewMode="tabs"
            height={isOverview ? 400 : 700}
        />
    );
}

export default SharedScheduler;