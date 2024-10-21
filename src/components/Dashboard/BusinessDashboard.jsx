import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Sidebar from '../Layout/SideBar'
import UpcomingAppts from '../BusinessDashboard/UpcomingAppts'
import RevenueOverview from '../BusinessDashboard/RevenueOverview'
import ClientReviews from '../BusinessDashboard/ClientReviews'
import Notifications from '../BusinessDashboard/Notifications'
import Analytics from '../BusinessDashboard/Analytics'
import OngoingAppts from '../BusinessDashboard/OngoingAppts'
import CalendarOverview from '../BusinessDashboard/CalendarOverview'
import FollowUp from '../BusinessDashboard/FollowUp'
import ReviewReport from '../BusinessDashboard/ReviewReport'
import { AppointmentProvider } from "../../context/ApptContext.jsx";

// Sidebar Links
import AccountSettings from '../BusinessDashboard/AccountSettings'
import HelpSupport from '../BusinessDashboard/HelpSupport'
import Schedule from '../BusinessDashboard/Schedule'
import AllReviews from '../BusinessDashboard/AllReviews'
import AllClients from '../BusinessDashboard/AllClients'
import AllAnalytics from '../BusinessDashboard/AllAnalytics.jsx'
import AllAppointments from '../BusinessDashboard/AllAppointments'
import PaymentsInvoicing from '../BusinessDashboard/PaymentsInvoicing'

const BusinessDashboard = () => {
    const location = useLocation();
    const [currentView, setCurrentView] = useState('dashboard')
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (location.state?.view === 'calendar') {
            setCurrentView('calendar');
        }

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [location]);

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

    // Handler functions (unchanged)
    const handleViewAllClients = () => setCurrentView('clients');
    const handleViewAllReviews = () => setCurrentView('reviews');
    const handleViewPaymentsInvoicing = () => setCurrentView('payments');
    const handleViewFollowUp = () => setCurrentView('clients');
    const handleViewCalendar = () => setCurrentView('calendar');
    const handleViewAnalytics = () => setCurrentView('analytics');

    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return (
                    <motion.div
                        className="h-full flex flex-col gap-2 md:gap-4 overflow-hidden"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Top 4 Cards */}
                        <motion.div className="flex-shrink-0 h-[15%]" variants={rowVariants}>
                            {isMobile ? (
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="h-full"
                                >
                                    <SwiperSlide><Card><UpcomingAppts onViewAllClients={handleViewAllClients} /></Card></SwiperSlide>
                                    <SwiperSlide><Card><RevenueOverview onViewPaymentsInvoicing={handleViewPaymentsInvoicing} /></Card></SwiperSlide>
                                    <SwiperSlide><Card><ClientReviews onViewAllReviews={handleViewAllReviews} /></Card></SwiperSlide>
                                    <SwiperSlide><Card><Notifications onViewAllClients={handleViewAllClients} /></Card></SwiperSlide>
                                </Swiper>
                            ) : (
                                <div className="flex gap-4 h-full">
                                    <Card className="w-1/4"><UpcomingAppts onViewAllClients={handleViewAllClients} /></Card>
                                    <Card className="w-1/4"><RevenueOverview onViewPaymentsInvoicing={handleViewPaymentsInvoicing} /></Card>
                                    <Card className="w-1/4"><ClientReviews onViewAllReviews={handleViewAllReviews} /></Card>
                                    <Card className="w-1/4"><Notifications onViewAllClients={handleViewAllClients} /></Card>
                                </div>
                            )}
                        </motion.div>
                        {/* Middle 2 Cards */}
                        <motion.div className="flex-grow flex flex-col md:flex-row gap-2 md:gap-4 min-h-0" variants={rowVariants}>
                            <Card className="w-full md:w-[40%]"><CalendarOverview onViewCalendar={handleViewCalendar} /></Card>
                            <Card className="w-full md:w-[60%]"><OngoingAppts onViewAllClients={handleViewAllClients} onViewCalendar={handleViewCalendar} /></Card>
                        </motion.div>
                        {/* Bottom 3 Cards */}
                        <motion.div className="flex-shrink-0 h-[35%]" variants={rowVariants}>
                            {isMobile ? (
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="h-full"
                                >
                                    <SwiperSlide><Card className="overflow-hidden"><Analytics onViewAllAnalytics={handleViewAnalytics} /></Card></SwiperSlide>
                                    <SwiperSlide><Card className="overflow-hidden"><FollowUp onViewFollowUp={handleViewFollowUp} /></Card></SwiperSlide>
                                    <SwiperSlide><Card className="overflow-hidden"><ReviewReport onViewAllReviews={handleViewAllReviews} /></Card></SwiperSlide>
                                </Swiper>
                            ) : (
                                <div className="flex gap-4 h-full">
                                    <Card className="w-1/3 overflow-hidden"><Analytics onViewAllAnalytics={handleViewAnalytics} /></Card>
                                    <Card className="w-1/3 overflow-hidden"><FollowUp onViewFollowUp={handleViewFollowUp} /></Card>
                                    <Card className="w-1/3 overflow-hidden"><ReviewReport onViewAllReviews={handleViewAllReviews} /></Card>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )
            // Other cases remain unchanged
            case 'appointments':
                return <AllAppointments />
            case 'analytics':
                return <AllAnalytics />
            case 'clients':
                return <AllClients />
            case 'reviews':
                return <AllReviews />
            case 'payments':
                return <PaymentsInvoicing />
            case 'calendar':
                return <Schedule selectedDate={location.state?.selectedDate} />
            case 'settings':
                return <AccountSettings />
            case 'help':
                return <HelpSupport />
            default:
                return <div>404: Page not found</div>
        }
    }

    return (
        <div className="flex flex-col md:flex-row h-screen bg-secondary">
            {/* Sidebar Container */}
            <div className={`${isMobile ? 'w-full' : 'w-[14%]'} text-white`}>
                <Sidebar currentView={currentView} setCurrentView={setCurrentView} isMobile={isMobile} />
            </div>
            {/* Right Main Container */}
            <div className={`${isMobile ? 'w-full' : 'w-[86%]'} py-2 md:py-4 px-2 md:px-4 overflow-hidden`}>
                <div className="h-full rounded-xl p-4 bg-gradient-to-br from-gray-100 to-gray-300 overflow-auto">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
)

const WrappedBusinessDashboard = () => {
    return (
        <AppointmentProvider>
            <BusinessDashboard />
        </AppointmentProvider>
    )
}

export default WrappedBusinessDashboard