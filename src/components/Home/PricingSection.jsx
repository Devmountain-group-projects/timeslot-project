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
                "50 Image generations",
                "500 Credits",
                "Monthly 100 Credits Free",
                "Customer Support",
                "Dedicated Server",
                "Priority Generations",
                "50GB Cloud Storage"
            ]
        },
        {
            name: "Professional",
            monthlyPrice: 14.50,
            yearlyPrice: 159.50,
            icon: GiProgression,
            features: [
                "200 Image generations",
                "1200 Credits",
                "Monthly 1000 Credits Free",
                "Customer Support",
                "Dedicated Server",
                "Priority Generations",
                "150GB Cloud Storage"
            ]
        },
        {
            name: "Enterprise",
            monthlyPrice: 24.50,
            yearlyPrice: 269.50,
            icon: MdCorporateFare,
            features: [
                "400 Image generations",
                "2000 Credits",
                "Monthly 1500 Credits Free",
                "Customer Support",
                "Dedicated Server",
                "Priority Generations",
                "500GB Cloud Storage"
            ]
        }
    ];

    return (
        <div>
            <div className="bg-gray-100 px-4 py-24">
                <div className="max-w-5xl max-lg:max-w-max mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-2 text-gray-800">Choose a Subscription</h2>
                        <p className="text-sm text-gray-500">choose a plan tailored to your needs</p>
                    </div>

                    <div className="flex mx-auto bg-white rounded-full max-w-[300px] p-1 mt-6">
                        <button
                            className={`w-full text-sm py-2 px-4 tracking-wide rounded-full ${!isYearly ? 'bg-primary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`w-full text-sm py-2 px-4 tracking-wide rounded-full ${isYearly ? 'bg-primary text-white' : 'bg-transparent text-gray-800'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-sm:max-w-sm max-sm:mx-auto mt-12">
                        {plans.map((plan, index) => (
                            <div key={index} className="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
                                <h4 className="text-gray-800 text-lg mb-3">{plan.name}</h4>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-4xl font-semibold">
                                        ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                                        <sub className="text-gray-500 font-medium text-sm ml-1">/ {isYearly ? 'year' : 'month'}</sub>
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
                                    <button type="button" className="w-full mt-6 px-4 py-2 text-sm tracking-wide bg-primary hover:bg-purple-700 text-white rounded-xl">Get Started</button>
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