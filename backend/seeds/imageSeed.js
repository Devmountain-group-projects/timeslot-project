const images = [
    {
        // imageId: 1,
        image_url: "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
        profile_image: {
            profile_id: 1,
            image_id:1,
            is_primary: true
        }
    },
];
// console.log(images)
export const createImages = async function createImages(db){
    for (const image of images) {
        await db.image
            .create({
                image_id: image.image_id,
                image_url: image.image_url,
            })
            .then(async () => {
                const profile_image = image.profile_image;
                await db.profile_image.create({
                    profile_id: profile_image.profile_id,
                    image_id: profile_image.image_id,
                    is_primary: profile_image.is_primary
                })
            })
    }
}