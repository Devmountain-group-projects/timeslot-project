import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Layout/SideBar';
import UpcomingAppts from '../BusinessDashboard/UpcomingAppts';
import RevenueOverview from '../BusinessDashboard/RevenueOverview';
import ClientReviews from '../BusinessDashboard/ClientReviews';
import Notifications from '../BusinessDashboard/Notifications';
import Analytics from '../BusinessDashboard/Analytics';
import OngoingAppts from '../BusinessDashboard/OngoingAppts';
import ServiceMgmt from '../BusinessDashboard/ServiceMgmt';
import ClientMgmt from '../BusinessDashboard/ClientMgmt';
import CalendarOverview from '../BusinessDashboard/CalendarOverview';
import FollowUp from '../BusinessDashboard/FollowUp';
import ReviewReport from '../BusinessDashboard/ReviewReport';
import { AppointmentProvider } from "../../context/ApptContext.jsx";

// Sidebar Links
import AccountSettings from '../BusinessDashboard/AccountSettings';
import HelpSupport from '../BusinessDashboard/HelpSupport';
import Schedule from '../BusinessDashboard/Schedule';
import AllReviews from '../BusinessDashboard/AllReviews';
import AllClients from '../BusinessDashboard/AllClients';
import AllAnalytics from '../BusinessDashboard/AllAnalytics.jsx';
import AllAppointments from '../BusinessDashboard/AllAppointments';
import PaymentsInvoicing from '../BusinessDashboard/PaymentsInvoicing';

const BusinessDashboard = () => {
    const location = useLocation();
    const [currentView, setCurrentView] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        if (location.state?.view === 'calendar') {
            setCurrentView('calendar');
        }
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 1280);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [location]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const handleViewAllClients = () => {
        setCurrentView('clients');
    };

    const handleViewAllReviews = () => {
        setCurrentView('reviews');
    };

    const handleViewPaymentsInvoicing = () => {
        setCurrentView('payments');
    };

    const handleViewFollowUp = () => {
        setCurrentView('clients');
    };

    const handleViewCalendar = () => {
        setCurrentView('calendar');
    };

    const handleViewAnalytics = () => {
        setCurrentView('analytics');
    };

    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return (
                    <motion.div
                        className="h-full flex flex-col gap-4 overflow-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Top 4 Cards */}
                        <motion.div className="flex-shrink-0 flex flex-col sm:flex-row flex-wrap gap-4" variants={rowVariants}>
                            <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px]"><UpcomingAppts onViewAllClients={handleViewAllClients} /></Card>
                            <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px]"><RevenueOverview onViewPaymentsInvoicing={handleViewPaymentsInvoicing} /></Card>
                            <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px]"><ClientReviews onViewAllReviews={handleViewAllReviews} /></Card>
                            <Card className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] h-[200px]"><Notifications onViewAllClients={handleViewAllClients} /></Card>
                        </motion.div>
                        {/* Middle 2 Cards */}
                        <motion.div className="flex-grow flex flex-col md:flex-row gap-4" variants={rowVariants}>
                            <Card className="w-full md:w-[40%] h-full md:h-auto"><CalendarOverview onViewCalendar={handleViewCalendar} /></Card>
                            <Card className="w-full md:w-[60%] h-full md:h-auto"><OngoingAppts onViewAllClients={handleViewAllClients} onViewCalendar={handleViewCalendar} /></Card>
                        </motion.div>
                        {/* Bottom 3 Cards */}
                        <motion.div className="flex-shrink-0 flex flex-col md:flex-row gap-4" variants={rowVariants}>
                            <Card className="w-full md:w-1/3 h-[300px]"><Analytics onViewAllAnalytics={handleViewAnalytics} /></Card>
                            <Card className="w-full md:w-1/3 h-[300px]"><FollowUp onViewFollowUp={handleViewFollowUp} /></Card>
                            <Card className="w-full md:w-1/3 h-[300px]"><ReviewReport onViewAllReviews={handleViewAllReviews} /></Card>
                        </motion.div>
                    </motion.div>
                );
            case 'appointments':
                return <AllAppointments />;
            case 'analytics':
                return <AllAnalytics />;
            case 'clients':
                return <AllClients />;
            case 'reviews':
                return <AllReviews />;
            case 'payments':
                return <PaymentsInvoicing />;
            case 'calendar':
                return <Schedule selectedDate={location.state?.selectedDate} />;
            case 'settings':
                return <AccountSettings />;
            case 'help':
                return <HelpSupport />;
            default:
                return <div>404: Page not found</div>;
        }
    };

    return (
        <div className="flex flex-col xl:flex-row h-screen bg-secondary">
            {/* Sidebar */}
            <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

            {/* Main Content */}
            <div className="flex-grow pt-0 xl:pt-4 pb-4 px-4 xl:pl-0 overflow-hidden xl:w-[86%] mt-16 xl:mt-0">
                <div className="h-full rounded-xl p-4 bg-gradient-to-br from-gray-100 to-gray-300 overflow-auto">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl flex items-center justify-center shadow-sm overflow-auto ${className}`}>
        {children}
    </div>
);

const WrappedBusinessDashboard = () => {
    return (
        <AppointmentProvider>
            <BusinessDashboard />
        </AppointmentProvider>
    );
};

export default WrappedBusinessDashboard;