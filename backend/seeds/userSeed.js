import bcryptjs from "bcryptjs";


const users = [
    {
        name: "test",
        email: "test@test.com",
        phone: "1234567890",
        role: "test",
        password_hash: "test",
        profile_picture: "test",
    },
];

export const createUsers = async function createUsers(db) {
    for (const user of users) {
        const hashedPassword = bcryptjs.hashSync(
            user.password_hash,
            bcryptjs.genSaltSync(10),
        );

        await db.user
            .create({
                name: user.name.toLowerCase(),
                email: user.email.toLowerCase(),
                phone: user.phone,
                role: user.role,
                password_hash: hashedPassword,
                profile_picture: user.profile_picture,
            }
        );
    }
};
