import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../../assets/images/logowhite.png'
import User6 from '../../assets/images/user6.png'

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
import { userLogout } from '../../context/AuthContext';

const SideBar = () => {
    const logoutTrigger = () => {
        console.log("logging user out")
        userLogout()
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
                    <MenuItem href="/dashboard" icon={<HiMiniSquares2X2 />}>Dashboard</MenuItem>
                    <MenuItem href="/appointments" icon={<FaRegCalendarCheck />}>Appointments</MenuItem>
                    <MenuItem href="/services" icon={<MdHomeRepairService />}>Services</MenuItem>
                    <MenuItem href="/clients" icon={<FaUsers />}>Clients</MenuItem>
                    <MenuItem href="/reviews" icon={<MdRateReview />}>Reviews & Feedback</MenuItem>
                </MenuSection>

                <MenuSection title="Other Menu">
                    <MenuItem href="/payments" icon={<RiMoneyDollarCircleFill />}>Payments & Invoicing</MenuItem>
                    <MenuItem href="/calendar" icon={<FaRegCalendarAlt />}>Calendar</MenuItem>
                </MenuSection>

                <MenuSection title="Help & Settings">
                    <MenuItem href="/settings" icon={<IoMdSettings />}>Account Settings</MenuItem>
                    <MenuItem href="/help" icon={<MdLiveHelp />}>Help & Support</MenuItem>
                    {/* <MenuItem href="/" icon={<RiLogoutBoxFill />} >Logout</MenuItem> */}
                    <Link onClick={logoutTrigger} to="/" className="flex items-center py-1 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors, mb-1 text-sm"><RiLogoutBoxFill  className="mr-2 text-lg"/>Logout</Link>
                </MenuSection>
            </nav>

            {/* User Profile */}
            <div className="mt-auto">
                <div className="flex items-center bg-white bg-opacity-10 rounded-full gap-4 py-1 px-2">
                    <img src={User6} alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                        <div className="text-base font-semibold">John Doe</div>
                        <div className="text-sm opacity-75">Business Owner</div>
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

const MenuItem = ({ href, icon, children }) => (
    <li className="mb-1 text-sm">
        <Link to={href} className="flex items-center py-1 px-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors">
            {icon && <span className="mr-2 text-lg">{icon}</span>}
            {children}
        </Link>
    </li>
)

export default SideBar