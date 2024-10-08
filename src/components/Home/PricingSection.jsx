import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { MdCorporateFare } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Free",
            monthlyPrice: 0.00,
            yearlyPrice: 0.00,
            icon: TbFreeRights,
            features: [
                "Basic appointment scheduling",
                "Client self-scheduling",
                "Automated email reminders",
                "1 user account",
                "Basic reporting",
                "Priority Generations",
                "Mobile-friendly access"
            ]
        },
        {
            name: "Professional",
            monthlyPrice: 19.99,
            yearlyPrice: 199.99,
            icon: GiProgression,
            features: [
                "Unlimited appointments",
                "Multiple users with role-based access",
                "Advanced calendar management",
                "Payments integration",
                "SMS & email reminders",
                "Custom service listings",
                "Client reviews & feedback",
                "Detailed reports & analytics",
                "Custom branding options",
            ]
        },
        {
            name: "Enterprise",
            monthlyPrice: 49.99,
            yearlyPrice: 599.99,
            icon: MdCorporateFare,
            features: [
                "Everything in Professional, plus:",
                "Multi-location support",
                "API access for custom integrations",
                "White-label branding",
                "Custom reports and data exports",
                "Enterprise-grade security ",
                "Dedicated customer success manager",
                "Priority phone support"
            ]
        }
    ];

    return (
        <div>
            <div className="bg-gradient-gray px-4 py-24">
                <div className="max-w-5xl max-lg:max-w-max mx-auto">
                    <div className="text-center">
                        <h2 className="sm:text-4xl text-2xl font-bold mb-2 text-gray-800">Choose a Subscription<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <p className="text-base text-gray-500">choose a plan tailored to your needs</p>
                    </div>

                    <div className="flex mx-auto bg-white rounded-full max-w-[300px] p-1 mt-6">
                        <button
                            className={`w-full text-base py-2 px-4 tracking-wide rounded-full ${!isYearly ? 'bg-primary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`w-full text-base py-2 px-4 tracking-wide rounded-full ${isYearly ? 'bg-primary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-sm:max-w-sm max-sm:mx-auto mt-12">
                        {plans.map((plan, index) => (
                            <div key={index} className="bg-white shadow rounded-3xl p-10 hover:scale-105 hover:ring-2 ring-primary transition-all duration-300">
                                <h4 className="text-gray-800 text-lg mb-3">{plan.name}</h4>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-4xl font-semibold">
                                        ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                                        <sub className="text-gray-500 font-medium text-base ml-1">/ {isYearly ? 'year' : 'month'}</sub>
                                    </h3>
                                    <plan.icon className="text-6xl opacity-20 text-primary" />
                                </div>

                                <hr className="my-6 border-gray-300" />

                                <div>
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                                                <FaCheckCircle size={20} className="mr-3 text-secondary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-center mt-10">
                                        <button type="button" className="px-4 py-2 text-md rounded-full font-medium text-white bg-primary hover:bg-white hover:text-primary hover:ring-2 ring-primary transition duration-300 ease-in-out">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingSection