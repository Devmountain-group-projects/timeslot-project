
//
export const Permission = (sequelize, Sequelize) => {
    //
    const permission = sequelize.define(
        "permission",
        {
            permission_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true, // Defines permissionId as the primary key
            },
            permission_name: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {},
    );
    permission.associate = (models) => {
        permission.belongsToMany(models.role, {
            through: "role_permission",
            foreignKey: "permission_id",
        });
    };
    return permission;
};

//INSERT INTO "permission" ("permissionId", "permissionName")
// VALUES (3, 'test');
