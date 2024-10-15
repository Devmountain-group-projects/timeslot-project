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
    return conversationUser;
}