import React from 'react'
import { motion } from 'framer-motion'
// Row 1
import TotalClients from './ClientsSection.jsx/TotalClients'
import NewClients from './ClientsSection.jsx/NewClients'
import TopClients from './ClientsSection.jsx/TopClients'
import InactiveClients from './ClientsSection.jsx/InactiveClients'
// Row 2
import RecentBookings from './ClientsSection.jsx/RecentBookings'
import ClientList from './ClientsSection.jsx/ClientList'
// Row 3
import ReturningClients from './ClientsSection.jsx/ReturningClients'
import ClientSatisfaction from './ClientsSection.jsx/ClientSatisfaction'
import ClientRetention from './ClientsSection.jsx/ClientRetention'

const AllClients = () => {
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
            className="h-full flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Row 1 */}
            <motion.div className="h-[15%] flex gap-4" variants={rowVariants}>
                <Card className="w-[25%]"><TotalClients /></Card>
                <Card className="w-[25%]"><NewClients /></Card>
                <Card className="w-[25%]"><TopClients /></Card>
                <Card className="w-[25%]"><InactiveClients /></Card>
            </motion.div>

            {/* Row 2 */}
            <motion.div className="h-[45%] flex gap-4" variants={rowVariants}>
                <Card className="w-[32%]"><RecentBookings /></Card>
                <Card className="w-[68%]"><ClientList /></Card>
            </motion.div>

            {/* Row 3 */}
            <motion.div className="h-[40%] flex gap-4" variants={rowVariants}>
                <Card className="w-[33.33%]"><ReturningClients /></Card>
                <Card className="w-[33.33%]"><ClientSatisfaction /></Card>
                <Card className="w-[33.33%]"><ClientRetention /></Card>
            </motion.div>
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
)

export default AllClients