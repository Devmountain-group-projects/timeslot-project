import { useState, useEffect } from "react";
import { Box, TextField, Button, DialogActions } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SchedulerHelpers } from "@aldabil/react-scheduler/types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import React from "react";
import dayjs from "dayjs";

interface CustomEditorProps {
    scheduler: SchedulerHelpers;
}

const SchedulerForm = ({ scheduler }: CustomEditorProps) => {
    const event = scheduler.edited;

    // Logic for setting default start and end times to the selected block from the scheduler
    const defaultStart = event?.start || scheduler.start || new Date();
    const defaultEnd =
        event?.end ||
        scheduler.end ||
        new Date(new Date().setHours(new Date().getHours() + 1));

    const [state, setState] = useState({
        user: event?.name || "",
        notes: event?.notes || "",
        start: defaultStart.toISOString().slice(0, 16), // Format for datetime-local input
        end: defaultEnd.toISOString().slice(0, 16), // Format for datetime-local input
        status: event?.status || "",
        payment_status: event?.payment_status || "",
    });

    // Use effect to update form fields when a date/time block is clicked on the scheduler
    useEffect(() => {
        const dateStart = scheduler.state.start.value;
        const dateEnd = scheduler.state.end.value;

        setState((prevState) => ({
            ...prevState,
            start: dateStart,
            end: dateEnd,
        }));
    }, [scheduler.state.start, scheduler.state.end]);

    const handleChange = (value: dayjs.Dayjs, name: string) => {
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
        <Grid container spacing={2} margin={3} maxWidth="sm">
            <Grid size={12}>
                <h2 className="text-xl">Add Appointment</h2>
            </Grid>
            <Grid size={12}>
                <TextField
                    label="User"
                    value={state.user}
                    onChange={(e) => handleChange(e.target.value, "name")}
                    disabled={true}
                    fullWidth
                />
            </Grid>
            <Grid size={12}>
                <TextField
                    label="Notes"
                    value={state.notes}
                    onChange={(e) => handleChange(e.target.value, "notes")}
                    fullWidth
                />
            </Grid>
            <Grid size={6} alignContent="right">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Start Date/Time"
                        value={dayjs(state.start)}
                        onChange={(newValue) => handleChange(newValue, "start")}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid size={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="End Date/Time"
                        value={dayjs(state.end)}
                        onChange={(newValue) => handleChange(newValue, "end")}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid size={12}>
                <TextField
                    label="Status"
                    value={state.status}
                    onChange={(e) => handleChange(e.target.value, "status")}
                    fullWidth
                />
            </Grid>
            <Grid size={12}>
                <TextField
                    label="Payment Status"
                    value={state.payment_status}
                    onChange={(e) => handleChange(e.target.value, "payment_status")}
                    fullWidth
                />
            </Grid>

            <DialogActions>
                <Button onClick={scheduler.close}>Cancel</Button>
                <Button onClick={handleSubmit}>Confirm</Button>
            </DialogActions>
        </Grid>
    );
};

export default SchedulerForm;
