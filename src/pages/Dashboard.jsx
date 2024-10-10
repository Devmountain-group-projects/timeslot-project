import React from 'react'
import BusinessDashboard from '../components/Dashboard/BusinessDashboard'
import ClientDashboard from '../components/Dashboard/ClientDashboard'

const Dashboard = () => {
    return (
        <div>
            <ClientDashboard />
            <BusinessDashboard />
        </div>
    )
}

export default Dashboard