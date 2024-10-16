import { useState, useEffect } from 'react';
import { TextField, Button, DialogActions } from "@mui/material";
import { SchedulerHelpers } from "@aldabil/react-scheduler/types";
import React from 'react';

interface CustomEditorProps {
    scheduler: SchedulerHelpers;
}

const SchedulerForm = ({ scheduler }: CustomEditorProps) => {
    const event = scheduler.edited;

    // Logic for setting default start and end times to the selected block from the scheduler
    const defaultStart = event?.start || scheduler.start || new Date();
    const defaultEnd = event?.end || scheduler.end || new Date(new Date().setHours(new Date().getHours() + 1));

    const [state, setState] = useState({
        user: event?.user || "",
        notes: event?.notes || "",
        start: defaultStart.toISOString().slice(0, 16), // Format for datetime-local input
        end: defaultEnd.toISOString().slice(0, 16), // Format for datetime-local input
        status: event?.status || "",
        payment_status: event?.payment_status || "",
    });

    // Use effect to update form fields when a date/time block is clicked on the scheduler
    useEffect(() => {
        if (scheduler.start) {
            setState((prevState) => ({
                ...prevState,
                start: scheduler.start.toISOString().slice(0, 16), // No timezone adjustment, direct from scheduler
                end: (scheduler.end || new Date(new Date(scheduler.start).setHours(new Date(scheduler.start).getHours() + 1))).toISOString().slice(0, 16), // Default to 1 hour duration if no end
            }));
        }
    }, [scheduler.start, scheduler.end]);

    const handleChange = (value: string, name: string) => {
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            scheduler.loading(true);

            // Overwrite the start and end times with the form's values
            const added_updated_event = {
                ...event,
                event_id: event?.event_id || Math.random(), // Generate random ID if event_id is not present
                user: state.user,
                notes: state.notes,
                start: new Date(state.start),
                end: new Date(state.end),
                status: state.status,
                payment_status: state.payment_status,
            };

            scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
            scheduler.close();
        } finally {
            scheduler.loading(false);
        }
    };

    return (
        <div>
            <div style={{ padding: "1rem" }}>
                <TextField
                    label="User"
                    value={state.user}
                    onChange={(e) => handleChange(e.target.value, "user")}
                    fullWidth
                />
                <TextField
                    label="Notes"
                    value={state.notes}
                    onChange={(e) => handleChange(e.target.value, "notes")}
                    fullWidth
                />
                <TextField
                    label="Start Time"
                    type="datetime-local"
                    value={state.start}
                    onChange={(e) => handleChange(e.target.value, "start")}
                />
                <TextField
                    label="End Time"
                    type="datetime-local"
                    value={state.end}
                    onChange={(e) => handleChange(e.target.value, "end")}
                />
                <TextField
                    label="Status"
                    value={state.status}
                    onChange={(e) => handleChange(e.target.value, "status")}
                    fullWidth
                />
                <TextField
                    label="Payment Status"
                    value={state.payment_status}
                    onChange={(e) => handleChange(e.target.value, "payment_status")}
                    fullWidth
                />
            </div>
            <DialogActions>
                <Button onClick={scheduler.close}>Cancel</Button>
                <Button onClick={handleSubmit}>Confirm</Button>
            </DialogActions>
        </div>
    );
};

export default SchedulerForm;