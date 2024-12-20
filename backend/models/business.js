export const Business = (sequelize, Sequelize) => {
    const business = sequelize.define(
        "business",
        {
            business_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
        business.hasMany(models.availability, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
        });
        business.hasMany(models.conversation, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
        });
        business.belongsToMany(models.image, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
            through: "image_business"
        });
        // business.hasMany(models.review, {
        //     foreignKey: "business_id",
        //     onDelete: "RESTRICT",
        // });
        business.hasMany(models.service, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
        });
        business.belongsToMany(models.user, {
            foreignKey: "business_id",
            onDelete: "RESTRICT",
            through: "user_business",
            as: "business"
        });
    };

    return business;
};