const review = [
    {
        user_id: 1,
        appointment_id: 1,
        rating: 5,
        comment: "This is a great service!",
    }
]

export const createReview = async function createReviews(db) {
    for (const rev of review) {
        await db.review
            .create({
                user_id: rev.user_id,
                appointment_id: rev.appointment_id,
                rating: rev.rating,
                comment: rev.comment,
            }
        );
    }
}