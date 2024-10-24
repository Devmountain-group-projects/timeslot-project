import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

const PrivacyPolicy = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionId) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    // Privacy Policy sections data
    const sections = [
        {
            id: 'information-collection',
            title: '1. Information We Collect',
            content: (
                <div className="space-y-2">
                    <p>We collect various types of information to provide and improve our services:</p>
                    <h4 className="font-semibold mt-4">1.1 Personal Information</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Name and contact details</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Business information</li>
                        <li>Payment information</li>
                    </ul>
                    <h4 className="font-semibold mt-4">1.2 Usage Information</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Log data and device information</li>
                        <li>Scheduling patterns and preferences</li>
                        <li>Service usage statistics</li>
                        <li>Communication history</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'information-use',
            title: '2. How We Use Your Information',
            content: (
                <div className="space-y-2">
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>To provide and maintain our scheduling service</li>
                        <li>To notify you about changes to our service</li>
                        <li>To provide customer support</li>
                        <li>To gather analysis or valuable information to improve our services</li>
                        <li>To detect, prevent and address technical issues</li>
                        <li>To send you marketing and promotional communications (with your consent)</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'information-sharing',
            title: '3. Information Sharing and Disclosure',
            content: (
                <div className="space-y-2">
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Service providers who assist in operating our platform</li>
                        <li>Business partners with your consent</li>
                        <li>Law enforcement when required by law</li>
                        <li>Third-party analytics services to improve our platform</li>
                    </ul>
                    <p className="mt-4">We do not sell or rent your personal information to third parties.</p>
                </div>
            )
        },
        {
            id: 'data-security',
            title: '4. Data Security',
            content: (
                <div className="space-y-2">
                    <p>We implement security measures to protect your information:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments and updates</li>
                        <li>Access controls and authentication measures</li>
                        <li>Secure data backup systems</li>
                        <li>Employee training on data protection</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'user-rights',
            title: '5. Your Rights and Choices',
            content: (
                <div className="space-y-2">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Access and view your personal information</li>
                        <li>Request corrections to your personal information</li>
                        <li>Request deletion of your data (where applicable)</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Control cookie preferences</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'data-retention',
            title: '6. Data Retention',
            content: (
                <div className="space-y-2">
                    <p>Our data retention policies:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>We retain personal information as long as necessary to provide our services</li>
                        <li>Account information is kept until account deletion</li>
                        <li>Backup data is retained for disaster recovery purposes</li>
                        <li>Legal requirements may require longer retention periods</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'children-privacy',
            title: '7. Children\'s Privacy',
            content: (
                <div className="space-y-2">
                    <p>Our policy regarding children's privacy:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Our services are not intended for users under 18 years of age</li>
                        <li>We do not knowingly collect information from children</li>
                        <li>Parents can request removal of their children's information</li>
                        <li>We comply with children's privacy protection laws</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'international-transfers',
            title: '8. International Data Transfers',
            content: (
                <div className="space-y-2">
                    <p>Information about international data transfers:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Data may be processed in different countries</li>
                        <li>We ensure appropriate safeguards for international transfers</li>
                        <li>We comply with cross-border data transfer regulations</li>
                        <li>Data protection standards are maintained globally</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'policy-updates',
            title: '9. Changes to This Policy',
            content: (
                <div className="space-y-2">
                    <p>Our policy update procedures:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>We may update this policy periodically</li>
                        <li>Users will be notified of significant changes</li>
                        <li>Continued use indicates acceptance of changes</li>
                        <li>Previous versions will be archived</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <>
            {/* Header Section */}
            <motion.section
                className='relative px-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative bg-gradient-gray text-white text-center sm:py-24 py-14 mt-8 px-6 max-width mx-auto rounded-3xl">
                    <motion.h1
                        className="title-text"
                        {...fadeIn}
                    >
                        Privacy Policy
                        <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Last Updated: October 24, 2024
                    </motion.p>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-gray-600 mb-8">
                        At Timeline Slot, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our scheduling platform.
                    </p>

                    {/* Custom Accordion */}
                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <span className="text-xl font-semibold">{section.title}</span>
                                    <ChevronDownIcon
                                        className={`w-6 h-6 transition-transform duration-200 ${openSections[section.id] ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${openSections[section.id] ? 'max-h-[500px] py-4' : 'max-h-0'
                                        }`}
                                >
                                    <div className="text-gray-600">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div
                        className="mt-12 p-6 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Privacy Concerns or Questions?</h2>
                        <p className="text-gray-600">
                            If you have any questions about our Privacy Policy or data practices, please contact our Privacy Officer at:{' '}
                            <a href="mailto:privacy@timelineslot.com" className="text-primary hover:underline">
                                privacy@timelineslot.com
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default PrivacyPolicy;