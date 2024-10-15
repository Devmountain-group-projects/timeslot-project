import React, { useState } from 'react'
import Availability from './AccountSettings/Availability'
import BasicInfo from './AccountSettings/BasicInfo'
import BusinessInfo from './AccountSettings/BusinessInfo'
import Security from './AccountSettings/Security'
import DeleteAccount from './AccountSettings/DeleteAccount'
import { IoMdSettings } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";
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
            case 'availability':
                return <Availability />
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
                <h2 className="text-lg font-bold mb-4">
                    <IoMdSettings size={24} className="inline mr-2 animate-spin" />
                    Account Settings
                </h2>
                <nav>
                    <SidebarLink
                        active={activeView === 'basicInfo'}
                        onClick={() => setActiveView('basicInfo')}
                    >
                        <FaUserGear size={18} className='inline mr-2' />
                        Basic Info
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'businessInfo'}
                        onClick={() => setActiveView('businessInfo')}
                    >
                        <BsBuildingFillGear size={18} className='inline mr-2' />
                        Business Info
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'availability'}
                        onClick={() => setActiveView('availability')}
                    >
                        <FaBusinessTime size={18} className='inline mr-2' />
                        Availability
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'security'}
                        onClick={() => setActiveView('security')}
                    >
                        <GrShieldSecurity size={18} className='inline mr-2' />
                        Security
                    </SidebarLink>
                    <SidebarLink
                        active={activeView === 'deleteAccount'}
                        onClick={() => setActiveView('deleteAccount')}
                    >
                        <MdDeleteForever size={18} className='inline mr-2 text-red-500' />
                        Delete Account
                    </SidebarLink>
                </nav>
            </div>

            {/* Content Area */}
            <div className="w-[83%]">
                <div className="bg-white rounded-xl shadow-lg h-full overflow-y-auto">
                    {/* <h2 className="text-2xl font-bold mb-4">
                        {activeView === 'basicInfo' && 'Basic Information'}
                        {activeView === 'businessInfo' && 'Business Information'}
                        {activeView === 'availability' && 'Availability'}
                        {activeView === 'security' && 'Security'}
                        {activeView === 'deleteAccount' && 'Delete your Account'}
                    </h2> */}
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

const SidebarLink = ({ active, onClick, children }) => (
    <button
        className={`block w-full text-left text-xs md:text-sm py-2 px-4 mb-2 rounded transition-colors duration-200 ${active
            ? 'bg-primary text-white'
            : 'hover:bg-gray-200'
            }`}
        onClick={onClick}
    >
        {children}
    </button>
)

export default AccountSettings