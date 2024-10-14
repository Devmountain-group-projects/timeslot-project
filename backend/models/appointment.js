export const Appointment = (sequelize, Sequelize) => {
    const appointment = sequelize.define(
        "appointment",
        {
            appointment_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            service_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'service',
                    key: 'service_id',
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
                type: Sequelize.ENUM(
                    "pending",
                    "confirmed",
                    "completed",
                    "cancelled",
                    "test"
                ),
                defaultValue: "pending",
                allowNull: false,
            },
            notes: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            payment_status: {
                type: Sequelize.ENUM("sent", "pending", "failed", "test"),
                defaultValue: "pending",
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );

    // Relations
    appointment.associate = (models) => {
        // Appointment belongs to service
        appointment.belongsTo(models.service, {
            foreignKey: "service_id",
            onDelete: "RESTRICT",
        });

        // Appointment has many notifications (users are notified about this appointment)
        appointment.hasMany(models.notification, {
            foreignKey: "appointment_id",
            onDelete: "RESTRICT",
        });
    };

    return appointment;
};