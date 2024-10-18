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
            className="h-full flex flex-col gap-4 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Row 1 */}
            <motion.div className="flex-shrink-0 flex gap-4" variants={rowVariants}>
                <Card className="w-1/4"><TotalClients /></Card>
                <Card className="w-1/4"><NewClients /></Card>
                <Card className="w-1/4"><TopClients /></Card>
                <Card className="w-1/4"><InactiveClients /></Card>
            </motion.div>

            {/* Row 2 */}
            <motion.div className="flex-grow flex gap-4 min-h-0" variants={rowVariants}>
                <Card className="w-1/3 overflow-hidden"><ClientList /></Card>
                <Card className="w-2/3 overflow-hidden"><AddAppointment /></Card>
            </motion.div>

            {/* Row 3 */}
            <motion.div className="flex-shrink-0 flex gap-4" variants={rowVariants}>
                <Card className="w-1/3"><ReturningClients /></Card>
                <Card className="w-1/3"><ClientSatisfaction /></Card>
                <Card className="w-1/3"><ClientRetention /></Card>
            </motion.div>
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-sm ${className}`}>
        {children}
    </div>
)

export default AllClients