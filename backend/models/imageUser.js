export const ImageUser = (sequelize, Sequelize) => {
    return sequelize.define(
        "image_user",
        {
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user', // or models.User
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