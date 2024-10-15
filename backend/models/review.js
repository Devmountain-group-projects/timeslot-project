export const Review = (sequelize, Sequelize) => {
    const review = sequelize.define(
        "review",
        {
            review_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
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
            rating: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
            },
        },
        {
            timestamps: true,
        }
    );
    return review;
}