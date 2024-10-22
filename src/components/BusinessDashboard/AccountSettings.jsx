import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BasicInfo from './AccountSettings/BasicInfo';
import BusinessInfo from './AccountSettings/BusinessInfo';
import Security from './AccountSettings/Security';
import DeleteAccount from './AccountSettings/DeleteAccount';
import { IoMdSettings } from "react-icons/io";
import { FaUserGear } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const AccountSettings = () => {
    const [activeView, setActiveView] = useState('basicInfo');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderContent = () => {
        switch (activeView) {
            case 'basicInfo':
                return <BasicInfo />;
            case 'businessInfo':
                return <BusinessInfo />;
            case 'security':
                return <Security />;
            case 'deleteAccount':
                return <DeleteAccount />;
            default:
                return <BasicInfo />;
        }
    };

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
    );

    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Mobile header */}
            <motion.div
                className="xl:hidden mb-4 flex justify-between items-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.button
                    onClick={toggleMenu}
                    className="text-gray-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IoMdMenu size={24} />
                </motion.button>
                <motion.h2
                    className="text-lg font-bold flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <IoMdSettings size={24} className="mr-2" />
                    Account Settings
                </motion.h2>
                <div className="w-8" />
            </motion.div>

            <div className="flex relative">
                {/* Sidebar for xl screens */}
                <motion.div
                    className="hidden xl:block w-[17%] pr-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-lg font-bold mb-4 flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <IoMdSettings size={24} className="mr-2" />
                        Account Settings
                    </motion.h2>
                    <SidebarContent />
                </motion.div>

                {/* Content Area */}
                <div className="w-full xl:w-[83%]">
                    {/* Dropdown menu for small to large screens */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            className={`xl:hidden bg-white border-2 border-gray-300 overflow-hidden rounded-lg shadow-lg mb-4`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: isOpen ? 'auto' : 0,
                                opacity: isOpen ? 1 : 0,
                                border: isOpen ? '2px solid #e5e7eb' : '0px solid transparent'
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className={`${isOpen ? 'p-4' : 'p-0'}`}>
                                <SidebarContent />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        className="h-full rounded-xl overflow-y-auto"
                        key={activeView}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const MenuItem = ({ view, icon, children, currentView, setCurrentView, closeMenu }) => {
    const isActive = currentView === view;

    const handleClick = () => {
        setCurrentView(view);
        closeMenu();
    };

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
    );
};

export default AccountSettings;