import bcryptjs from "bcryptjs";

const users = [
    {
        name: "test",
        email: "test@test.com",
        phone: "1234567890",
        role: "test",
        password_hash: "test",
        profile_picture: "test",
        photos: [
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

        const profile_photos = user.photos;

        let photos = profile_photos.map((photo) => {
            return {
                src: photo.src,
                profile_image: {
                    image_type: photo.image_type,
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
                    images: photos,
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
