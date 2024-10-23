import bcryptjs from "bcryptjs";
import { users } from "../data/userMassSeed.js";

export const createUsers = async function createUsers(db) {
    for (const user of users) {
        // Hash the password
        const hashedPassword = bcryptjs.hashSync(
            user.password_hash,
            bcryptjs.genSaltSync(10)
        );

        // Create the user with the role
        const createdUser = await db.user.create({
            name: user.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),
            email: user.email.toLowerCase(),
            phone: user.phone,
            role_id: user.role_id,
            password_hash: hashedPassword,
            profile_picture: user.profile_picture,
        });

        // Handle images and associate them with the user
        const profile_photos = user.images.map((image) => ({
            src: image.src,
            image_type: image.image_type,
        }));

        for (const image of profile_photos) {
            const createdImage = await db.image.create({
                src: image.src,
                image_type: image.image_type,
            });

            await db.image_user.create({
                user_id: createdUser.user_id,
                image_id: createdImage.image_id,
                image_type: image.image_type,
            });
        }

        // Create a review for the business if it exists
        if (user.review) {
            const business = await db.business.findByPk(user.review.business_id);

            if (business) {
                await db.review.create({
                    user_id: createdUser.user_id,
                    business_id: user.review.business_id,
                    rating: user.review.rating,
                    comment: user.review.comment,
                });
            } else {
                console.error(`Business with ID ${user.review.business_id} not found. Skipping review.`);
            }
        }

        // Create appointments for the user if they exist
        if (user.appointments && user.appointments.length > 0) {
            for (const appointment of user.appointments) {
                await db.appointment.create({
                    user_id: createdUser.user_id,
                    service_id: appointment.service_id,
                    appointment_date: appointment.appointment_date,
                    appointment_start: appointment.appointment_start,
                    appointment_end: appointment.appointment_end,
                    status: appointment.status,
                    notes: appointment.notes,
                    payment_status: appointment.payment_status,
                });
            }
        }
    }
};