import bcryptjs from "bcryptjs";

// Example data for seeding businesses, services, users, appointments, and notifications

const businesses = [
    {
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
        availability: [
            {
                day_of_week: "Monday",
                start_time: "09:00",
                end_time: "17:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "09:00",
                end_time: "17:00",
            },
        ],
        services: [
            {
                service_name: "Service 1",
                description: "Service 1 Description",
                duration: "60 minutes",
                price: 100.00,
            },
            {
                service_name: "Service 2",
                description: "Service 2 Description",
                duration: "30 minutes",
                price: 50.00,
            }
        ],
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
    }
];

// Seed logic for creating businesses, services, and appointments

export const createBusiness = async function createBusiness(db) {
    for (const biz of businesses) {
        // Create the business
        const createdBusiness = await db.business.create({
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
        });

        // Handle the availability
        const biz_availabilities = Array.isArray(biz.availability)
            ? biz.availability
            : [biz.availability];

        for (const availability of biz_availabilities) {
            await db.availability.create({
                business_id: createdBusiness.business_id,
                day_of_week: availability.day_of_week,
                start_time: availability.start_time,
                end_time: availability.end_time,
            });
        }

        // Handle images and associate them with the business using the junction table
        const profile_photos = biz.images.map((image) => ({
            src: image.src,
            image_type: image.image_type,
        }));

        for (const image of profile_photos) {
            const createdImage = await db.image.create({
                src: image.src,
                image_type: image.image_type,
            });

            // Explicitly associate the created image with the business via the junction table
            await db.image_business.create({
                business_id: createdBusiness.business_id,
                image_id: createdImage.image_id,
                image_type: image.image_type,
            });
        }

        // Handle services and associate them with the business
        const services = Array.isArray(biz.services)
            ? biz.services
            : [biz.services];

        const createdServices = [];
        for (const service of services) {
            const createdService = await db.service.create({
                business_id: createdBusiness.business_id,
                name: service.service_name,
                description: service.description,
                duration: service.duration,
                price: service.price,
            });
            createdServices.push(createdService);
        }
    }
};