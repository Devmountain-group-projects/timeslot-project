export const Appointment = (sequelize, Sequelize) => {
    const appointment = sequelize.define(
        "appointment",
        {
            appointment_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "user",
                    key: "user_id",
                },
                onDelete: "RESTRICT",
            },
            service_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "service",
                    key: "service_id",
                },
                onDelete: "RESTRICT",
            },
            appointment_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            appointment_start: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            appointment_end: {
                type: Sequelize.TIME,
                allowNull: false,
            },
            status: {
                type: Sequelize.ENUM("Pending", "Confirmed", "Scheduled", "Completed"),
                defaultValue: "Pending",
                allowNull: false,
            },
            notes: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_id_created: {
                type: Sequelize.INTEGER,
                references: {
                    model: "user",
                    key: "user_id",
                },
                onDelete: "RESTRICT",
            },
            payment_status: {
                type: Sequelize.ENUM("Pending", "Paid", "Overdue"),
                defaultValue: "Pending",
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );

    // Relations
    appointment.associate = (models) => {
        // Appointment belongs to user
        appointment.belongsTo(models.user, {
            foreignKey: "user_id_created",
            onDelete: "RESTRICT",
        });
        appointment.belongsTo(models.user, {
            foreignKey: "user_id",
            onDelete: "RESTRICT",
        });
        // Appointment belongs to service
        appointment.belongsTo(models.service, {
            foreignKey: "service_id",
            onDelete: "RESTRICT",
        });
    };

    return appointment;
};
