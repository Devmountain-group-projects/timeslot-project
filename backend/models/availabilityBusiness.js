export const AvailabilityBusiness = (sequelize, Sequelize) => {
    return sequelize.define(
        "availability_business",
        {
            availability_id: {
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