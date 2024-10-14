export const Notification = (sequelize, Sequelize) => {
    const notification = sequelize.define(
        "notification",
        {
            notification_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'user_id',
                },
                onDelete: "RESTRICT",
            },
            appointment_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'appointment',
                    key: 'appointment_id',
                },
                onDelete: "RESTRICT",
            },
            message: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.ENUM("in-app", "email", "sms"),
                defaultValue: "in-app",
            },
            sent_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            status: {
                type: Sequelize.ENUM("pending", "sent", "failed"),
                defaultValue: "pending",
            },
        },
        {
            timestamps: true,
        }
    );

    // Relations
    notification.associate = (models) => {
        notification.belongsTo(models.user, {
            foreignKey: "user_id",
            onDelete: "RESTRICT",
        });

        notification.belongsTo(models.appointment, {
            foreignKey: "appointment_id",
            onDelete: "RESTRICT",
        });
    };

    return notification;
};