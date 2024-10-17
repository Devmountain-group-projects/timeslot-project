import React from 'react'
import { motion } from 'framer-motion'
// Row 1
import TotalClients from './ClientsSection/TotalClients'
import NewClients from './ClientsSection/NewClients'
import TopClients from './ClientsSection/TopClients'
import InactiveClients from './ClientsSection/InactiveClients'
// Row 2
import ClientList from './ClientsSection/ClientList'
import AddAppointment from './ClientsSection/AddAppointment'
// Row 3
import ReturningClients from './ClientsSection/ReturningClients'
import ClientSatisfaction from './ClientsSection/ClientSatisfaction'
import ClientRetention from './ClientsSection/ClientRetention'

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
            className="h-full flex flex-col gap-4 relative"
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
            <motion.div className="h-[55%] flex gap-4" variants={rowVariants}>
                <Card className="w-[32%]"><ClientList /></Card>
                <Card className="w-[68%]"><AddAppointment /></Card>
            </motion.div>

            {/* Row 3 */}
            <motion.div className="h-[30%] flex gap-4" variants={rowVariants}>
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