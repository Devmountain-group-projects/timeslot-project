
//
export const Image = (sequelize, Sequelize) => {
    const image = sequelize.define(
        "image",
        {
            imageId: {
                type: Sequelize.INTEGER,
                allowNull: false, // Foreign key, must reference a valid propertyId from Property model
                primaryKey: true,
                autoIncrement: true,
            },
            src: { // alias/mapped name
                field: "image_url", // db column
                type: Sequelize.STRING(500),
                allowNull: false,
            },
        },
        {},
    );

    image.associate = (models) => {
        image.belongsToMany(models.business, {
            through: "profile_image",
            foreignKey: "image_id",
        });
    };
    image.associate = (models) => {
        image.belongsToMany(models.user, {
            through: "profile_image",
            foreignKey: "image_id",
        });
    };

    return image;
};
