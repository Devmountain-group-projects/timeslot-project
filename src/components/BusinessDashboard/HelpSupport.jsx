import React, { useState, useEffect } from 'react';
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
        <div className="h-full">
            <div className="xl:hidden mb-4 flex justify-between items-center">
                <button onClick={toggleMenu} className="text-gray-800">
                    <IoMdMenu size={24} />
                </button>
                <h2 className="text-lg font-bold flex items-center">
                    <IoMdHelpCircle size={24} className="mr-2" />
                    Help & Support
                </h2>
                <div className="w-8" />
            </div>

            <div className="flex relative">
                <div className="hidden xl:block w-[17%] pr-3">
                    <h2 className="text-lg font-bold mb-4 flex items-center">
                        <IoMdHelpCircle size={24} className="mr-2" />
                        Help & Support
                    </h2>
                    <SidebarContent />
                </div>

                <div className="w-full xl:w-[83%]">
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