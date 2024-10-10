import bcryptjs from "bcryptjs";

const users = [
    {
        name: "test",
        email: "test@test.com",
        phone: "1234567890",
        role: "test",
        password_hash: "test",
        profile_picture: "test",
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
                },
                {
                    include: [
                        {
                            model: db.sequelize.models.image,
                            as: "images",
                        },
                    ],
                }
            );
    }
};


