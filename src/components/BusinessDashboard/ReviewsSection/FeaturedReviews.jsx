import React from 'react'
import { FaStar } from 'react-icons/fa'
import user9 from '../../../assets/images/user9.png'
import user10 from '../../../assets/images/user10.png'

const FeaturedReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            rating: 5,
            comment: "Exceptional service! Highly recommended.",
            image: user9,
            date: "September 1, 2024"
        },
        {
            id: 2,
            name: "Yasmin Abdulaziz",
            rating: 4,
            comment: "Great experience overall. Will come back.",
            image: user10,
            date: "September 2, 2024"
        }
    ]

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaStar className="text-xl md:text-2xl text-[#cd942d]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Featured Reviews</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        isLast={index === reviews.length - 1}
                    />
                ))}
            </section>
        </div>
    )
}

const ReviewCard = ({ review, isLast }) => (
    <div className={`${!isLast ? 'border-b border-gray-300' : ''}`}>
        <div className="flex items-center py-4 px-4">
            <div className="w-2/12">
                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full" />
            </div>
            <div className="w-10/12">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm md:text-base">{review.name}</h3>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? "text-[#cd942d]" : "text-gray-300"} />
                        ))}
                    </div>
                </div>
                <p className="text-xs text-gray-500">{review.date}</p>
                <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
            </div>
        </div>
    </div>
)

export default FeaturedReviews