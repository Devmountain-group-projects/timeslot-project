export const ImageBusiness = (sequelize, Sequelize) => {
    return sequelize.define(
        "image_business",
        {
            business_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'business', // or models.Business
                    key: 'id',
                },
            },
            image_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'images', // or models.Image
                    key: 'image_id',
                },
            },
            image_type: {
                type: Sequelize.ENUM('business_profile', 'business_banner'),
                allowNull: false,
            },
        },
        {}
    );
};