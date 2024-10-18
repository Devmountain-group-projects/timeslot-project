export const businesses = [
    {
        business_name: "Sunshine Café",
        description: "A cozy spot for coffee and snacks.",
        address_line1: "123 Main St",
        address_line2: "Suite 100",
        city: "Sunnyvale",
        state: "CA",
        zip_code: "94086",
        email: "info@sunshinecafe.com",
        phone: "123-456-7890",
        website: "https://sunshinecafe.com",
        availability: [
            {
                day_of_week: "Monday",
                start_time: "08:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "08:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Wednesday",
                start_time: "08:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Thursday",
                start_time: "08:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Friday",
                start_time: "08:00",
                end_time: "18:00",
            },
        ],
        services: [
            {
                service_name: "Espresso",
                description: "A strong shot of espresso.",
                duration: "5 minutes",
                price: 3.50,
            },
            {
                service_name: "Cappuccino",
                description: "Espresso with steamed milk and foam.",
                duration: "10 minutes",
                price: 4.50,
            }
        ],
        images: [
            {
                src: "https://example.com/sunshinecafe_profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/sunshinecafe_banner.jpg",
                image_type: 'business_banner',
            },
        ],
    },
    {
        business_name: "The Book Nook",
        description: "A quiet place to enjoy coffee and read books.",
        address_line1: "456 Elm St",
        address_line2: "",
        city: "Booktown",
        state: "NY",
        zip_code: "10001",
        email: "contact@booknook.com",
        phone: "987-654-3210",
        website: "https://booknook.com",
        availability: [
            {
                day_of_week: "Monday",
                start_time: "09:00",
                end_time: "19:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "09:00",
                end_time: "19:00",
            },
            {
                day_of_week: "Wednesday",
                start_time: "09:00",
                end_time: "19:00",
            },
            {
                day_of_week: "Thursday",
                start_time: "09:00",
                end_time: "19:00",
            },
            {
                day_of_week: "Friday",
                start_time: "09:00",
                end_time: "19:00",
            },
        ],
        services: [
            {
                service_name: "Latte",
                description: "Espresso with steamed milk.",
                duration: "10 minutes",
                price: 4.00,
            },
            {
                service_name: "Mocha",
                description: "Espresso with chocolate and steamed milk.",
                duration: "10 minutes",
                price: 4.75,
            }
        ],
        images: [
            {
                src: "https://example.com/booknook_profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/booknook_banner.jpg",
                image_type: 'business_banner',
            },
        ],
    },
    {
        business_name: "Fitness Hub",
        description: "Your destination for all things fitness.",
        address_line1: "789 Fitness Ave",
        address_line2: "",
        city: "Fitville",
        state: "TX",
        zip_code: "75001",
        email: "info@fitnesshub.com",
        phone: "555-555-5555",
        website: "https://fitnesshub.com",
        availability: [
            {
                day_of_week: "Monday",
                start_time: "06:00",
                end_time: "22:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "06:00",
                end_time: "22:00",
            },
            {
                day_of_week: "Wednesday",
                start_time: "06:00",
                end_time: "22:00",
            },
            {
                day_of_week: "Thursday",
                start_time: "06:00",
                end_time: "22:00",
            },
            {
                day_of_week: "Friday",
                start_time: "06:00",
                end_time: "22:00",
            },
        ],
        services: [
            {
                service_name: "Personal Training",
                description: "One-on-one training with a certified trainer.",
                duration: "60 minutes",
                price: 50.00,
            },
            {
                service_name: "Yoga Class",
                description: "Group yoga class for all levels.",
                duration: "60 minutes",
                price: 20.00,
            }
        ],
        images: [
            {
                src: "https://example.com/fitnesshub_profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/fitnesshub_banner.jpg",
                image_type: 'business_banner',
            },
        ],
    },
    {
        business_name: "Green Grocers",
        description: "Organic produce and groceries.",
        address_line1: "123 Green St",
        address_line2: "",
        city: "Greenville",
        state: "OR",
        zip_code: "97001",
        email: "contact@greengrocers.com",
        phone: "444-444-4444",
        website: "https://greengrocers.com",
        availability: [
            {
                day_of_week: "Monday",
                start_time: "07:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "07:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Wednesday",
                start_time: "07:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Thursday",
                start_time: "07:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Friday",
                start_time: "07:00",
                end_time: "20:00",
            },
        ],
        services: [
            {
                service_name: "Grocery Delivery",
                description: "Same-day grocery delivery service.",
                duration: "30 minutes",
                price: 5.00,
            },
            {
                service_name: "Meal Prep Kits",
                description: "Weekly meal prep kits with organic ingredients.",
                duration: "10 minutes",
                price: 25.00,
            }
        ],
        images: [
            {
                src: "https://example.com/greengrocers_profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/greengrocers_banner.jpg",
                image_type: 'business_banner',
            },
        ],
    },
    {
        business_name: "Tech World",
        description: "The best place for gadgets and electronics.",
        address_line1: "456 Tech Blvd",
        address_line2: "",
        city: "Silicon City",
        state: "CA",
        zip_code: "94043",
        email: "support@techworld.com",
        phone: "222-222-2222",
        website: "https://techworld.com",
        availability: [
            {
                day_of_week: "Monday",
                start_time: "10:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "10:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Wednesday",
                start_time: "10:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Thursday",
                start_time: "10:00",
                end_time: "20:00",
            },
            {
                day_of_week: "Friday",
                start_time: "10:00",
                end_time: "20:00",
            },
        ],
        services: [
            {
                service_name: "Phone Repair",
                description: "Fast phone repair services.",
                duration: "30 minutes",
                price: 100.00,
            },
            {
                service_name: "Laptop Repair",
                description: "Quick laptop repair services.",
                duration: "60 minutes",
                price: 150.00,
            }
        ],
        images: [
            {
                src: "https://example.com/techworld_profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/techworld_banner.jpg",
                image_type: 'business_banner',
            },
        ],
    },
    {
        business_name: "Spa Serenity",
        description: "Relax and rejuvenate at our luxury spa.",
        address_line1: "789 Wellness Way",
        address_line2: "",
        city: "Tranquil Town",
        state: "FL",
        zip_code: "33101",
        email: "info@spaserenity.com",
        phone: "333-333-3333",
        website: "https://spaserenity.com",
        availability: [
            {
                day_of_week: "Monday",
                start_time: "09:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Tuesday",
                start_time: "09:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Wednesday",
                start_time: "09:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Thursday",
                start_time: "09:00",
                end_time: "18:00",
            },
            {
                day_of_week: "Friday",
                start_time: "09:00",
                end_time: "18:00",
            },
        ],
        services: [
            {
                service_name: "Swedish Massage",
                description: "A relaxing full-body massage.",
                duration: "60 minutes",
                price: 80.00,
            },
            {
                service_name: "Deep Tissue Massage",
                description: "A massage targeting deeper layers of muscle.",
                duration: "60 minutes",
                price: 90.00,
            }
        ],
        images: [
            {
                src: "https://example.com/spa_serenity_profile.jpg",
                image_type: 'business_profile',
            },
            {
                src: "https://example.com/spa_serenity_banner.jpg",
                image_type: 'business_banner',
            },
        ],
    }
];