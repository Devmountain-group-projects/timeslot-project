import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ClientSatisfaction = () => {
    const satisfactionRating = 4.5;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i - 0.5 <= rating) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center py-4 px-3 bg-tertiary">
                <h2 className="text-xs md:text-sm font-medium">Client Satisfaction</h2>
            </section>
            <hr className='border-t border-gray-300 w-full m-0' />
            <section className="flex-grow p-4 flex flex-col items-center justify-center">
                <div className="flex items-center mb-2">
                    {renderStars(satisfactionRating)}
                </div>
                <p className="text-2xl font-bold mb-2">{satisfactionRating.toFixed(1)}/5</p>
                <p className="text-sm text-gray-600">Based on client feedback after appointments</p>
            </section>
        </div>
    );
};

export default ClientSatisfaction;