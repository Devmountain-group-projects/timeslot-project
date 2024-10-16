import React from 'react'
import NotFoundImg from '../assets/images/404img.jpg'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img src={NotFoundImg} alt="404 Not Found" className="max-w-lg w-full mb-8" />
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <button
                onClick={() => window.history.back()}
                className="btn-blue"
            >
                Go Back
            </button>
        </div>
    )
}

export default NotFound