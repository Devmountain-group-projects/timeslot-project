import React from 'react'
import { motion } from 'framer-motion'
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
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.div
            className="h-full flex flex-col gap-4 overflow-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Row 1 - Four equal-width cards */}
            <motion.div
                className="flex-shrink-0 flex flex-col sm:flex-row flex-wrap gap-4"
                variants={rowVariants}
            >
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
            </motion.div>

            {/* Row 2 - Two cards with 40-60 split */}
            <motion.div
                className="flex-grow flex flex-col md:flex-row gap-4"
                variants={rowVariants}
            >
                <Card className="w-full md:w-[40%] h-full md:h-[auto]">
                    <InvoicingHistory />
                </Card>
                <Card className="w-full md:w-[60%] h-full md:h-[auto]">
                    <OutstandingInvoices />
                </Card>
            </motion.div>

            {/* Row 3 - Three equal-width cards */}
            <motion.div
                className="flex-shrink-0 flex flex-col md:flex-row gap-4"
                variants={rowVariants}
            >
                <Card className="w-full md:w-1/3 h-[300px] md:h-[250px]">
                    <PaymentMethods />
                </Card>
                <Card className="w-full md:w-1/3 h-[300px] md:h-[250px]">
                    <TaxSummary />
                </Card>
                <Card className="w-full md:w-1/3 h-[300px] md:h-[250px]">
                    <RevenueBreakdown />
                </Card>
            </motion.div>
        </motion.div>
    )
}

export default PaymentsInvoicing