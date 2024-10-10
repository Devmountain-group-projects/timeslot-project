export const Business = (sequelize, Sequelize) => {
    const business = sequelize.define(
        "business",
        {
            business_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            business_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address_line1: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address_line2: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            zip_code: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            website: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
    // Relations
    business.associate = (models) => {
        business.belongsToMany(models.user, {
            foreignKey: "user_id",
            onDelete: "RESTRICT",
            through: "user"
        });

        business.belongsToMany(models.service, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
            through: "service"
        });

        business.belongsToMany(models.availability, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
            through: "availability"
        });

        business.belongsToMany(models.image, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
            through: "image_business"
        });

        business.belongsToMany(models.appointment, {
            foreignKey: 'business_id',
            onDelete: "RESTRICT",
            through: "appointment"
        });
    };

    return business;
};
