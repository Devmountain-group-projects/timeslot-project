export const Service = (sequelize, Sequelize) => {
  const service = sequelize.define(
    "service",
    {
      service_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      business_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  // Relations
  service.associate = (models) => {
    service.belongsTo(models.business, {
      foreignKey: "business_id",
      onDelete: "RESTRICT",
    });

    service.hasMany(models.appointment, {
        foreignKey: 'appointment_id',
        onDelete: "RESTRICT"
    })
  };

  return service;
};
