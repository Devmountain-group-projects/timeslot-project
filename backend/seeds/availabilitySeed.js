const availability = [{
    // business_id: 1, // Need Foreign Key
    day_of_week: "Monday",
    start_time: "09:00",
    end_time: "17:00",
}]

export const createAvailability = async function createAvailability(db) {
    for (const appt of availability) {
        await db.availability
            .create({
                business_id: appt.business_id,
                day_of_week: appt.day_of_week,
                start_time: appt.start_time,
                end_time: appt.end_time,
            }
        );
    }
}