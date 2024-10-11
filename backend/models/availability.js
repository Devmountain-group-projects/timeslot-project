export const Availability = (sequelize, Sequelize) => {
  const availability = sequelize.define(
    "availability",
    {
      availability_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      business_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      day_of_week: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      start_time: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      end_time: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  availability.associate = (models) => {
      availability.belongsTo(models.business, {
          foreignKey: "availability_id",
          onDelete: "RESTRICT",
          // through: "availability_business"
      });
  };
  return availability;
};
