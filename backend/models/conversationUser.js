export const ConversationUser = (sequelize, Sequelize) => {
    const conversationUser = sequelize.define(
        "conversation_user",
        {
            conversation_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'conversation',
                    key: 'conversation_id',
                },
                onDelete: "RESTRICT",
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'user_id',
                },
                onDelete: "RESTRICT",
            },
        },
        {}
    );
    conversationUser.associate = (models) => {
        conversationUser.belongsTo(models.conversation, {
            foreignKey: "conversation_id",
        });
        conversationUser.belongsTo(models.user, {
            foreignKey: "user_id",
        });
    }
    return conversationUser;
}