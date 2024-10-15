import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../Layout/SideBar'
import UpcomingAppts from '../BusinessDashboard/UpcomingAppts'
import RevenueOverview from '../BusinessDashboard/RevenueOverview'
import ClientReviews from '../BusinessDashboard/ClientReviews'
import Notifications from '../BusinessDashboard/Notifications'
import Analytics from '../BusinessDashboard/Analytics'
import OngoingAppts from '../BusinessDashboard/OngoingAppts'
import ServiceMgmt from '../BusinessDashboard/ServiceMgmt'
import ClientMgmt from '../BusinessDashboard/ClientMgmt'
import CalendarOverview from '../BusinessDashboard/CalendarOverview'
import FollowUp from '../BusinessDashboard/FollowUp'
import ReviewReport from '../BusinessDashboard/ReviewReport'

// Sidebar Links
import AccountSettings from '../BusinessDashboard/AccountSettings'
import HelpSupport from '../BusinessDashboard/HelpSupport'
import Schedule from '../BusinessDashboard/Schedule'
import AllReviews from '../BusinessDashboard/AllReviews'
import AllClients from '../BusinessDashboard/AllClients'
import AllAppointments from '../BusinessDashboard/AllAppointments'
import PaymentsInvoicing from '../BusinessDashboard/PaymentsInvoicing'
import AllServices from '../BusinessDashboard/AllServices'

const BusinessDashboard = () => {
    const [currentView, setCurrentView] = useState('dashboard')
    const [selectedDate, setSelectedDate] = useState(new Date())

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

    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return (
                    <div className="flex flex-col h-full gap-2 md:gap-4 overflow-hidden">
                        {/* Top 4 Cards */}
                        <motion.div className="flex-none h-24 flex gap-2 md:gap-4" variants={rowVariants}>
                            <Card className="w-1/4"><UpcomingAppts /></Card>
                            <Card className="w-1/4"><RevenueOverview /></Card>
                            <Card className="w-1/4"><ClientReviews /></Card>
                            <Card className="w-1/4"><Notifications /></Card>
                        </motion.div>
                        {/* Middle and Bottom Cards */}
                        <motion.div className="flex-grow flex gap-2 md:gap-4 min-h-0" variants={rowVariants}>
                            <Card className="w-1/3 overflow-auto">
                                <CalendarOverview setCurrentView={setCurrentView} setSelectedDate={setSelectedDate} />
                            </Card>
                            <div className="w-2/3 flex flex-col gap-2 md:gap-4">
                                <Card className="flex-1 overflow-auto"><OngoingAppts /></Card>
                                <div className="flex-1 flex gap-2 md:gap-4">
                                    <Card className="w-1/2 overflow-auto"><Analytics /></Card>
                                    <Card className="w-1/2 overflow-auto"><FollowUp /></Card>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )
            case 'appointments':
                return <AllAppointments />
            case 'services':
                return <AllServices />
            case 'clients':
                return <AllClients />
            case 'reviews':
                return <AllReviews />
            case 'payments':
                return <PaymentsInvoicing />
            case 'calendar':
                return <Schedule selectedDate={selectedDate} />
            case 'settings':
                return <AccountSettings />
            case 'help':
                return <HelpSupport />
            default:
                return <div>404: Page not found</div>
        }
    }

    return (
        <div className="flex h-screen bg-secondary overflow-hidden">
            {/* Sidebar Container */}
            <div className="w-[14%] text-white overflow-y-auto">
                <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
            </div>
            {/* Right Main Container */}
            <motion.div
                className="w-[86%] py-2 md:py-4 pr-2 md:pr-4 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="h-full flex flex-col rounded-xl p-4 bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden">
                    {renderContent()}
                </div>
            </motion.div>
        </div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-sm ${className}`}>
        {children}
    </div>
)

export default BusinessDashboard