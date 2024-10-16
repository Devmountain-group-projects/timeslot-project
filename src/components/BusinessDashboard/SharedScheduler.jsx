import React from 'react';
import { Scheduler } from "@aldabil/react-scheduler";
import { useNavigate } from 'react-router-dom';

const SharedScheduler = ({ isOverview = false, selectedDate }) => {
    const navigate = useNavigate();

    const handleNavigation = (date) => {
        if (isOverview) {
            navigate('/dashboard', { state: { selectedDate: date, view: 'calendar' } });
        }
    };

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

    const commonProps = {
        events: events,
        onCellClick: handleNavigation,
        selectedDate: selectedDate,
        week: {
            weekDays: [0, 1, 2, 3, 4, 5],
            weekStartOn: 1,
            startHour: 9,
            endHour: 22,
        },
        day: {
            startHour: 9,
            endHour: 22,
        },
    };

    if (isOverview) {
        return (
            <div className="w-[98%] mx-auto calendar-overview">
                <style>]
                    {`
                    .calendar-overview .rs__cell {
                        font-size: .75rem !important;
                    }
                    .calendar-overview .rs__event {
                        font-size: .75rem !important;
                    }
                    .calendar-overview .rs__cell--day {
                        font-size: .75rem !important;
                    }
                    .calendar-overview .rs__more_popup {
                        font-size: .75rem !important;
                    }
                    `}
                </style>
                <Scheduler
                    {...commonProps}
                    view="month"
                    height={300}
                    month={{
                        weekDays: [0, 1, 2, 3, 4, 5],
                        weekStartOn: 1,
                        navigation: false,
                        disableGoToDay: true,
                    }}
                    navigationPickerProps={{
                        showToolbar: false,
                        showTabs: false,
                        views: ['month'],
                    }}
                    viewerExtraComponent={() => null}
                    customViewer={() => null}
                    fields={[]}
                    draggable={false}
                    editable={false}
                    deletable={false}
                />
            </div>
        );
    } else {
        return (
            <Scheduler
                {...commonProps}
                view="week"
                height={700}
                month={{
                    weekDays: [0, 1, 2, 3, 4, 5],
                    weekStartOn: 1,
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
            />
        );
    }
}

export default SharedScheduler;