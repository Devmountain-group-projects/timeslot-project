import React from 'react'
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Image Imports
import RodrigoImg from '../assets/images/rodrigoimg.jpeg';
import BrandonImg from '../assets/images/brandonimg.jpeg';
import JarethImg from '../assets/images/jarethimg.jpeg';
import AboutUsImg2 from '../assets/images/aboutusimg2.jpg';
import AboutUsImg3 from '../assets/images/aboutusimg3.jpg';
import AboutUsImg4 from '../assets/images/aboutusimg4.jpg';
import AboutUsImg5 from '../assets/images/aboutusimg5.jpg';
import AboutUsImg6 from '../assets/images/aboutusimg6.jpg';
import AboutUsImg7 from '../assets/images/aboutusimg7.jpg';

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const AboutUs = () => {
    return (
        <>
            {/* About Us Strip */}
            <motion.section
                className='relative px-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="relative bg-gradient-gray text-white text-center sm:py-24 py-14 mt-8 px-6 max-width mx-auto rounded-3xl"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="title-text"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Us
                        <span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h1>

                    {/* Transparent logo positioned at the bottom right */}
                    <div className="absolute bottom-0 right-0 h-full w-full pointer-events-none overflow-hidden">
                        <motion.img
                            src='#'
                            alt="Logo"
                            className="object-cover opacity-25%"
                            style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                width: '50%',
                                maxWidth: '275px',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* Main Content */}
            <div className="mx-auto px-6 py-12 space-y-12 max-width mb-24">
                {/* Who we are */}
                <motion.section
                    className='py-8'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-4 flex justify-center items-center"
                        variants={fadeInUp}
                    >
                        Who we are<span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h2>
                    <motion.p
                        className="text-md text-gray-600 text-center"
                        variants={fadeInUp}
                    >
                        Timeline Slot is a cutting-edge scheduling platform designed to simplify appointment management for businesses and professionals. Since our inception, we've been dedicated to creating intuitive scheduling solutions that save time and enhance productivity. Our platform seamlessly integrates with your existing workflow, offering features from automated booking to client management. Whether you're a solo practitioner or managing multiple locations, Timeline Slot adapts to your needs, ensuring a smooth scheduling experience for both you and your clients.
                    </motion.p>
                </motion.section>

                <motion.hr
                    className="border-gray-300"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />

                {/* Our commitment */}
                <motion.section
                    className='py-12'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-2 flex justify-center items-center"
                        variants={fadeInUp}
                    >
                        Our commitment to you<span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h2>
                    <motion.p
                        className='text-sm text-gray-400 flex justify-center items-center mb-10'
                        variants={fadeInUp}
                    >
                        Streamlined scheduling for modern businesses
                    </motion.p>
                    <motion.p
                        className='text-md text-center'
                        variants={fadeInUp}
                    >
                        At Timeline Slot, we're committed to providing a reliable, secure, and user-friendly scheduling experience. Our platform is built on robust infrastructure ensuring 99.9% uptime, so you never miss a booking opportunity. We protect your data with enterprise-grade security while making the scheduling process effortless for both businesses and clients.
                    </motion.p>
                    <br />

                    <motion.p
                        className='text-lg text-center font-bold'
                        variants={fadeInUp}
                    >
                        Our Service Guarantee includes:
                    </motion.p>
                    <br />
                    <motion.ul
                        className='text-md text-center'
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.li variants={fadeInUp}>24/7 availability for online bookings</motion.li>
                        <motion.li variants={fadeInUp}>Automated confirmation and reminder systems</motion.li>
                        <motion.li variants={fadeInUp}>Seamless calendar integration across all major platforms</motion.li>
                        <motion.li variants={fadeInUp}>Real-time sync across devices and time zones</motion.li>
                    </motion.ul>

                    <motion.p
                        className='text-md text-center'
                        variants={fadeInUp}
                    >
                        View our complete service features <a href="#">here</a>.
                    </motion.p>
                    <br />
                    <motion.p
                        className='text-md text-center'
                        variants={fadeInUp}
                    >
                        Experience the difference with our premium scheduling solutions.<br />
                    </motion.p>
                    <motion.div
                        className='flex justify-center items-center'
                        variants={fadeInUp}
                    >
                        <p className='text-md text-center'>
                            Read our full terms of service&nbsp;
                        </p>
                        <Link to="/terms-of-service" className='text-secondary'>
                            here.
                        </Link>
                    </motion.div>
                </motion.section>

                <motion.hr
                    className="border-gray-300"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />

                {/* Features section */}
                <motion.section
                    className='py-12'
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-2 flex justify-center items-center"
                        variants={fadeInUp}
                    >
                        Why choose Timeline Slot<span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h2>
                    <motion.p
                        className='text-sm text-gray-400 flex justify-center items-center mb-10'
                        variants={fadeInUp}
                    >
                        Innovative features for modern scheduling needs
                    </motion.p>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {/* Card 1 */}
                        <motion.div
                            className="bg-white p-6 flex flex-col items-center justify-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={AboutUsImg2}
                                alt="Smart Scheduling"
                                className="w-48 h-48 object-cover mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-center">Smart Scheduling</h3>
                            <p className="text-gray-600 text-center">
                                Intelligent booking system that learns from your preferences and automatically optimizes your calendar for maximum efficiency.
                            </p>
                        </motion.div>
                        {/* Card 2 */}
                        <motion.div
                            className="bg-white p-6 flex flex-col items-center justify-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={AboutUsImg4}
                                alt="Seamless Integration"
                                className="w-48 h-48 object-cover mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-center">Seamless Integration</h3>
                            <p className="text-gray-600 text-center">
                                Connect with your favorite tools and services. From calendar apps to payment systems, Timeline Slot works with your existing workflow.
                            </p>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div
                            className="bg-white p-6 flex flex-col items-center justify-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={AboutUsImg3}
                                alt="Client Management"
                                className="w-48 h-48 object-cover mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-center">Client Management</h3>
                            <p className="text-gray-600 text-center">
                                Comprehensive client profiles, booking history, and communication tools to help you maintain strong relationships with your customers.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.hr
                    className="border-gray-300"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />

                {/* Development Team */}
                <motion.section
                    className='py-12'
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-4 flex justify-center items-center pb-12"
                        variants={fadeInUp}
                    >
                        Timeline Slot's Development Team<span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-14"
                        variants={staggerContainer}
                    >
                        {/* Team Card 1 */}
                        <motion.div
                            className="text-center"
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={RodrigoImg}
                                alt="team member"
                                className="w-[10rem] h-[10rem] rounded-full mx-auto mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-semibold mb-2">Rodrigo Cobos</h3>
                            <p className="text-gray-600">Front End Developer</p>
                            <motion.div
                                className="flex space-x-4 my-4 justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.a
                                    href="https://www.linkedin.com/in/rodrigomcobos/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-700"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaLinkedinIn size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://www.behance.net/rodrigocobos1"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-400"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaBehance size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/rodrigomcobos"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-500"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaGithub size={20} />
                                </motion.a>
                            </motion.div>
                            <p className="text-gray-600 mt-2">As the front-end developer for this project, I was responsible for building the user interface using React and TailwindCSS for styling. I dedicated a lot of time and effort to ensure the site is visually appealing, responsive, and user-friendly.</p>
                        </motion.div>
                        {/* Team Card 2 */}
                        <motion.div
                            className="text-center"
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={BrandonImg}
                                alt="team member"
                                className="w-[10rem] h-[10rem] rounded-full mx-auto mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-semibold mb-2">Brandon C. Cansdale</h3>
                            <p className="text-gray-600">Back End Developer</p>
                            <motion.div
                                className="flex space-x-4 my-4 justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.a
                                    href="https://www.linkedin.com/in/brandon-c-cansdale/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-700"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaLinkedinIn size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/Bcansdale"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-500"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaGithub size={20} />
                                </motion.a>
                            </motion.div>
                            <p className="text-gray-600 mt-2">As the back-end developer, I was responsible for implementing the database structure and integrating APIs. We designed and optimized the database to ensure efficient data management, and built the functionality to manipulate and interact with the database seamlessly, making sure the project runs smoothly on the server side.</p>
                        </motion.div>
                        {/* Team Card 3 */}
                        <motion.div
                            className="text-center"
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={JarethImg}
                                alt="team member"
                                className="w-[10rem] h-[10rem] rounded-full mx-auto mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-2xl font-semibold mb-2">Jareth Carpenter</h3>
                            <p className="text-gray-600">Back End Developer</p>
                            <motion.div
                                className="flex space-x-4 my-4 justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.a
                                    href="https://www.linkedin.com/in/jareth-carpenter/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-700"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaLinkedinIn size={20} />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/jarethcarp"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-500"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaGithub size={20} />
                                </motion.a>
                            </motion.div>
                            <p className="text-gray-600 mt-2">As the database and authentication specialist, I was in charge of creating the database models and handling the login functionality. They ensured secure user authentication and implemented the logic to manipulate the database, allowing user data to be displayed and managed effectively throughout the platform.</p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.hr
                    className="border-gray-300"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />

                {/* Join us */}
                <motion.section
                    className='py-12'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-4 flex justify-center items-center pb-4"
                        variants={fadeInUp}
                    >
                        Join Timeline Slot<span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h2>
                    <motion.div
                        className='flex flex-col justify-center items-center pb-10'
                        variants={fadeInUp}
                    >
                        <p className="text-md text-gray-600 mb-4 text-center">
                            Want to be part of revolutionizing how businesses manage their time? We're looking for passionate individuals who share our vision of making scheduling effortless. Join our team of innovators who are dedicated to creating the future of appointment management.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link to="/contact" className="text-secondary text-xl">
                                Contact Us to Learn More
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[AboutUsImg5, AboutUsImg6, AboutUsImg7].map((img, index) => (
                            <motion.img
                                key={index}
                                src={img}
                                alt={`Workplace ${index + 1}`}
                                className="w-full h-72 object-cover rounded-2xl"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </motion.div>
                </motion.section>

                {/* Thank You */}
                <motion.section
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl font-semibold mb-12"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Thank you for choosing Timeline Slot<span className='text-primary text-xl sm:text-3xl lg:text-5xl'>.</span>
                    </motion.h2>
                    <motion.a
                        target='_blank'
                        href="#"
                        className="btn-blue"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn more about our platform
                    </motion.a>
                </motion.section>
            </div>
        </>
    )
}

export default AboutUs