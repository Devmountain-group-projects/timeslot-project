import React from 'react'
import { motion } from 'framer-motion'
import AppointmentImg from '../../assets/images/appointment.jpg'
import { BsClipboardCheck } from "react-icons/bs"
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { TbUsersGroup } from "react-icons/tb"
import { MdOutlineNotificationsActive } from "react-icons/md"

const featureData = [
    {
        icon: MdOutlineNotificationsActive,
        title: "Automated Notifications",
        description: "Ensure your clients are always up to date with automated email and SMS reminders. Whether it's confirming appointments, sending follow-up messages, or notifying clients of cancellations, our notification system helps reduce no-shows and keeps communication seamless."
    },
    {
        icon: BsClipboardCheck,
        title: "Service Listings",
        description: "Easily create and manage detailed service listings, including descriptions, durations, and pricing. Clients can browse your services and book appointments effortlessly, making it simple for businesses to showcase their offerings."
    },
    {
        icon: LiaFileInvoiceDollarSolid,
        title: "Payments and Invoicing",
        description: "Accept secure payments directly through the platform with integrated payment gateways like Stripe and PayPal. Generate invoices automatically and track your transactions, making financial management stress-free for your business."
    },
    {
        icon: TbUsersGroup,
        title: "Multi-User Access",
        description: "Empower your team with multi-user access, allowing staff to manage their own schedules and appointments. With role-based permissions, you can ensure everyone has the access they need without compromising security or oversight."
    }
]

const FeatureCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Icon size={70} className="mb-4 inline-block text-primary p-2" />
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-800">{description}</p>
    </motion.div>
)

const PowerfulFeatures = () => {
    return (
        <div className="w-full">
            <div className="max-width mx-auto px-6 pb-12">
                <div className="bg-gradient-gray rounded-3xl p-6">
                    <div className="grid lg:grid-cols-2 items-center lg:gap-y-6">
                        <motion.div
                            className="max-lg:order-1 max-lg:text-center pl-0 sm:pl-6 pr-0 sm:pr-16"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="title-text">
                                Powerful Features to Simplify Your Business Operations
                                <span className='text-primary text-3xl sm:text-5xl'>.</span>
                            </h2>
                            <p className="text-gray-800 mt-6 text-base leading-relaxed">
                                Timeline Slot offers a suite of integrated features designed to make managing your business easier than ever. From automated notifications that keep clients informed, to detailed service listings, secure payments, and multi-user access, our platform provides everything you need to run your business smoothly and efficiently.
                            </p>
                        </motion.div>

                        <motion.div
                            className="lg:h-[480px] flex items-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <img src={AppointmentImg} className="w-full h-full object-cover rounded-lg" alt="a dog at a vet" />
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-12">
                        {featureData.map((feature, index) => (
                            <FeatureCard key={index} {...feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerfulFeatures