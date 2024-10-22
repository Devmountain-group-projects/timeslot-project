import React, { useState, useRef, useEffect } from 'react';
import { BsBuildingFillLock } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

const DeleteAccount = () => {
    const [showModal, setShowModal] = useState(false);
    const [confirmationStep, setConfirmationStep] = useState(0);
    const [confirmationText, setConfirmationText] = useState('');
    const [isInputError, setIsInputError] = useState(false);
    const modalRef = useRef();

    // Here we need to add the business name from the database
    const businessName = 'Big Business';

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmClick = () => {
        setConfirmationStep(1);
    };

    const handleFinalDelete = () => {
        if (confirmationText === businessName) {
            console.log('Account deleted');
            setShowModal(false);
            // Here you would typically call an API to delete the account
        } else {
            setIsInputError(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setConfirmationStep(0);
        setConfirmationText('');
        setIsInputError(false);
    };

    const handleInputChange = (e) => {
        setConfirmationText(e.target.value);
        setIsInputError(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div className="w-full space-y-4">
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
                    <h4 className="text-md font-medium mb-2">Delete this Account</h4>
                    <p className="text-sm text-gray-600 mb-4">Once you delete an account, there is no going back. Please be certain.</p>
                    <button
                        className="btn-red"
                        onClick={handleDeleteClick}
                    >
                        Delete this Account
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black rounded-xl bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
                    <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg mb-4">Confirming Account Deletion</h3>
                            <BsBuildingFillLock className="text-5xl text-red-600 mb-4" />
                            <h2 className="text-xl font-bold mb-2">{businessName}</h2>

                            {confirmationStep === 0 ? (
                                <button
                                    className="btn-red"
                                    onClick={handleConfirmClick}
                                >
                                    I want to delete this account
                                </button>
                            ) : (
                                <div className="w-full">
                                    <p className="text-sm mb-2">To confirm, type "{businessName}" in the box below:</p>
                                    <input
                                        type="text"
                                        value={confirmationText}
                                        onChange={handleInputChange}
                                        className={`w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 mb-2 ${isInputError ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter your Business Name"
                                    />
                                    {isInputError && (
                                        <p className="text-red-500 text-xs mb-2">Incorrect business name. Please try again.</p>
                                    )}
                                    <button
                                        className="btn-red block mx-auto"
                                        onClick={handleFinalDelete}
                                    >
                                        Delete this Account
                                    </button>
                                </div>
                            )}

                            <button
                                className="mt-4 text-sm text-gray-600 hover:text-gray-800"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteAccount;