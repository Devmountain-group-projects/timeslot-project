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
        images: [
            {
                src: "https://example.com/profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/banner.jpg",
                image_type: 'business_banner',
            },
        ],
    }];


export const createBusiness = async function createBusiness(db) {
    for (const biz of business) {

        const profile_photos = biz.images;

        let images = profile_photos.map((image) => {
            return {
                src: image.src,
                image_business: {
                    image_type: image.image_type,
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