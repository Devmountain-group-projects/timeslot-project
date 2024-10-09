//
export const RolePermission = (sequelize, Sequelize) => {
    //
    return sequelize.define(
        "role_permission",
        {
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            permission_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {},
    );
};
