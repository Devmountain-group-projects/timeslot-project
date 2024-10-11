import bcryptjs from "bcryptjs";

const users = [
    {
        name: "test",
        email: "test@test.com",
        phone: "2222222",
        role: "test",
        password_hash: "test",
        profile_picture: "test",
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
        availability: [
            {
                day_of_week: "Monday",
                start_time: "08:00",
                end_time: "17:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "08:00",
                end_time: "17:00",
            }
        ],
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
    {
        name: "test2",
        email: "test2@test.com",
        phone: "2222222",
        role: "test2",
        password_hash: "test2",
        profile_picture: "test2",
        business: {
            business_name: "test2",
            description: "test2",
            address_line1: "test2",
            address_line2: "test2",
            city: "test2",
            state: "test2",
            zip_code: "test2",
            email: "test2",
            phone: "test2",
            website: "test2",
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
            bcryptjs.genSaltSync(10)
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
        const createdUser = await db.user.create({
            name: user.name.toLowerCase(),
            email: user.email.toLowerCase(),
            phone: user.phone,
            role: user.role,
            password_hash: hashedPassword,
            profile_picture: user.profile_picture,
            images: images,
        });

        // Create business
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
        });

        // Loop through the user's availability (handle both array and single object cases)
        const biz_availabilities = Array.isArray(user.availability)
            ? user.availability
            : [user.availability]; // Convert to array if it's a single object

        for (const availability of biz_availabilities) {
            // Create availability and link it to the business
            const createdAvailability = await db.availability.create({
                day_of_week: availability.day_of_week,
                start_time: availability.start_time,
                end_time: availability.end_time,
                business_id: createdBusiness.business_id, // Pass the business_id here
            });

            // Associate user with business using findOrCreate to avoid duplicates
            await db.user_business.findOrCreate({
                where: {
                    user_id: createdUser.user_id,
                    business_id: createdBusiness.business_id,
                },
                defaults: {
                    availability_id: createdAvailability.availability_id, // Add availability_id if needed
                },
            });
        }
    }
};