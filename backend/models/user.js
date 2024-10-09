export const User = (sequelize, Sequelize) => {
    const user = sequelize.define(
        "user",
        {
            user_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            role: {
                type: Sequelize.STRING,
                defaultValue: "client",
                allowNull: false,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profile_picture: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
    // Relations
    user.associate = (models) => {
        user.belongsToMany(models.business, {
            foreignKey: "user_id",
            onDelete: "RESTRICT",
            through: "business"
        });

        user.hasMany(models.notification, {
            foreignKey: "notification_id",
            onDelete: "RESTRICT",
        });

        user.hasMany(models.appointment, {
            foreignKey: "appointment_id",
            onDelete: "RESTRICT",
        });

        user.belongsToMany(models.image, {
            foreignKey: "user_id",
            onDelete: "RESTRICT",
            through: "image_user",
        });
    };

    return user;
};
