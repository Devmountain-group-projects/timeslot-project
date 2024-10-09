//
const permissions = [
    {
        // permissionId: 1,
        permission_name: "read",
    },
    {
        // permissionId: 2,
        permission_name: "create",
    },
    {
        permission_name: "manage"
    }
];

export const createPermissions = async function createPermissions(db) {
    for (const permission of permissions) {
        await db.permission
            .create({
                    permission_id: permission.permission_id,
                    permission_name: permission.permission_name
                }
            )
    }
}