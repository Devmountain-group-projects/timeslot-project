const roles = [
    {
        role_name: "admin",  // role_id will be auto-incremented
    },
    {
        role_name: "client",  // This will be assigned role_id: 2
    },
    {
        role_name: "test",    // role_id: 3
    },
];

export const createRoles = async function createRoles(db) {
    for (const role of roles) {
        await db.role.create({
            role_name: role.role_name,
        });
    }
};