const business = [
    {
        user_id: 1, // Need Foreign Key
        business_name: "Business Name",
        description: "Business Description",
        address_line1: "Business Address",
        address_line2: "Business Address 2",
        city: "Business City",
        state: "Business State",
        zip_code: "Business Zip",
        email: "Business Email",
        phone: "Business Phone",
        website: "Business Website",
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
    }];


export const createBusiness = async function createBusiness(db) {
    for (const biz of business) {

        const profile_photos = biz.photos;

        let photos = profile_photos.map((photo) => {
            return {
                src: photo.src,
                property_image: {
                    is_primary: photo.is_primary,
                },
            };
        });
        await db.business
            .create({
                    user_id: biz.user_id,
                    business_name: biz.business_name,
                    description: biz.description,
                    address_line1: biz.address_line1,
                    address_line2: biz.address_line2,
                    city: biz.city,
                    state: biz.state,
                    zip_code: biz.zip_code,
                    email: biz.email,
                    phone: biz.phone,
                    website: biz.website,
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