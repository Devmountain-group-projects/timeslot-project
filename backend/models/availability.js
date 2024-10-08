export const Availability = (sequelize, Sequelize) => {
    const availability = sequelize.define(
      "availability", {
        availability_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        business_id: {
          type: Sequelize.INTEGER
        },
        day_of_week: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        start_time: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        end_time: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
      {
        timestamps: true,
      }
    )
    // Relations
  
    return availability
  }