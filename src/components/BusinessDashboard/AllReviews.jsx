import React from 'react'
import { motion } from 'framer-motion'
// Row 1
import Overview from './ReviewsSection/Overview'
import FeaturedReviews from './ReviewsSection/FeaturedReviews'
import ReviewHistoryTrend from './ReviewsSection/ReviewHistoryTrend'
// Row 2
// Column 1
import ReviewMgmt from './ReviewsSection/ReviewMgmt'
import ReviewsByService from './ReviewsSection/ReviewsByService'
// Column 2
import RecentReviews from './ReviewsSection/RecentReviews'

const AllReviews = () => {
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
            <motion.div className="h-[30%] flex gap-4" variants={rowVariants}>
                <Card className="w-[20%]"><Overview /></Card>
                <Card className="w-[40%]"><FeaturedReviews /></Card>
                <Card className="w-[40%]"><ReviewHistoryTrend /></Card>
            </motion.div>

            {/* Row 2 */}
            <motion.div className="h-[70%] flex gap-4" variants={rowVariants}>
                {/* Column 1 */}
                <div className="w-[60%] flex flex-col gap-4">
                    <Card className="h-[60%]"><ReviewMgmt /></Card>
                    <Card className="h-[40%]"><ReviewsByService /></Card>
                </div>
                {/* Column 2 */}
                <Card className="w-[40%]"><RecentReviews /></Card>
            </motion.div>
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
)

export default AllReviews