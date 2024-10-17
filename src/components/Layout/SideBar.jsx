import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LogoWhite from '../../assets/images/logowhite.png'
import User6 from '../../assets/images/user6.png'
import { Link } from 'react-router-dom'

// Sidebar Icons
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLiveHelp } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { userLogout, userCheck } from '../../context/AuthContext';

const SideBar = ({ currentView, setCurrentView }) => {
    const isLoggedIn = useSelector((state) => state.loggedIn)
    const [name, setName] = useState(null)
    const [business, setBusiness] = useState(null)
    const [loggedIn, setloggedIn] = useState(isLoggedIn)

    useEffect(() => {
        sessionCheck()
    }, [])

    const logoutTrigger = () => {
        console.log("logging user out")
        userLogout()
    }

    const sessionCheck = async () => {
        const res = await userCheck()
        console.log("Test: ", res)
        if (res.success) {
            setName(res.user.name)
            setBusiness(res.user.business[0].business_name)
            setloggedIn(res.success)
        } else {
            setName("User Not logged in")
            setloggedIn(res.success)
        }
    }

    return (
        <div className="flex flex-col h-full py-4 px-3">
            {/* Logo */}
            <div className="mb-14 mt-4">
                <Link to="/">
                    <img src={LogoWhite} alt="Logo" className="w-[75%] mx-auto" />
                </Link>
            </div>

            {/* Menu Items */}
            <nav className="flex-grow">
                <MenuSection title="Main Menu">
                    <MenuItem view="dashboard" icon={<HiMiniSquares2X2 />} currentView={currentView} setCurrentView={setCurrentView}>Dashboard</MenuItem>
                    {/* <MenuItem view="appointments" icon={<FaRegCalendarCheck />} currentView={currentView} setCurrentView={setCurrentView}>Appointments</MenuItem> */}
                    {/* <MenuItem view="services" icon={<MdHomeRepairService />} currentView={currentView} setCurrentView={setCurrentView}>Services</MenuItem> */}
                    <MenuItem view="clients" icon={<FaUsers />} currentView={currentView} setCurrentView={setCurrentView}>Clients</MenuItem>
                    <MenuItem view="calendar" icon={<FaRegCalendarAlt />} currentView={currentView} setCurrentView={setCurrentView}>Schedule</MenuItem>
                    <MenuItem view="reviews" icon={<MdRateReview />} currentView={currentView} setCurrentView={setCurrentView}>Reviews & Feedback</MenuItem>
                </MenuSection>

                {/* <MenuSection title="Other Menu">
                    <MenuItem view="payments" icon={<RiMoneyDollarCircleFill />} currentView={currentView} setCurrentView={setCurrentView}>Payments & Invoicing</MenuItem>
                </MenuSection> */}

                <MenuSection title="Help & Settings">
                    <MenuItem view="settings" icon={<IoMdSettings />} currentView={currentView} setCurrentView={setCurrentView}>Account Settings</MenuItem>
                    <MenuItem view="help" icon={<MdLiveHelp />} currentView={currentView} setCurrentView={setCurrentView}>Help & Support</MenuItem>
                    <button onClick={logoutTrigger} className="flex items-center py-1 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors mb-1 text-sm w-full">
                        <RiLogoutBoxFill className="mr-2 text-lg" />
                        Logout
                    </button>
                </MenuSection>
            </nav>

            {/* User Profile */}
            <div className="mt-auto">
                <div className="flex items-center bg-white bg-opacity-10 rounded-full gap-4 py-1 px-2">
                    <img src={User6} alt="User" className="w-10 h-10 rounded-full" />
                    <div>
                        <div className="text-sm font-semibold">{name}</div>
                        <div className="text-xs opacity-75">{business}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MenuSection = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-base uppercase mb-2 opacity-75">{title}</h3>
        <ul className="space-y-2 py-2">{children}</ul>
    </div>
)

const MenuItem = ({ view, icon, children, currentView, setCurrentView }) => {
    const isActive = currentView === view;
    return (
        <li className="mb-1 text-sm">
            <button
                onClick={() => setCurrentView(view)}
                className={`flex items-center py-1 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors w-full text-left ${isActive ? 'bg-white bg-opacity-75 text-secondary' : ''}`}
            >
                {icon && <span className="mr-2 text-lg">{icon}</span>}
                {children}
            </button>
        </li>
    )
}

export default SideBar