import React from 'react'
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

const BusinessDashboard = () => {
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
        <div className="flex h-screen bg-secondary">
            {/* Sidebar Container */}
            <div className="w-[14%] text-white">
                <Sidebar />
            </div>
            {/* Right Main Container */}
            <motion.div
                className="w-[86%] py-2 md:py-4 pr-2 md:pr-4 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="h-full flex flex-col gap-2 md:gap-4 rounded-xl p-4 bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden">
                    {/* Top 4 Cards */}
                    <motion.div className="h-[15%] flex gap-2 md:gap-4" variants={rowVariants}>
                        <Card className="w-[25%]"><UpcomingAppts /></Card>
                        <Card className="w-[25%]"><RevenueOverview /></Card>
                        <Card className="w-[25%]"><ClientReviews /></Card>
                        <Card className="w-[25%]"><Notifications /></Card>
                    </motion.div>
                    {/* Middle 2 Cards */}
                    <motion.div className="h-[50%] flex gap-2 md:gap-4" variants={rowVariants}>
                        <Card className="w-[33.33%]"><CalendarOverview /></Card>
                        <div className="w-[66.67%] flex flex-col gap-2 md:gap-4">
                            <Card className="h-[100%]"><OngoingAppts /></Card>
                        </div>
                    </motion.div>
                    {/* Bottom 3 Cards */}
                    <motion.div className="h-[35%] flex gap-2 md:gap-4 overflow-hidden" variants={rowVariants}>
                        <Card className="w-[33.33%] overflow-hidden"><Analytics /></Card>
                        <Card className="w-[33.33%] overflow-hidden"><FollowUp /></Card>
                        <Card className="w-[33.33%] overflow-hidden"><ReviewReport /></Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
)

export default BusinessDashboard