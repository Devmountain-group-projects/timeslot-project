export const Role = (sequelize, Sequelize) => {
    const role = sequelize.define(
        "role",
        {
            role_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,  // Ensure auto-increment is enabled
                primaryKey: true,     // Set as primary key
            },
            role_name: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {}
    );

    role.associate = (models) => {
        role.belongsToMany(models.permission, {
            through: "role_permission",
            foreignKey: "role_id",
        });
    };

    return role;
};