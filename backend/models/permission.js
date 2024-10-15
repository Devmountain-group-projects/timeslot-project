export const Permission = (sequelize, Sequelize) => {
    const permission = sequelize.define(
        "permission",
        {
            permission_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            permission_name: {
                type: Sequelize.STRING(35),
                allowNull: false,
            },
        },
        {}
    );

    permission.associate = (models) => {
        // Many-to-many relationship between permissions and roles
        permission.belongsToMany(models.role, {
            through: "role_permission",
            foreignKey: "permission_id",
            otherKey: "role_id",
        });
    };

    return permission;
};