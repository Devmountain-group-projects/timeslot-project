import React, { useState } from 'react'
import { FaRegClock, FaStar, FaTimes } from 'react-icons/fa'
import user1 from '../../../assets/images/user1.png'
import user2 from '../../../assets/images/user2.png'
import user4 from '../../../assets/images/user4.png'

const RecentReviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedReview, setSelectedReview] = useState(null)

    const reviews = [
        {
            id: 1,
            clientName: "Jane Doe",
            service: "Haircut",
            rating: 5,
            date: "2024-10-15",
            comment: "Absolutely love my new haircut! The stylist was very attentive to my needs.",
            image: user1
        },
        {
            id: 2,
            clientName: "Alex Johnson",
            service: "Haircut",
            rating: 4,
            date: "2024-10-14",
            comment: "Great haircut, but the wait time was a bit long.",
            image: user4
        },
        {
            id: 3,
            clientName: "Precious Smith",
            service: "Manicure",
            rating: 5,
            date: "2024-10-13",
            comment: "Best manicure I've ever had! The nail artist was very skilled.",
            image: user2
        },
    ]

    const handleRespond = (review) => {
        setSelectedReview(review)
        setIsModalOpen(true)
    }

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaRegClock className="text-xl md:text-2xl text-primary" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Recent Reviews</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow overflow-y-auto">
                {reviews.map((review, index) => (
                    <React.Fragment key={review.id}>
                        <ReviewCard review={review} onRespond={() => handleRespond(review)} />
                        {index < reviews.length - 1 && <hr className='border-t border-gray-300 w-full m-0' />}
                    </React.Fragment>
                ))}
            </section>
            {isModalOpen && <ResponseModal review={selectedReview} onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}

const ReviewCard = ({ review, onRespond }) => (
    <div className="p-4 flex items-start">
        <img src={review.image} alt={review.clientName} className="w-12 h-12 rounded-full mr-4" />
        <div className="flex-grow">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm md:text-base">{review.clientName}</h3>
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < review.rating ? "text-[#cd942d]" : "text-gray-300"} />
                    ))}
                </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{review.service}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{review.comment}</p>
            <button className="btn-blue-dashboard" onClick={onRespond}>
                Respond
            </button>
        </div>
    </div>
)

const ResponseModal = ({ review, onClose }) => {
    const [response, setResponse] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the response to your backend
        console.log(`Response to ${review.clientName}: ${response}`)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Respond to {review.clientName}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes size={24} />
                    </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">{review.comment}</p>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        rows="4"
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        placeholder="Type your response here..."
                    ></textarea>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="btn-gray-dashboard mr-2">
                            Cancel
                        </button>
                        <button type="submit" className="btn-blue-dashboard">
                            Send Response
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecentReviews