export const Notification = (sequelize, Sequelize) => {
    const notification = sequelize.define(
        "notification", {
            notification_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            appointment_id: {
                type: Sequelize.INTEGER,
            },
            message: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.ENUM('email', 'SMS', 'in-app'),
                allowNull: false
            },
            sent_at: {
                type: Sequelize.STRING,
                allowNull: false
            },
            status: {
                type: Sequelize.ENUM('sent', 'pending', 'failed', 'unread'),
                defaultValue: 'pending',
                allowNull: false
            }
        }, 
        {
            timestamps: true,
        }
    )
    // Relations

    return notification
}