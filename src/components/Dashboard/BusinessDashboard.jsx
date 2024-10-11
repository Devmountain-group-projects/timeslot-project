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
        <div className="flex h-screen bg-gradient-to-b from-secondary via:secondary to-primary">
            <div className="w-[14%] text-white">
                <Sidebar />
            </div>
            <motion.div
                className="w-[86%] py-4 pr-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="h-full grid grid-rows-[1fr_2fr_1fr] gap-4 rounded-lg p-4 bg-gradient-to-br from-gray-100 to-gray-300">
                    <motion.div className="grid grid-cols-4 gap-4" variants={rowVariants}>
                        <Card><UpcomingAppts /></Card>
                        <Card><RevenueOverview /></Card>
                        <Card><ClientReviews /></Card>
                        <Card><Notifications /></Card>
                    </motion.div>
                    <motion.div className="grid grid-cols-3 gap-4" variants={rowVariants}>
                        <Card className="col-span-1"><CalendarOverview /></Card>
                        <div className="col-span-2 grid grid-rows-2 gap-4">
                            <Card><OngoingAppts /></Card>
                            <div className="grid grid-cols-2 gap-4">
                                <Card><ServiceMgmt /></Card>
                                <Card><ClientMgmt /></Card>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="grid grid-cols-2 gap-4" variants={rowVariants}>
                        <Card><Analytics /></Card>
                        <Card><FollowUp /></Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center shadow-sm ${className}`}>
        {children}
    </div>
)

export default BusinessDashboard