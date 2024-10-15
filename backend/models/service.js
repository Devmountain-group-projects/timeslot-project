export const Service = (sequelize, Sequelize) => {
    const service = sequelize.define(
        "service",
        {
            service_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            business_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'business',
                    key: 'business_id'
                },
                onDelete: "RESTRICT",
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
            },
            duration: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );

    service.associate = (models) => {
        // Service has many appointments
        service.hasMany(models.appointment, {
            foreignKey: 'service_id',  // Link to appointment table via service_id
            onDelete: "RESTRICT"
        });
        // Service belongs to a business
        service.belongsTo(models.business, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
        });
    };

    return service;
};