import React from 'react'
// Row 1
import TotalRevenue from './RevenueInvoicing/TotalRevenue'
import MonthlyRevenue from './RevenueInvoicing/MonthlyRevenue'
import AveragePaymentTime from './RevenueInvoicing/AveragePaymentTime'
import TopClients from './RevenueInvoicing/TopClients'
// Row 2
import InvoicingHistory from './RevenueInvoicing/InvoicingHistory'
import OutstandingInvoices from './RevenueInvoicing/OutstandingInvoices'
// Row 3
import PaymentMethods from './RevenueInvoicing/PaymentMethods'
import TaxSummary from './RevenueInvoicing/TaxSummary'
import RevenueBreakdown from './RevenueInvoicing/RevenueBreakdown'

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-auto ${className}`}>
        {children}
    </div>
);

const PaymentsInvoicing = () => {
    return (
        <div className="h-full flex flex-col gap-4 overflow-auto">
            {/* Row 1 - Four equal-width cards */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row flex-wrap gap-4">
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px] md:h-[200px]">
                    <TotalRevenue />
                </Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px] md:h-[200px]">
                    <MonthlyRevenue />
                </Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px] md:h-[200px]">
                    <AveragePaymentTime />
                </Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px] md:h-[200px]">
                    <TopClients />
                </Card>
            </div>

            {/* Row 2 - Two cards with 40-60 split */}
            <div className="flex-grow flex flex-col md:flex-row gap-4">
                <Card className="w-full md:w-[40%] h-full md:h-[auto]">
                    <InvoicingHistory />
                </Card>
                <Card className="w-full md:w-[60%] h-full md:h-[auto]">
                    <OutstandingInvoices />
                </Card>
            </div>

            {/* Row 3 - Three equal-width cards */}
            <div className="flex-shrink-0 flex flex-col md:flex-row gap-4">
                <Card className="w-full md:w-1/3 h-[300px] md:h-[250px]">
                    <PaymentMethods />
                </Card>
                <Card className="w-full md:w-1/3 h-[300px] md:h-[250px]">
                    <TaxSummary />
                </Card>
                <Card className="w-full md:w-1/3 h-[300px] md:h-[250px]">
                    <RevenueBreakdown />
                </Card>
            </div>
        </div>
    )
}

export default PaymentsInvoicing