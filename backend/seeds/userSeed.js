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

        await db.user
            .create({
                    name: user.name.toLowerCase(),
                    email: user.email.toLowerCase(),
                    phone: user.phone,
                    role: user.role,
                    password_hash: hashedPassword,
                    profile_picture: user.profile_picture,
                    images: images,
                    business: {
                        business_name: user.business.business_name,
                        description: user.business.description,
                        address_line1: user.business.address_line1,
                        address_line2: user.business.address_line2,
                        city: user.business.city,
                        state: user.business.state,
                        zip_code: user.business.zip_code,
                        email: user.business.email,
                        phone: user.business.phone,
                        website: user.business.website,
                    }
                },
                {
                    include: [
                        {
                            model: db.sequelize.models.image,
                            as: "images",
                        },
                        {
                            model: db.sequelize.models.business,
                            as: "businesses",
                        },
                    ],
                }
            );
    }
};


