export const Role = (sequelize, Sequelize) => {
    const role = sequelize.define(
        "role",
        {
            role_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            role_name: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {}
    );

    role.associate = (models) => {
        // Many-to-many relationship between roles and permissions
        role.belongsToMany(models.permission, {
            through: "role_permission",
            foreignKey: "role_id",
            otherKey: "permission_id",
        });
    };

    return role;
};