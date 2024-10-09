import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ReviewCard = ({ image, name, title, review, rating }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col py-5 ml-10 pl-14 pr-6 bg-gradient-gray border-2 hover:ring-2 hover:ring-primary transition-all duration-300 ease-in-out rounded-3xl relative group"
    >
        <img src={image} className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300 group-hover:ring-2 group-hover:ring-primary transition-all duration-300 ease-in-out" alt={name} />
        <div>
            <h4 className="text-gray-800 text-base font-bold">{name}</h4>
            <p className="mt-1 text-xs text-gray-500">{title}</p>
        </div>
        <div className="mt-4 flex-grow">
            <p className="text-gray-800 text-sm leading-relaxed">{review}</p>
        </div>
        <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? "text-primary" : "text-gray-300"} />
            ))}
        </div>
    </motion.div>
);

const Reviews = () => {
    const reviews = [
        {
            image: "https://readymadeui.com/team-4.webp",
            name: "Emily Clarkson",
            title: "CEO of Beauty & Beyond",
            review: "I can't express how much time Timeline Slot has saved my team. Clients can easily book their own appointments, and the calendar sync is flawless.",
            rating: 5
        },
        {
            image: "https://readymadeui.com/team-2.webp",
            name: "Michael Stevens",
            title: "Owner of Stevens Consulting",
            review: "The platform is incredibly intuitive, even for someone who's not tech-savvy. I only wish the reporting features in the Free plan were more comprehensive.",
            rating: 3
        },
        {
            image: "https://readymadeui.com/team-5.webp",
            name: "David Keegan",
            title: "Founder of Wellness Works",
            review: "Switching to Timeline Slot was the best decision I made for my business. The ability to track client appointments and payments in one place is a game-changer.",
            rating: 5
        },
        {
            image: "https://readymadeui.com/team-1.webp",
            name: "Josh Thompson",
            title: "CEO of TechStart",
            review: "Exceptional service! The platform's intuitive design made scheduling a breeze. It's transformed how we manage our appointments.",
            rating: 5
        },
        {
            image: "https://readymadeui.com/team-3.webp",
            name: "Michaela Chen",
            title: "Director at HealthPlus",
            review: "This scheduling tool has been a game-changer for our clinic. Patients love the easy booking process, and we've seen a significant reduction in no-shows.",
            rating: 4
        },
        {
            image: "https://readymadeui.com/team-6.webp",
            name: "Sarah Johnson",
            title: "Owner of Yoga Zen",
            review: "As a yoga instructor, managing classes and private sessions used to be a hassle. This platform has simplified everything, giving me more time to focus on my students.",
            rating: 5
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReviews = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReviews = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const getDisplayedReviews = () => {
        const displayCount = {
            xl: 4,
            lg: 3,
            md: 2,
            sm: 1
        };

        return Object.entries(displayCount).map(([breakpoint, count]) => {
            return [...Array(count)].map((_, index) => {
                const reviewIndex = (currentIndex + index) % reviews.length;
                return (
                    <div key={`${breakpoint}-${index}`} className={`
                        ${breakpoint === 'xl' ? 'xl:block' : 'xl:hidden'}
                        ${breakpoint === 'lg' ? 'lg:block' : 'lg:hidden'}
                        ${breakpoint === 'md' ? 'md:block' : 'md:hidden'}
                        ${breakpoint === 'sm' ? 'block' : 'hidden'}
                    `}>
                        <ReviewCard {...reviews[reviewIndex]} />
                    </div>
                );
            });
        }).flat();
    };

    return (
        <div className="px-6 my-24">
            <div className="max-width mx-auto">
                <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-2"
                    >
                        <h2 className="title-text">What Our Users Say<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <p className="text-base text-gray-800 mt-6 leading-relaxed">Discover how Timeline Slot has transformed the scheduling experience for businesses of all sizes. See why so many trust us to manage their appointments efficiently and grow their businesses.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex space-x-4 items-end justify-end"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevReviews}
                            className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                        >
                            <FaChevronLeft className="w-3 fill-primary" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextReviews}
                            className="bg-primary w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer"
                        >
                            <FaChevronRight className="w-3 fill-white" />
                        </motion.div>
                    </motion.div>
                </div>
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mt-16"
                >
                    <AnimatePresence>
                        {getDisplayedReviews()}
                    </AnimatePresence>
                </motion.section>
            </div>
        </div>
    )
}

export default Reviews