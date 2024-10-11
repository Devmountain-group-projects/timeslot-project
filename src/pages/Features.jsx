import React from 'react'
import Intro from '../components/Features/Intro'
import AppoitmentScheduling from '../components/Features/AppoitmentScheduling'
import CalendarManagement from '../components/Features/CalendarManagement'
import PowerfulFeatures from '../components/Features/PowerfulFeatures'
import ClientReviews from '../components/Features/ClientReviews'
import CustomBranding from '../components/Features/CustomBranding'
import SecurityProtection from '../components/Features/SecurityProtection'
import SupportAndCustomerSuccess from '../components/Features/SupportAndCustomerSuccess'
import Subscribe from '../components/Home/Subscribe'

const Features = () => {
    return (
        <div>
            <Intro />
            <AppoitmentScheduling />
            <CalendarManagement />
            <PowerfulFeatures />
            <ClientReviews />
            <CustomBranding />
            <SecurityProtection />
            <SupportAndCustomerSuccess />
            <Subscribe />
        </div>
    )
}

export default Features