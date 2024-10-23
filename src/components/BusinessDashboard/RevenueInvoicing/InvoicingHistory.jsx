// InvoicingHistory.jsx
import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { mockData } from './mockData';

const statusStyles = {
    paid: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        label: 'Paid'
    },
    pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        label: 'Pending'
    },
    overdue: {
        bg: 'bg-red-100',
        text: 'text-red-700',
        label: 'Overdue'
    }
};

const StatusBadge = ({ status }) => {
    const style = statusStyles[status];
    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
            {style.label}
        </span>
    );
};

const InvoicingHistory = () => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaFileInvoiceDollar className="text-xl md:text-2xl text-blue-600" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Invoicing History</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs font-medium text-gray-500">
                <div className="col-span-3">Invoice</div>
                <div className="col-span-3">Client</div>
                <div className="col-span-2 text-right">Amount</div>
                <div className="col-span-2 text-center">Due Date</div>
                <div className="col-span-2 text-right">Status</div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto">
                {mockData.invoicingHistory.map((invoice, index) => (
                    <React.Fragment key={invoice.id}>
                        <div className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-sm">
                            <div className="col-span-3 font-medium text-gray-900">{invoice.id}</div>
                            <div className="col-span-3 text-gray-600">{invoice.client}</div>
                            <div className="col-span-2 text-right text-gray-900">
                                ${invoice.amount}
                            </div>
                            <div className="col-span-2 text-center text-gray-600">
                                {formatDate(invoice.dueDate)}
                            </div>
                            <div className="col-span-2 text-right">
                                <StatusBadge status={invoice.status} />
                            </div>
                        </div>
                        {index < mockData.invoicingHistory.length - 1 && (
                            <hr className="border-t border-gray-300 w-full m-0" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default InvoicingHistory;