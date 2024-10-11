export const UserBusiness = (sequelize, Sequelize) => {
    return sequelize.define(
        "user_business",
        {
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            business_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {},
    );
};


