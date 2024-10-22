import React, { useState } from 'react'
import { FaStar, FaTimes, FaFlag, FaChevronRight, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { MdOutlineRateReview } from "react-icons/md";
import user1 from '../../../assets/images/user1.png'
import user2 from '../../../assets/images/user2.png'
import user4 from '../../../assets/images/user4.png'

const ReviewMgmt = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedReview, setSelectedReview] = useState(null)
    const [expandedReview, setExpandedReview] = useState(null)

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

    // Set the first review as selected by default for desktop view
    React.useEffect(() => {
        if (reviews.length > 0 && !selectedReview) {
            setSelectedReview(reviews[0])
        }
    }, [])

    const handleRespond = (review) => {
        setSelectedReview(review)
        setIsModalOpen(true)
    }

    const toggleAccordion = (index) => {
        if (expandedReview === index) {
            setExpandedReview(null)
        } else {
            setExpandedReview(index)
        }
    }

    return (
        <div className="w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <MdOutlineRateReview className="text-xl md:text-2xl text-primary" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Review Management</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />

            <section className="flex-grow overflow-hidden">
                {/* Mobile View */}
                <div className="lg:hidden overflow-y-auto h-full">
                    {reviews.map((review, index) => (
                        <div key={review.id} className="border-b border-gray-300 last:border-b-0">
                            <div
                                className="flex items-start justify-between p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-start">
                                    <img src={review.image} alt={review.clientName} className="w-12 h-12 rounded-full mr-3 object-cover" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-sm md:text-base">{review.clientName}</h3>
                                        <p className="text-xs text-gray-500">Review Date: {new Date(review.date).toLocaleDateString()}</p>
                                        <div className="flex mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={`text-xs ${i < review.rating ? "text-[#cd942d]" : "text-gray-300"}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {expandedReview === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {expandedReview === index && (
                                <div className="p-4 bg-gray-50">
                                    <ReviewDetails
                                        review={review}
                                        onRespond={() => handleRespond(review)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex h-full">
                    <div className="w-[45%] overflow-y-auto border-r border-gray-300">
                        {reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                isSelected={selectedReview && selectedReview.id === review.id}
                                onClick={() => setSelectedReview(review)}
                            />
                        ))}
                    </div>
                    <div className="w-[55%] overflow-y-auto">
                        {selectedReview && (
                            <div className="p-4">
                                <ReviewDetails
                                    review={selectedReview}
                                    onRespond={() => handleRespond(selectedReview)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {isModalOpen && <ResponseModal review={selectedReview} onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}

const ReviewCard = ({ review, isSelected, onClick }) => (
    <div
        className={`p-4 flex items-start cursor-pointer ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
        onClick={onClick}
    >
        <img src={review.image} alt={review.clientName} className="w-12 h-12 rounded-full mr-3 object-cover" />
        <div className="flex-grow">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-sm md:text-base">{review.clientName}</h3>
                    <p className="text-xs text-gray-500">Review Date: {new Date(review.date).toLocaleDateString()}</p>
                    <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`text-xs ${i < review.rating ? "text-[#cd942d]" : "text-gray-300"}`} />
                        ))}
                    </div>
                </div>
                {isSelected && (
                    <FaChevronRight className="text-gray-400 text-lg" />
                )}
            </div>
        </div>
    </div>
)

const ReviewDetails = ({ review, onRespond }) => {
    const [notes, setNotes] = useState('')

    return (
        <div>
            <h3 className="font-semibold text-base mb-2">Review Details</h3>
            <InfoItem label="Service" value={review.service} />
            <InfoItem label="Comment" value={review.comment} />

            <div className="mt-4">
                <label htmlFor="notes" className="block text-xs font-medium text-secondary mb-1 uppercase">
                    Notes
                </label>
                <textarea
                    id="notes"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4"
                    placeholder="Enter notes here..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <div className="flex justify-start gap-4">
                    <button
                        onClick={onRespond}
                        className="btn-blue-dashboard"
                    >
                        Respond
                    </button>
                    <button
                        className="btn-red flex items-center"
                    >
                        <FaFlag className="mr-1" />
                        Flag
                    </button>
                </div>
            </div>
        </div>
    )
}

const InfoItem = ({ label, value }) => (
    <div className="mb-2">
        <span className="font-medium mr-1 uppercase text-xs text-secondary">{label}:</span>
        <span className="text-gray-600 text-sm">{value}</span>
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

export default ReviewMgmt