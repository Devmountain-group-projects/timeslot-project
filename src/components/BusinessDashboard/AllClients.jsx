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
            className="h-full flex flex-col gap-4 overflow-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Row 1 */}
            <motion.div className="flex-shrink-0 flex flex-col sm:flex-row flex-wrap gap-4" variants={rowVariants}>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[150px] md:h-[150px]"><TotalClients /></Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[150px] md:h-[150px]"><NewClients /></Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[150px] md:h-[150px]"><TopClients /></Card>
                <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[150px] md:h-[150px]"><InactiveClients /></Card>
            </motion.div>

            {/* Row 2 */}
            <motion.div className="flex-grow flex flex-col md:flex-row gap-4" variants={rowVariants}>
                <Card className="w-full md:w-[30%] h-auto md:h-auto"><ClientList /></Card>
                <Card className="w-full md:w-[70%] h-auto md:h-auto"><AddAppointment /></Card>
            </motion.div>

            {/* Row 3 */}
            <motion.div className="flex-shrink-0 flex flex-col md:flex-row gap-4" variants={rowVariants}>
                <Card className="w-full md:w-1/3 h-[200px] md:h-[230px]"><ReturningClients /></Card>
                <Card className="w-full md:w-1/3 h-[200px] md:h-[230px]"><ClientSatisfaction /></Card>
                <Card className="w-full md:w-1/3 h-[200px] md:h-[230px]"><ClientRetention /></Card>
            </motion.div>
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-sm overflow-auto ${className}`}>
        {children}
    </div>
)

export default AllClients