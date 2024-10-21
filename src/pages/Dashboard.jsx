import React from 'react'
import BusinessDashboard from '../components/Dashboard/BusinessDashboard'
import ClientDashboard from '../components/Dashboard/ClientDashboard'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.loggedIn)
    const role = useSelector((state) => state.role)
    console.log("Here is isLoggedIn: ", isLoggedIn, "and here is role: ", role)
    return (
        <div>
            {/* {isLoggedIn} */}
            {/* {role === "user" && <ClientDashboard />} */}
            {role === "user" && <BusinessDashboard />}
            {role === "business" && <BusinessDashboard />}
            {role === null && <BusinessDashboard />}

        </div>
    )
}

export default Dashboard