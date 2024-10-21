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
            className="h-full flex flex-col gap-4 overflow-auto relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Column 1 */}
            <motion.div className="flex-shrink-0 flex flex-col lg:flex-row gap-4 lg:h-full" variants={rowVariants}>
                {/* Left section - Overview and Featured Reviews */}
                <div className="w-full lg:w-[60%] flex flex-col gap-4 lg:h-full">
                    {/* Top row with Overview and Featured Reviews */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:h-[30%]">
                        <Card className="w-full sm:w-1/3 h-[280px] lg:h-full">
                            <Overview />
                        </Card>
                        <Card className="w-full sm:w-2/3 h-[250px] lg:h-full">
                            <FeaturedReviews />
                        </Card>
                    </div>
                    {/* Review Management section */}
                    <Card className="flex-grow h-auto lg:h-[70%]">
                        <ReviewMgmt />
                    </Card>
                </div>

                {/* Right section - Trends and Stats */}
                <div className="w-full lg:w-[40%] flex flex-col gap-4 lg:h-full">
                    <Card className="h-[350px] lg:h-1/3">
                        <ReviewHistoryTrend />
                    </Card>
                    <Card className="h-[350px] lg:h-1/3">
                        <ClientSentiment />
                    </Card>
                    <Card className="h-[350px] lg:h-1/3">
                        <ReviewsByService />
                    </Card>
                </div>
            </motion.div>
        </motion.div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-sm overflow-auto ${className}`}>
        {children}
    </div>
)

export default AllReviews