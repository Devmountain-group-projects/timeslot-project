export const ConversationMessage = (sequelize, Sequelize) => {
    const conversationMessage = sequelize.define(
        "conversation_message",
        {
            conversation_message_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            conversation_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'conversation',
                    key: 'conversation_id',
                },
                onDelete: "RESTRICT",
            },
            sender_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'user_id',
                },
                onDelete: "RESTRICT",
            },
            message: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
    conversationMessage.associate = (models) => {
        conversationMessage.belongsTo(models.user, {
            foreignKey: "sender_id",
            as: "sender",
        });
        conversationMessage.belongsTo(models.conversation, {
            foreignKey: "conversation_id",
            as: "conversation",
        });
    }
    return conversationMessage;
}