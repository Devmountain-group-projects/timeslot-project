// import { Model, DataTypes } from "sequelize";

// class User extends Model {
//   static init(sequelize) {
//     return super.init(
//       {
//         id: {
//           type: DataTypes.UUID,
//           defaultValue: DataTypes.UUIDV4,
//           primaryKey: true,
//         },
//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
//         email: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           unique: true,
//         },
//         phone: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
//         role: {
//           type: DataTypes.STRING,
//           defaultValue: "client",
//           allowNull: false,
//         },
//         password_hash: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
//         profile_picture: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
//         created_at: {
//           type: DataTypes.TIMESTAMP,
//           defaultValue: CURRENT_TIMESTAMP(),
//           allowNull: false,
//         },
//         updated_at: {
//           type: DataTypes.TIMESTAMP,
//           defaultValue: CURRENT_TIMESTAMP(),
//           allowNull: false,
//         },
//       },
//       {
//         sequelize,
//         modelName: "Users",
//       }
//     );
//   }

//   static associate(model) {
//     this.hasMany(model.Appointment)
//     this.hasMany(model.Business)
//   }
// }

// export default User


export const User = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user", {
      
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "client",
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profile_picture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // created_at: {
      //   type: Sequelize.DATE,
      //   defaultValue: Sequelize.DATE("NOW"),
      //   allowNull: false,
      // },
      // updated_at: {
      //   type: Sequelize.DATE,
      //   defaultValue: Sequelize.DATE("NOW"),
      //   allowNull: false,
      // },
    },
    {
      timestamps: true,
    }
  )
  // Relations

  return user
}