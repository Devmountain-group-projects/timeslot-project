import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Marquee from '../components/Home/Marquee'
import MakeItEasy from '../components/Home/MakeItEasy'
import ServiceIndustries from '../components/Home/ServiceIndustries'
import PricingSection from '../components/Home/PricingSection'
import Reviews from '../components/Home/Reviews'
import Faq from '../components/Home/Faq'
import Subscribe from '../components/Home/Subscribe'

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Marquee />
            <MakeItEasy />
            <ServiceIndustries />
            <PricingSection />
            <Reviews />
            <Faq />
            <Subscribe />
        </div>
    )
}

export default Home