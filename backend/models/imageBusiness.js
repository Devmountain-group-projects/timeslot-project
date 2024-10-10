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
            is_primary: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        },
        {}
    );
};