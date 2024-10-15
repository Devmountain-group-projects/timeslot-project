export const User = (sequelize, Sequelize) => {
    const user = sequelize.define(
        "user",
        {
            user_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
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
            role_id: {
                type: Sequelize.INTEGER,  // Correct the type to INTEGER, not STRING
                references: {
                    model: 'role',  // Refer to the role model
                    key: 'role_id',
                },
                allowNull: false,  // Ensuring that every user must have a role
                onDelete: "RESTRICT",
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profile_picture: {
                type: Sequelize.STRING,
                allowNull: true,  // Allow null if some users might not have a profile picture
            },
        },
        {
            timestamps: true,
        }
    );

    // Defining associations between the User model and other models
    user.associate = (models) => {
        // User belongs to a role
        user.belongsTo(models.role, {
            foreignKey: "role_id",
            onDelete: "RESTRICT",  // Don't allow role deletion if users exist with that role
        });

        // User can belong to many businesses
        user.belongsToMany(models.business, {
            through: "user_business",  // Junction table for user and business relationship
            foreignKey: "user_id",
            onDelete: "RESTRICT",
            as: "business",
        });

        // User has many appointments
        user.hasMany(models.appointment, {
            foreignKey: "user_id",
            onDelete: "RESTRICT",
        });

        // User can have many images
        user.belongsToMany(models.image, {
            through: "image_user",  // Junction table for user and image relationship
            foreignKey: "user_id",
            onDelete: "RESTRICT",
        });

        // User has created many conversations
        user.hasMany(models.conversation, {
            foreignKey: "user_id_created",
            onDelete: "RESTRICT",
            as: "created_conversations",
        });

        // User participates in many conversations
        user.belongsToMany(models.conversation, {
            through: "conversation_user",
            foreignKey: "user_id",
            as: "participating_conversations",
        });

        // User has sent many messages in conversations
        user.hasMany(models.conversation_message, {
            foreignKey: "sender_id",
            onDelete: "RESTRICT",
        });

        // Other potential relations (commented out if not in use)
        // user.hasMany(models.review, {
        //     foreignKey: "user_id",
        //     onDelete: "RESTRICT",
        // });
    };

    return user;
};