import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdEventAvailable, MdOutlineNotificationAdd, MdOutlineRateReview, MdOutlineMobileFriendly } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const features = [
    {
        icon: FaRegEdit,
        title: "Effortless Appointment Booking",
        description: "Clients can schedule appointments quickly with an intuitive interface, ensuring a seamless booking experience."
    },
    {
        icon: MdEventAvailable,
        title: "Real-Time Availability",
        description: "Service providers can update their schedules instantly, allowing clients to see available slots and book in real-time."
    },
    {
        icon: MdOutlineNotificationAdd,
        title: "Automated Reminders",
        description: "Both clients and providers receive timely reminders via email or SMS, reducing missed appointments and no-shows."
    },
    {
        icon: MdOutlineRateReview,
        title: "Client Reviews & Ratings",
        description: "After each appointment, clients can leave ratings and reviews, helping providers build trust and maintain high service standards."
    },
    {
        icon: MdOutlineMobileFriendly,
        title: "Mobile-Friendly Design",
        description: "The platform is fully responsive, making it easy for users to manage their appointments from any device, whether desktop or mobile."
    },
    {
        icon: RiSecurePaymentLine,
        title: "Secure Payments",
        description: "Clients can pay for appointments securely through integrated payment gateways, offering peace of mind for both parties."
    }
];

const Features = () => {
    return (
        <div className="max-w-max mx-auto px-6 py-24">
            <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
                Discover Our Exclusive Features
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="text-center">
                        <feature.icon className="text-4xl mb-6 inline-block text-primary" />
                        <h3 className="text-gray-800 text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features