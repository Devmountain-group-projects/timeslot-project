import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LogoWhite from '../../assets/images/logowhite.png'
import User6 from '../../assets/images/placeholderavatar.png'
import { Link, useNavigate } from 'react-router-dom'

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
import { IoMdMenu } from "react-icons/io";
import { userLogout, userCheck } from '../../context/AuthContext';

const SideBar = ({ currentView, setCurrentView }) => {
    const isLoggedIn = useSelector((state) => state.loggedIn)
    const [name, setName] = useState(null)
    const [business, setBusiness] = useState(null)
    const [photo, setPhoto] = useState(User6)
    const [loggedIn, setloggedIn] = useState(isLoggedIn)
    const [isOpen, setIsOpen] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        sessionCheck()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const logoutTrigger = () => {
        console.log("logging user out")
        setIsOpen(false)
        userLogout()
        nav("/")
    }

    const sessionCheck = async () => {
        const res = await userCheck()
        if (res.success) {
            setName(res.user.name)
            setBusiness(res.user.business[0].business_name)
            setloggedIn(res.success)
            if (res.user.profile_picture === "Default") {
                setPhoto(User6)
            } else {
                setPhoto(res.user.profile_picture)
            }
        } else {
            setName("User Not logged in")
            setloggedIn(res.success)
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const SidebarContent = () => (
        <nav className="flex-1 overflow-y-auto">
            <div className="py-4 px-3">
                <MenuSection title="Main Menu">
                    <MenuItem view="dashboard" icon={<HiMiniSquares2X2 />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Dashboard</MenuItem>
                    <MenuItem view="clients" icon={<FaUsers />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Clients</MenuItem>
                    <MenuItem view="calendar" icon={<FaRegCalendarAlt />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Schedule</MenuItem>
                    <MenuItem view="reviews" icon={<MdRateReview />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Reviews & Feedback</MenuItem>
                </MenuSection>

                <MenuSection title="Other Menu">
                    <MenuItem view="payments" icon={<RiMoneyDollarCircleFill />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Revenue & Invoicing</MenuItem>
                    <MenuItem view="analytics" icon={<SiGoogleanalytics />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Analytics</MenuItem>
                </MenuSection>

                <MenuSection title="Help & Settings">
                    <MenuItem view="settings" icon={<IoMdSettings />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Account Settings</MenuItem>
                    <MenuItem view="help" icon={<MdLiveHelp />} currentView={currentView} setCurrentView={setCurrentView} closeMenu={() => setIsOpen(false)}>Help & Support</MenuItem>
                    <button onClick={logoutTrigger} className="flex items-center py-1 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors mb-1 text-sm w-full">
                        <RiLogoutBoxFill className="mr-2 text-lg" />
                        Logout
                    </button>
                </MenuSection>
            </div>
        </nav>
    )

    const UserProfile = () => (
        <div className="flex-shrink-0 py-4 px-3">
            <div className="flex items-center bg-white bg-opacity-10 rounded-full gap-4 py-1 px-2">
                <img src={photo} alt="User" className="w-10 h-10 rounded-full" />
                <div>
                    <div className="text-sm font-semibold">{name}</div>
                    <div className="text-xs opacity-75">{business}</div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* Hamburger menu at the top */}
            <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-secondary p-4 flex justify-between items-center">
                <button onClick={toggleMenu} className="text-white">
                    <IoMdMenu size={24} />
                </button>
                <img src={LogoWhite} alt="Logo" className="h-8" />
            </div>

            {/* Dropdown menu for small to large screens */}
            <div
                className={`xl:hidden fixed top-16 left-0 right-0 bg-secondary text-white overflow-hidden transition-all duration-300 ease-in-out z-40 ${isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className={`h-full flex flex-col transition-all duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-4'}`}>
                    <SidebarContent />
                    <UserProfile />
                </div>
            </div>

            {/* Sidebar for extra large screens */}
            <div className="hidden xl:flex flex-col h-full w-[14%] bg-secondary text-white">
                {/* Logo */}
                <div className="flex-shrink-0 py-4 px-3">
                    <Link to="/">
                        <img src={LogoWhite} alt="Logo" className="w-[75%] mx-auto" />
                    </Link>
                </div>
                <div className="flex flex-col min-h-0 flex-1">
                    <SidebarContent />
                    <UserProfile />
                </div>
            </div>
        </>
    )
}

const MenuSection = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-base uppercase mb-2 opacity-75">{title}</h3>
        <ul className="space-y-2 py-2">{children}</ul>
    </div>
)

const MenuItem = ({ view, icon, children, currentView, setCurrentView, closeMenu }) => {
    const isActive = currentView === view;

    const handleClick = () => {
        setCurrentView(view)
        closeMenu()
    }

    return (
        <li className="mb-1 text-sm">
            <button
                onClick={handleClick}
                className={`flex items-center py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors w-full text-left ${isActive ? 'bg-white bg-opacity-75 text-secondary' : ''}`}
            >
                {icon && <span className="mr-2 text-base">{icon}</span>}
                {children}
            </button>
        </li>
    )
}

export default SideBar