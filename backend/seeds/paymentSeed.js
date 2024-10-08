const payment = [{
    appointment_id: 1,
    amount: 100,
    payment_method: "test",
    status: "pending",
    payment_date: "2022-01-01",
}]

export const createPayment = async function createPayment(db) {
    for (const pay of payment) {
        await db.payment
            .create({
                appointment_id: pay.appointment_id,
                amount: pay.amount,
                payment_method: pay.payment_method,
                status: pay.status,
                payment_date: pay.payment_date,
            }
        );
    }
}