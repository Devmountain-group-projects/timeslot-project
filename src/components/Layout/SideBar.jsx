import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LogoWhite from '../../assets/images/logowhite.png'
import User6 from '../../assets/images/user6.png'
import { Link } from 'react-router-dom'

// Sidebar Icons
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLiveHelp } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { userLogout, userCheck } from '../../context/AuthContext';

const SideBar = ({ currentView, setCurrentView, isMobile }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isLoggedIn = useSelector((state) => state.loggedIn)
    const [name, setName] = useState(null)
    const [business, setBusiness] = useState(null)

    React.useEffect(() => {
        sessionCheck()
    }, [])

    const logoutTrigger = () => {
        console.log("logging user out")
        userLogout()
    }

    const sessionCheck = async () => {
        const res = await userCheck()
        if (res.success) {
            setName(res.user.name)
            setBusiness(res.user.business[0].business_name)
        } else {
            setName("User Not logged in")
        }
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const menuItems = [
        { view: "dashboard", icon: <HiMiniSquares2X2 />, label: "Dashboard" },
        { view: "clients", icon: <FaUsers />, label: "Clients" },
        { view: "calendar", icon: <FaRegCalendarAlt />, label: "Schedule" },
        { view: "reviews", icon: <MdRateReview />, label: "Reviews & Feedback" },
        { view: "payments", icon: <RiMoneyDollarCircleFill />, label: "Revenue & Invoicing" },
        { view: "analytics", icon: <SiGoogleanalytics />, label: "Analytics" },
        { view: "settings", icon: <IoMdSettings />, label: "Account Settings" },
        { view: "help", icon: <MdLiveHelp />, label: "Help & Support" },
    ]

    const renderMenuItems = () => (
        <ul className="space-y-2">
            {menuItems.map((item) => (
                <MenuItem
                    key={item.view}
                    view={item.view}
                    icon={item.icon}
                    currentView={currentView}
                    setCurrentView={setCurrentView}
                    onClick={() => isMobile && setIsMenuOpen(false)}
                >
                    {item.label}
                </MenuItem>
            ))}
            <li>
                <button onClick={logoutTrigger} className="flex items-center py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors w-full text-left">
                    <RiLogoutBoxFill className="mr-2 text-lg" />
                    Logout
                </button>
            </li>
        </ul>
    )

    if (isMobile) {
        return (
            <div className="bg-secondary text-white p-2">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={LogoWhite} alt="Logo" className="h-8" />
                    </Link>
                    <button onClick={toggleMenu} className="p-2">
                        <HiMenu size={24} />
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="mt-2">
                        {renderMenuItems()}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full py-4 px-3">
            <div className="mb-8">
                <Link to="/">
                    <img src={LogoWhite} alt="Logo" className="w-[75%] mx-auto" />
                </Link>
            </div>
            <nav className="flex-grow overflow-y-auto">
                {renderMenuItems()}
            </nav>
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

const MenuItem = ({ view, icon, children, currentView, setCurrentView, onClick }) => {
    const isActive = currentView === view;
    return (
        <li className="mb-1 text-sm">
            <button
                onClick={() => {
                    setCurrentView(view);
                    onClick && onClick();
                }}
                className={`flex items-center py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors w-full text-left ${isActive ? 'bg-white bg-opacity-75 text-secondary' : ''}`}
            >
                {icon && <span className="mr-2 text-base">{icon}</span>}
                {children}
            </button>
        </li>
    )
}

export default SideBar