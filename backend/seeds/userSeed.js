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
                src: "https://photos.zillowstatic.com/fp/f180a30f2bdd6ffd689d1d7f85edcf81-cc_ft_1536.webp",
                is_primary: true,
            },
            {
                src: "https://photos.zillowstatic.com/fp/6c91e814756194bd0e18bfe37a552c61-cc_ft_768.webp",
                is_primary: false,
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
                property_image: {
                    is_primary: photo.is_primary,
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
