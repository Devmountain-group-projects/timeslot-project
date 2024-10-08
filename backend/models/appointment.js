export const Appointment = (sequelize, Sequelize) => {
    const appointment = sequelize.define(
      "appointment", {
        appointment_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        service_id: {
          type: Sequelize.INTEGER
        },
        business_id: {
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        appointment_date: {
          type: Sequelize.TIMESTAMP,
          allowNull: false,
        },
        appointment_start: {
          type: Sequelize.TIMESTAMP,
          allowNull: false,
        },
        appointment_end: {
          type: Sequelize.TIMESTAMP,
          allowNull: false,
        },
        status: {
            type: Sequelize.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
            defaultValue: 'pending',
            allowNull: false
        },
        notes: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        payment_status: {
            type: Sequelize.ENUM('sent', 'pending', 'failed'),
            defaultValue: 'pending',
            allowNull: false
        }
      },
      {
        timestamps: true,
      }
    )
    // Relations
  
    return appointment
  }