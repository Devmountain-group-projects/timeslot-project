export const Availability = (sequelize, Sequelize) => {
    const availability = sequelize.define(
        "availability",
        {
            availability_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            business_id: {
                type: Sequelize.INTEGER,
                allowNull: false, // Business ID is required
            },
            day_of_week: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            start_time: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            end_time: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: true,
        }
    );

    // Relations
    availability.associate = (models) => {
        availability.belongsTo(models.business, {
            foreignKey: "business_id",  // Correctly reference business_id
            onDelete: "RESTRICT",
        });
    };

    return availability;
};