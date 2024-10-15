const permissions = [
    {permission_name: "read"},
    {permission_name: "create"},
    {permission_name: "manage"},
];

export const createPermissions = async function createPermissions(db) {
    for (const permission of permissions) {
        await db.permission.create({
            permission_name: permission.permission_name,
        });
    }
};