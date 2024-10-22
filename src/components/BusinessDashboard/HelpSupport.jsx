import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './HelpAndSupport/Intro';
import Tutorials from './HelpAndSupport/Tutorials';
import Troubleshooting from './HelpAndSupport/Troubleshooting';
import SupportChannels from './HelpAndSupport/SupportChannels';
import LiveSupportHours from './HelpAndSupport/LiveSupportHours';
import FAQ from './HelpAndSupport/FAQ';
import ContactUs from './HelpAndSupport/ContactUs';
import { IoMdMenu, IoMdHelpCircle } from "react-icons/io";
import { FaBook, FaQuestion } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineContactSupport, MdAccessTime, MdContactPhone } from "react-icons/md";

const HelpSupport = () => {
    const [activeView, setActiveView] = useState('intro');
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

    const navigateToFAQ = () => {
        setActiveView('faq');
        setIsOpen(false);
    };

    const renderContent = () => {
        switch (activeView) {
            case 'intro':
                return <Intro onNavigateToFAQ={navigateToFAQ} />;
            case 'tutorials':
                return <Tutorials />;
            case 'troubleshooting':
                return <Troubleshooting />;
            case 'supportChannels':
                return <SupportChannels />;
            case 'faq':
                return <FAQ />;
            case 'liveSupportHours':
                return <LiveSupportHours />;
            case 'contactUs':
                return <ContactUs />;
            default:
                return <Intro onNavigateToFAQ={navigateToFAQ} />;
        }
    };

    const SidebarContent = () => (
        <nav className="space-y-2">
            <MenuItem
                view="intro"
                icon={<IoMdHelpCircle size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Getting Started
            </MenuItem>
            <MenuItem
                view="tutorials"
                icon={<FaBook size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Tutorials
            </MenuItem>
            <MenuItem
                view="troubleshooting"
                icon={<BiSupport size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Troubleshooting
            </MenuItem>
            <MenuItem
                view="supportChannels"
                icon={<MdOutlineContactSupport size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Support Channels
            </MenuItem>
            <MenuItem
                view="liveSupportHours"
                icon={<MdAccessTime size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Live Support Hours
            </MenuItem>
            <MenuItem
                view="faq"
                icon={<FaQuestion size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                FAQ
            </MenuItem>
            <MenuItem
                view="contactUs"
                icon={<MdContactPhone size={18} />}
                currentView={activeView}
                setCurrentView={setActiveView}
                closeMenu={() => setIsOpen(false)}
            >
                Contact Us
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
                    <IoMdHelpCircle size={24} className="mr-2" />
                    Help & Support
                </motion.h2>
                <div className="w-8" />
            </motion.div>

            <div className="flex relative">
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
                        <IoMdHelpCircle size={24} className="mr-2" />
                        Help & Support
                    </motion.h2>
                    <SidebarContent />
                </motion.div>

                <div className="w-full xl:w-[83%]">
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

export default HelpSupport;