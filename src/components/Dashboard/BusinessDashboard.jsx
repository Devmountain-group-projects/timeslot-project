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
            <div className="w-[14%] text-white">
                <Sidebar />
            </div>
            <motion.div
                className="w-[86%] py-2 md:py-4 pr-2 md:pr-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="h-full flex flex-col gap-2 md:gap-4 rounded-xl p-4 bg-gradient-to-br from-gray-100 to-gray-300">
                    <motion.div className="h-[15%] flex gap-2 md:gap-4" variants={rowVariants}>
                        <Card className="w-[25%]"><UpcomingAppts /></Card>
                        <Card className="w-[25%]"><RevenueOverview /></Card>
                        <Card className="w-[25%]"><ClientReviews /></Card>
                        <Card className="w-[25%]"><Notifications /></Card>
                    </motion.div>
                    <motion.div className="h-[50%] flex gap-2 md:gap-4" variants={rowVariants}>
                        <Card className="w-[33.33%]"><CalendarOverview /></Card>
                        <div className="w-[66.66%] flex flex-col gap-2 md:gap-4">
                            <Card className="h-[100%]"><OngoingAppts /></Card>
                            {/* These won't go here, no need for them on the main dashboard */}
                            {/* <div className="h-[50%] flex gap-2 md:gap-4">
                                <Card className="w-[50%]"><ServiceMgmt /></Card>
                                <Card className="w-[50%]"><ClientMgmt /></Card>
                            </div> */}
                        </div>
                    </motion.div>
                    <motion.div className="h-[35%] flex gap-2 md:gap-4" variants={rowVariants}>
                        <Card className="w-[50%]"><Analytics /></Card>
                        <Card className="w-[50%]"><FollowUp /></Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm ${className}`}>
        {children}
    </div>
)

export default BusinessDashboard