// OutstandingInvoices.jsx
import React, { useState, useEffect } from 'react';
import { FaFileInvoice, FaTimes, FaChevronRight, FaChevronDown, FaChevronUp, FaEnvelope } from 'react-icons/fa';
import { AlertTriangle } from 'lucide-react';
import { mockData } from './mockData';

const OutstandingInvoices = () => {
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [expandedInvoice, setExpandedInvoice] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Set the first invoice as selected by default for desktop view
    useEffect(() => {
        if (mockData.outstandingInvoices.invoices.length > 0 && !selectedInvoice) {
            setSelectedInvoice(mockData.outstandingInvoices.invoices[0]);
        }
    }, []);

    const toggleAccordion = (index) => {
        setExpandedInvoice(expandedInvoice === index ? null : index);
    };

    const handleContactClient = (invoice) => {
        setSelectedInvoice(invoice);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaFileInvoice className="text-xl md:text-2xl text-orange-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Outstanding Invoices</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />

            {/* Summary Section */}
            <section className="grid grid-cols-3 gap-4 p-4 bg-gray-50">
                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Total Outstanding</p>
                    <p className="text-xl font-bold text-gray-900">${mockData.outstandingInvoices.total}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Pending</p>
                    <p className="text-xl font-bold text-yellow-600">${mockData.outstandingInvoices.summary.pending}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Overdue</p>
                    <p className="text-xl font-bold text-red-600">${mockData.outstandingInvoices.summary.overdue}</p>
                </div>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />

            <section className="flex-grow overflow-hidden">
                {/* Mobile View */}
                <div className="lg:hidden overflow-y-auto h-full">
                    {mockData.outstandingInvoices.invoices.map((invoice, index) => (
                        <div key={invoice.id} className="border-b border-gray-300 last:border-b-0">
                            <div
                                className="flex items-start justify-between p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <InvoiceInfo invoice={invoice} />
                                {expandedInvoice === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {expandedInvoice === index && (
                                <div className="p-4 bg-gray-50">
                                    <InvoiceDetails
                                        invoice={invoice}
                                        onContact={() => handleContactClient(invoice)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex h-full">
                    <div className="w-[45%] overflow-y-auto border-r border-gray-300">
                        {mockData.outstandingInvoices.invoices.map((invoice) => (
                            <InvoiceCard
                                key={invoice.id}
                                invoice={invoice}
                                isSelected={selectedInvoice && selectedInvoice.id === invoice.id}
                                onClick={() => setSelectedInvoice(invoice)}
                            />
                        ))}
                    </div>
                    <div className="w-[55%] overflow-y-auto">
                        {selectedInvoice && (
                            <div className="p-4">
                                <InvoiceDetails
                                    invoice={selectedInvoice}
                                    onContact={() => handleContactClient(selectedInvoice)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <ContactModal
                    invoice={selectedInvoice}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

const InvoiceInfo = ({ invoice }) => (
    <div className="flex items-start">
        <div className="flex-grow">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">{invoice.id}</h3>
                <span className="text-sm font-medium text-gray-900">${invoice.amount}</span>
            </div>
            <p className="text-sm text-gray-600">{invoice.client}</p>
            <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">Due: {new Date(invoice.dueDate).toLocaleDateString()}</span>
                {invoice.status === 'overdue' && (
                    <div className="flex items-center ml-2 text-red-600">
                        <AlertTriangle size={14} className="mr-1" />
                        <span className="text-xs">{invoice.daysOverdue}d</span>
                    </div>
                )}
            </div>
        </div>
    </div>
);

const InvoiceCard = ({ invoice, isSelected, onClick }) => (
    <div
        className={`p-4 flex items-start cursor-pointer ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
        onClick={onClick}
    >
        <InvoiceInfo invoice={invoice} />
        {isSelected && <FaChevronRight className="text-gray-400 text-lg ml-2" />}
    </div>
);

const InvoiceDetails = ({ invoice, onContact }) => {
    const [notes, setNotes] = useState('');

    return (
        <div>
            <h3 className="font-semibold text-base mb-4">Invoice Details</h3>

            <InfoItem label="Invoice ID" value={invoice.id} />
            <InfoItem label="Client" value={invoice.client} />
            <InfoItem label="Amount" value={`$${invoice.amount}`} />
            <InfoItem label="Due Date" value={new Date(invoice.dueDate).toLocaleDateString()} />
            <InfoItem label="Status" value={
                <span className={invoice.status === 'overdue' ? 'text-red-600' : 'text-yellow-600'}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    {invoice.status === 'overdue' && ` (${invoice.daysOverdue} days)`}
                </span>
            } />

            <div className="mt-4">
                <label className="block text-xs font-medium text-secondary mb-1 uppercase">
                    Notes
                </label>
                <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4"
                    placeholder="Add notes about this invoice..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <button
                    onClick={onContact}
                    className="btn-blue-dashboard flex items-center"
                >
                    <FaEnvelope className="mr-2" />
                    Contact Client
                </button>
            </div>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="mb-2">
        <span className="font-medium mr-1 uppercase text-xs text-secondary">{label}:</span>
        <span className="text-gray-600 text-sm">{value}</span>
    </div>
);

const ContactModal = ({ invoice, onClose }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the message to your backend
        console.log(`Message to ${invoice.client} regarding ${invoice.id}: ${message}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Contact {invoice.client}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes size={24} />
                    </button>
                </div>
                <div className="mb-4">
                    <p className="text-sm text-gray-600">Invoice {invoice.id}</p>
                    <p className="text-sm text-gray-600">Amount: ${invoice.amount}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                    ></textarea>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="btn-gray-dashboard mr-2">
                            Cancel
                        </button>
                        <button type="submit" className="btn-blue-dashboard">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OutstandingInvoices;