export const Image = (sequelize, Sequelize) => {
    const image = sequelize.define(
        "image",
        {
            image_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            src: {
                field: "image_url", // db column
                type: Sequelize.STRING(500),
                allowNull: false,
            },
        },
        {},
    );

    image.associate = (models) => {
        // Associate image with business through 'business_image' table
        image.belongsToMany(models.business, {
            through: "image_business",
            foreignKey: "image_id",
        });

        // Associate image with user through 'user_image' table
        image.belongsToMany(models.user, {
            through: "image_user",
            foreignKey: "image_id",
        });
    };

    return image;
};