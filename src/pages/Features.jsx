import React from 'react'
import Intro from '../components/Features/Intro'
import AppoitmentScheduling from '../components/Features/AppoitmentScheduling'
import CalendarManagement from '../components/Features/CalendarManagement'
import AutomatedNotifications from '../components/Features/AutomatedNotifications'
import Listings from '../components/Features/Listings'
import PaymentAndInvoicing from '../components/Features/PaymentAndInvoicing'
import MultiUser from '../components/Features/MultiUser'
import ClientReviews from '../components/Features/ClientReviews'
import CustomBranding from '../components/Features/CustomBranding'
import AnalyticsPerfomance from '../components/Features/AnalyticsPerfomance'
import SecurityProtection from '../components/Features/SecurityProtection'
import SupportAndCustomerSuccess from '../components/Features/SupportAndCustomerSuccess'

const Features = () => {
    return (
        <div>
            <Intro />
            <AppoitmentScheduling />
            <CalendarManagement />
            <AutomatedNotifications />
            <Listings />
            <PaymentAndInvoicing />
            <MultiUser />
            <ClientReviews />
            <CustomBranding />
            <AnalyticsPerfomance />
            <SecurityProtection />
            <SupportAndCustomerSuccess />
        </div>
    )
}

export default Features