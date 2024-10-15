export const Conversation = (sequelize, Sequelize) => {
    const conversation = sequelize.define(
        "conversation",
        {
            conversation_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id_created: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'user_id',
                },
                onDelete: "RESTRICT",
            },
            business_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'business',
                    key: 'business_id',
                },
                onDelete: "RESTRICT",
            },
        },
        {
            timestamps: true,
        }
    );

    conversation.associate = function (models) {
        conversation.belongsTo(models.user, {
            foreignKey: "user_id_created",
            as: "creator",
        })
        conversation.belongsToMany(models.user, {
            through: "conversation_user",
            foreignKey: "conversation_id",
            as: "users",
        });
        conversation.hasMany(models.conversation_message, {
            foreignKey: "conversation_id",
            as: "messages",
        });
    };
    return conversation;
}