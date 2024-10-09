//
export const ProfileImage = (sequelize, Sequelize) => {
    return sequelize.define(
        "profile_image",
        {
            business_id: {
                type: Sequelize.INTEGER,
                allowNull: true, // Foreign key, must reference a valid businessId from Business model
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: true, // Foreign key, must reference a valid userId from User model
            },
            image_id: {
                type: Sequelize.INTEGER,
                allowNull: true, // Foreign key, must reference a valid imageId from Image model
            },
            is_primary: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {},
    );
};

