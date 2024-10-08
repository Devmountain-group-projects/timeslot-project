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
      },
      business_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
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
    appointment.hasMany(models.notification, {
      foreignKey: "appointment_id",
      onDelete: "RESTRICT",
    });

    appointment.belongsTo(models.service, {
      foreignKey: "service_id",
      onDelete: "RESTRICT",
    });

    appointment.belongsTo(models.business, {
      foreignKey: "business_id",
      onDelete: "RESTRICT",
    });

    appointment.belongsTo(models.user, {
      foreignKey: "user_id",
      onDelete: "RESTRICT",
    });
  };

  return appointment;
};
