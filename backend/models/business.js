export const Business = (sequelize, Sequelize) => {
    const business = sequelize.define(
        "business", {
            business_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            business_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            website: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }, 
        {
            timestamps: true,
        }
    )
    // Relations

    return business
}