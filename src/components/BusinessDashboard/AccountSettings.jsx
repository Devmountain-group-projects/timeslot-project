import React, { useState, useEffect } from 'react'
import BasicInfo from './AccountSettings/BasicInfo'
import BusinessInfo from './AccountSettings/BusinessInfo'
import Security from './AccountSettings/Security'
import DeleteAccount from './AccountSettings/DeleteAccount'
import { IoMdSettings } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const AccountSettings = () => {
    const [activeView, setActiveView] = useState('basicInfo')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const renderContent = () => {
        switch (activeView) {
            case 'basicInfo':
                return <BasicInfo />
            case 'businessInfo':
                return <BusinessInfo />
            case 'security':
                return <Security />
            case 'deleteAccount':
                return <DeleteAccount />
            default:
                return <BasicInfo />
        }
    }

    const SidebarContent = () => (
        <nav className="space-y-2">
            <MenuItem
                view="basicInfo"
                icon={<FaUserGear size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Basic Info
            </MenuItem>
            <MenuItem
                view="businessInfo"
                icon={<BsBuildingFillGear size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Business Info
            </MenuItem>
            <MenuItem
                view="security"
                icon={<GrShieldSecurity size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Security
            </MenuItem>
            <MenuItem
                view="deleteAccount"
                icon={<MdDeleteForever size={18} className="text-red-500" />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Delete Account
            </MenuItem>
        </nav>
    )

    return (
        <div className="h-full">
            {/* Mobile header */}
            <div className="xl:hidden mb-4 flex justify-between items-center">
                <button onClick={toggleMenu} className="text-gray-800">
                    <IoMdMenu size={24} />
                </button>
                <h2 className="text-lg font-bold flex items-center">
                    <IoMdSettings size={24} className="mr-2" />
                    Account Settings
                </h2>
                <div className="w-8" />
            </div>

            <div className="flex relative">
                {/* Sidebar for xl screens */}
                <div className="hidden xl:block w-[17%] pr-3">
                    <h2 className="text-lg font-bold mb-4 flex items-center">
                        <IoMdSettings size={24} className="mr-2" />
                        Account Settings
                    </h2>
                    <SidebarContent />
                </div>

                {/* Content Area */}
                <div className="w-full xl:w-[83%]">
                    {/* Dropdown menu for small to large screens */}
                    <div className={`xl:hidden bg-white border-2 border-gray-300 overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg mb-4 ${isOpen ? 'max-h-[400px] p-4' : 'max-h-0 p-0 border-0'
                        }`}>
                        <SidebarContent />
                    </div>

                    <div className="h-full rounded-xl overflow-y-auto">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

const MenuItem = ({ view, icon, children, currentView, setCurrentView, closeMenu }) => {
    const isActive = currentView === view;

    const handleClick = () => {
        setCurrentView(view)
        closeMenu()
    }

    return (
        <button
            onClick={handleClick}
            className={`flex items-center w-full text-left text-xs md:text-sm py-2 px-3 mb-2 rounded transition-colors duration-200 ${isActive
                ? 'bg-secondary text-white'
                : 'hover:bg-gray-200'
                }`}
        >
            <span className="mr-2">{icon}</span>
            {children}
        </button>
    )
}

export default AccountSettings