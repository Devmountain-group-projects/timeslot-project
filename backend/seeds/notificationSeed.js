const notification = [
    {
        user_id: 1,
        appointment_id: 1,
        message: "test",
        type: "test",
        sent_at: "2022-01-01",
        status: "unread",
    }
]

export const createNotifications = async function createNotifications(db) {
    for (const notif of notification) {
        await db.notification
            .create({
                user_id: notif.user_id,
                appointment_id: notif.appointment_id,
                message: notif.message,
                type: notif.type,
                sent_at: notif.sent_at,
                status: notif.status,
            }
        );
    }
}