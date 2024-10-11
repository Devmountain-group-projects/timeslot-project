import React from 'react'
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
    return (
        <div className="flex h-screen bg-gradient-to-b from-secondary via:secondary to-primary">
            <div className="w-[14%] text-white">
                <Sidebar />
            </div>
            <div className="w-[86%] p-4">
                <div className="h-full grid grid-rows-[1fr_2fr_1fr] gap-4 rounded-lg p-4 bg-gradient-to-br from-gray-100 to-gray-300">
                    <div className="grid grid-cols-4 gap-4">
                        <Card><UpcomingAppts /></Card>
                        <Card><RevenueOverview /></Card>
                        <Card><ClientReviews /></Card>
                        <Card><Notifications /></Card>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <Card className="col-span-1"><CalendarOverview /></Card>
                        <div className="col-span-2 grid grid-rows-2 gap-4">
                            <Card><OngoingAppts /></Card>
                            <div className="grid grid-cols-2 gap-4">
                                <Card><ServiceMgmt /></Card>
                                <Card><ClientMgmt /></Card>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Card><Analytics /></Card>
                        <Card><FollowUp /></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ children, className = '' }) => (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center shadow-sm ${className}`}>
        {children}
    </div>
)

export default BusinessDashboard