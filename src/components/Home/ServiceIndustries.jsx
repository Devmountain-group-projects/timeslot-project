import React from 'react'
import { GrYoga } from "react-icons/gr";
import { PiHairDryerFill } from "react-icons/pi";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaHammer, FaChalkboardTeacher } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

const ServiceCard = ({ Icon, title, description }) => (
    <div className="text-center hover:shadow-md hover:ring-2 hover:ring-primary hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-gray p-8 w-full relative overflow-hidden">
        <h3 className="text-gray-800 text-lg font-bold mt-4 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <Icon className="absolute bottom-0 right-0 text-primary opacity-15 w-40 h-40 -mb-6 -mr-6" />
    </div>
)

const ServiceIndustries = () => {
    const services = [
        {
            Icon: GrYoga,
            title: "Health & Wellness",
            description: "From spas and massage therapists to chiropractors and fitness trainers, Timeline Slot helps health and wellness providers manage client appointments with ease. Our platform ensures that clients can book your services quickly, and you stay organized with automated reminders and scheduling."
        },
        {
            Icon: PiHairDryerFill,
            title: "Beauty & Personal Care",
            description: "Whether you're a salon, a freelance makeup artist, or a nail technician, Timeline Slot is tailored to meet the scheduling demands of beauty and personal care businesses. Clients can book, cancel, and reschedule appointments in seconds, allowing you to focus on delivering exceptional services."
        },
        {
            Icon: BsSuitcaseLgFill,
            title: "Professional Services",
            description: "For consultants, legal professionals, accountants, and financial advisors, managing appointments has never been easier. Timeline Slot enables clients to view your availability and book sessions, whether in person or online, without the back-and-forth communication."
        },
        {
            Icon: FaHammer,
            title: "Home & Repair Services",
            description: "From electricians to plumbers and cleaning services, we help home and repair businesses manage their appointments effectively. Let clients book your services online and manage your availability in real-time, cutting down on phone calls and paperwork."
        },
        {
            Icon: FaChalkboardTeacher,
            title: "Education & Coaching",
            description: "Tutors, personal trainers, and life coaches can seamlessly manage their one-on-one sessions or group classes. Timeline Slot ensures that you stay organized with a clear overview of your appointments, payment tracking, and client communication tools."
        },
        {
            Icon: GiHealthNormal,
            title: "Healthcare Providers",
            description: "Doctors, dentists, and clinics can streamline patient appointments using our secure, easy-to-use booking system. Automated reminders and a customizable scheduling system ensure a smooth experience for both patients and providers."
        }
    ];

    return (
        <div className="bg-white px-6 py-24">
            <div className="grid lg:grid-cols-2 items-center gap-10 my-4 lg:max-w-max max-w-xl mx-auto">
                <section className="max-lg:text-center">
                    <h2 className="title-text">Timeline Slot is designed to cater to a wide range of business sectors<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                    <p className="text-gray-600 text-base">At Timeline Slot, we understand that every business is unique, which is why our platform is designed to support a wide range of industries. Whether you're a solo practitioner or managing a growing team, we streamline the booking process, helping you focus on what matters most—your clients.</p>
                    <button type="button" className="btn-blue mt-10">
                        Learn more
                    </button>
                </section>

                {/* Service Cards */}
                <div className="grid sm:grid-cols-2 gap-6 mx-auto w-full">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceIndustries