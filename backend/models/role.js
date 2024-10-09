//
export const Role = (sequelize, Sequelize) => {
    const role = sequelize.define(
        "role",
        {
            role_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true, // Enables auto-increment
                primaryKey: true,
            },
            role_name: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {},
    );

    role.associate = (models) => {
        role.belongsToMany(models.permission, {
            through: "role_permission",
            foreignKey: "role_id",
        });
    };

    return role;
};

//INSERT INTO "role" ("roleId", "roleName")
// VALUES (3, 'test');
