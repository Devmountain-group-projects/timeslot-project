const roles = [
    {role_name: "client", permissions: [1]},    // Assuming permission_id 1 exists
    {role_name: "business", permissions: [2]},  // Assuming permission_id 1 and 2 exist
    {role_name: "manager", permissions: [3]} // Assuming permission_id 1 and 3 exist
];

export const createRoles = async function createRoles(db) {
    for (const role of roles) {
        const newRole = await db.role.create({
            role_name: role.role_name,
        });

        // Assign permissions to the role
        for (const permission_id of role.permissions) {
            await db.role_permission.create({
                role_id: newRole.role_id,
                permission_id: permission_id,  // Assuming these permission_ids exist
            });
        }
    }
};