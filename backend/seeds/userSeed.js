import bcryptjs from "bcryptjs";

const users = [
    {
        name: "test",
        email: "test@test.com",
        phone: "2222222",
        role: "test",
        password_hash: "test",
        profile_picture: "test",
        user_business: {
            user_id: 1,
            business_id: 1,
        },
        business: {
            business_name: "test",
            description: "test",
            address_line1: "test",
            address_line2: "test",
            city: "test",
            state: "test",
            zip_code: "test",
            email: "test",
            phone: "test",
            website: "test",
        },
        availability: {
            day_of_week: "Monday",
            start_time: "08:00",
            end_time: "17:00",
        },
        images: [
            {
                src: "https://example.com/profile.jpg",
                image_type: 'user_profile',
            },
            {
                src: "https://example.com/banner.jpg",
                image_type: 'user_banner',
            },
        ],
    },
];

export const createUsers = async function createUsers(db) {
    for (const user of users) {
        const hashedPassword = bcryptjs.hashSync(
            user.password_hash,
            bcryptjs.genSaltSync(10),
        );

        const profile_photos = user.images;

        let images = profile_photos.map((image) => {
            return {
                src: image.src,
                image_user: {
                    image_type: image.image_type,
                },
            };
        });

        // Create user
        await db.user
            .create({
                name: user.name.toLowerCase(),
                email: user.email.toLowerCase(),
                phone: user.phone,
                role: user.role,
                password_hash: hashedPassword,
                profile_picture: user.profile_picture,
                images: images,
            })
            .then(async (createdUser) => {
                // Create availability before the business
                const availability = await db.availability.create({
                    day_of_week: user.availability.day_of_week,
                    start_time: user.availability.start_time,
                    end_time: user.availability.end_time,
                });

                // Create business and link the availability_id
                const business = user.business;
                const createdBusiness = await db.business.create({
                    business_name: business.business_name,
                    description: business.description,
                    address_line1: business.address_line1,
                    address_line2: business.address_line2,
                    city: business.city,
                    state: business.state,
                    zip_code: business.zip_code,
                    email: business.email,
                    phone: business.phone,
                    website: business.website,
                    availability_id: availability.availability_id, // Link availability_id
                });

                // Create the user_business relationship
                await db.user_business.create({
                    user_id: createdUser.user_id,  // Use the createdUser's user_id
                    business_id: createdBusiness.business_id,  // Use the createdBusiness's business_id
                });
            }, {
                include: [
                    {
                        model: db.sequelize.models.image,
                        as: "images",
                    },
                ],
            });
    }
};