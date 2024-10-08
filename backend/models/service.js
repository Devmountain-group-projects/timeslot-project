export const Service = (sequelize, Sequelize) => {
    const service = sequelize.define(
      "service", {
        
        service_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        business_id: {
          type: Sequelize.INTEGER
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
          type: Sequelize.DECIMAL(10,2),
          allowNull: false,
        }
      },
      {
        timestamps: true,
      }
    )
    // Relations
  
    return service
  }