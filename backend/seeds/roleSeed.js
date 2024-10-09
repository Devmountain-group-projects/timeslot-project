const roles = [
    {
        role_id: 1,
        role_name: "user",
        role_permission: {
            role_id: 1,
            permission_id: 1,
        },
    },
    {
        role_id: 2,
        role_name: "business",
        role_permission: {
            role_id: 2,
            permission_id: 2,
        },
    },
];

export const createRoles = async function createRoles(db) {
    for (const role of roles) {
        await db.role
            .create({
                role_id: role.role_id,
                role_name: role.role_name,
            })
            .then(async (newRole) => {
                const permission = role.role_permission;
                await db.role_permission.create({
                    role_id: newRole.role_id,
                    permission_id: permission.permission_id,
                });
            });
    }
};
