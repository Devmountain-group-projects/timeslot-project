import React from 'react'
import { motion } from 'framer-motion'
import Overview from './ReviewsSection/Overview'
import FeaturedReviews from './ReviewsSection/FeaturedReviews'
import ReviewHistoryTrend from './ReviewsSection/ReviewHistoryTrend'
import ReviewMgmt from './ReviewsSection/ReviewMgmt'
import ReviewsByService from './ReviewsSection/ReviewsByService'
import ClientSentiment from './ReviewsSection/ClientSentiment'

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
            className="h-full flex gap-4 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Column 1 - 60% width */}
            <div className="w-[60%] flex flex-col gap-4">
                {/* Top row - 30% height */}
                <motion.div className="h-[30%] flex gap-4" variants={rowVariants}>
                    <Card className="w-1/3"><Overview /></Card>
                    <Card className="w-2/3"><FeaturedReviews /></Card>
                </motion.div>
                {/* Bottom row - 70% height */}
                <motion.div className="h-[70%]" variants={rowVariants}>
                    <Card className="h-full overflow-hidden">
                        <ReviewMgmt />
                    </Card>
                </motion.div>
            </div>

            {/* Column 2 - 40% width */}
            <div className="w-[40%] flex flex-col gap-4">
                <motion.div className="h-1/3" variants={rowVariants}>
                    <Card className="h-full overflow-hidden"><ReviewHistoryTrend /></Card>
                </motion.div>
                <motion.div className="h-1/3" variants={rowVariants}>
                    <Card className="h-full overflow-hidden"><ClientSentiment /></Card>
                </motion.div>
                <motion.div className="h-1/3" variants={rowVariants}>
                    <Card className="h-full overflow-hidden"><ReviewsByService /></Card>
                </motion.div>
            </div>
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-sm ${className}`}>
        {children}
    </div>
)

export default AllReviews