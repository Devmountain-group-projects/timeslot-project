import React from 'react';
import { IoMdPlay } from "react-icons/io";
import { FaBook, FaVideo, FaRocket, FaChartLine } from 'react-icons/fa';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdBusiness } from 'react-icons/md';

const Tutorials = () => {
    const gettingStartedSteps = [
        {
            id: 1,
            title: "Create Your Account",
            description: "Learn how to set up your account and customize your profile settings.",
            duration: "5 mins"
        },
        {
            id: 2,
            title: "Configure Your Services",
            description: "Set up your service offerings, pricing, and availability.",
            duration: "8 mins"
        },
        {
            id: 3,
            title: "Master Your Calendar",
            description: "Master the calendar interface and booking management.",
            duration: "6 mins"
        }
    ];

    const videoTutorials = [
        {
            id: 1,
            title: "Quick Start Guide",
            thumbnail: "/api/placeholder/400/225",
            duration: "4:30",
            description: "Get up and running with Timeline Slot in under 5 minutes"
        },
        {
            id: 2,
            title: "Managing Appointments",
            thumbnail: "/api/placeholder/400/225",
            duration: "6:45",
            description: "Learn the ins and outs of appointment management"
        },
        {
            id: 3,
            title: "Calendar Sync Setup",
            thumbnail: "/api/placeholder/400/225",
            duration: "3:20",
            description: "Sync your Timeline Slot calendar with other platforms"
        }
    ];

    const popularGuides = [
        {
            id: 1,
            title: "Setting Up Your Services",
            description: "Complete guide to configuring your service offerings, durations, and pricing",
            icon: <MdBusiness size={20} />,
            link: "/guides/service-setup"
        },
        {
            id: 2,
            title: "Managing Clients and Bookings",
            description: "Learn how to effectively manage your client database and appointment schedule",
            icon: <FaBook size={20} />,
            link: "/guides/client-management"
        },
        {
            id: 3,
            title: "Understanding Appointment Analytics",
            description: "Make data-driven decisions using our comprehensive analytics tools",
            icon: <FaChartLine size={20} />,
            link: "/guides/analytics"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Getting Started Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                        <FaRocket className="text-blue-500" size={24} />
                        <h2 className="text-xl font-semibold">Getting Started</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Follow our step-by-step guide to set up your account and start managing bookings efficiently.
                    </p>
                    <div className="space-y-4">
                        {gettingStartedSteps.map(step => (
                            <div key={step.id} className="flex items-center p-4 border rounded-lg hover:border-blue-500 transition-colors">
                                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                                    {step.id}
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="font-medium text-gray-800">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                                <div className="text-sm text-gray-500">{step.duration}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Tutorials Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                        <FaVideo className="text-blue-500" size={24} />
                        <h2 className="text-xl font-semibold">Video Tutorials</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {videoTutorials.map(video => (
                            <div key={video.id} className="group">
                                <div className="relative rounded-lg overflow-hidden mb-3 aspect-video bg-gray-100">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                            <IoMdPlay className="text-blue-500 text-3xl ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>
                                <h3 className="font-medium text-gray-800 mb-2 text-lg">{video.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{video.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popular Guides Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-6">
                    <div className="flex items-center space-x-2 mb-6">
                        <BsCollectionPlay className="text-blue-500" size={24} />
                        <h2 className="text-xl font-semibold">Popular Guides</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {popularGuides.map(guide => (
                            <a
                                key={guide.id}
                                href={guide.link}
                                className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="text-blue-500">
                                        {guide.icon}
                                    </div>
                                    <h3 className="font-medium text-gray-800">{guide.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{guide.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorials;