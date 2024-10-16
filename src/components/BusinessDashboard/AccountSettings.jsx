import React, { useState } from 'react'
import BasicInfo from './AccountSettings/BasicInfo'
import BusinessInfo from './AccountSettings/BusinessInfo'
import Security from './AccountSettings/Security'
import DeleteAccount from './AccountSettings/DeleteAccount'
import { IoMdSettings } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const AccountSettings = () => {
    const [activeView, setActiveView] = useState('basicInfo')

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

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-[17%] pr-3">
                <h2 className="text-lg font-bold mb-4 flex items-center">
                    <IoMdSettings size={24} className="mr-2" />
                    Account Settings
                </h2>
                <nav>
                    <SidebarLink
                        active={activeView === 'basicInfo'}
                        onClick={() => setActiveView('basicInfo')}
                        icon={<FaUserGear size={18} />}
                    >
                        Basic Info
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'businessInfo'}
                        onClick={() => setActiveView('businessInfo')}
                        icon={<BsBuildingFillGear size={18} />}
                    >
                        Business Info
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'security'}
                        onClick={() => setActiveView('security')}
                        icon={<GrShieldSecurity size={18} />}
                    >
                        Security
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'deleteAccount'}
                        onClick={() => setActiveView('deleteAccount')}
                        icon={<MdDeleteForever size={18} className="text-red-500" />}
                    >
                        Delete Account
                    </SidebarLink>
                </nav>
            </div>

            {/* Content Area */}
            <div className="w-[83%]">
                <div className="h-full rounded-xl overflow-y-auto">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

const SidebarLink = ({ active, onClick, children, icon }) => (
    <button
        className={`flex items-center w-full text-left text-xs md:text-sm py-2 px-3 mb-2 rounded transition-colors duration-200 ${active
            ? 'bg-secondary text-white'
            : 'hover:bg-gray-200'
            }`}
        onClick={onClick}
    >
        <span className="mr-2">{icon}</span>
        {children}
    </button>
)

export default AccountSettings