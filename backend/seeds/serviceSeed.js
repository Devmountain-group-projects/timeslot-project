const service = [ {
    business_id: 1, // Need Foreign Key
    name: "Haircut",
    description: "A haircut",
    duration: 30,
    price: 50,
}]


export const createServices = async function createServices(db) {
    for (const svc of service) {
        await db.service
            .create({
                business_id: svc.business_id,
                name: svc.name,
                description: svc.description,
                duration: svc.duration,
                price: svc.price,
            }
        );
    }
}