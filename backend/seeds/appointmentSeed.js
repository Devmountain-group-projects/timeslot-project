const appointment = [
    {
    //     service_id: 1, // Need Foreign Key
    //     business_id: 1, // Need Foreign Key
    //     user_id: 1, // Need Foreign Key
        appointment_date: "2022-01-01",
        appointment_start: "09:00",
        appointment_end: "10:00",
        status: "pending",
        notes: "test",
        payment_status: "pending",
    }
]

export const createAppointments = async function createAppointments(db) {
    for (const appt of appointment) {
        await db.appointment
            .create({
                service_id: appt.service_id,
                business_id: appt.business_id,
                user_id: appt.user_id,
                appointment_date: appt.appointment_date,
                appointment_start: appt.appointment_start,
                appointment_end: appt.appointment_end,
                status: appt.status,
                notes: appt.notes,
                payment_status: appt.payment_status,
            }
        );
    }
}