import React from 'react';
import BusinessInsiderLogo from '../../assets/images/businessinsider.svg';
import EntrepreneurLogo from '../../assets/images/entrepreneur.webp';
import ForbesLogo from '../../assets/images/forbes.webp';
import FortuneLogo from '../../assets/images/fortune.png';
import DevmountainLogo from '../../assets/images/devmountain.png';
import ZapierLogo from '../../assets/images/zapier.svg';
import TechradarLogo from '../../assets/images/techradar.svg';
import HubspotLogo from '../../assets/images/hubspot.png';

const Marquee = () => {
    const logos = [
        { src: BusinessInsiderLogo, alt: 'Business Insider' },
        { src: EntrepreneurLogo, alt: 'Entrepreneur' },
        { src: ForbesLogo, alt: 'Forbes' },
        { src: FortuneLogo, alt: 'Fortune' },
        { src: DevmountainLogo, alt: 'Devmountain' },
        { src: ZapierLogo, alt: 'Zapier' },
        { src: TechradarLogo, alt: 'Techradar' },
        { src: HubspotLogo, alt: 'Hubspot' },
    ];

    return (
        <div className='bg-white py-12 px-6'>
            <div className="max-width mx-auto">
                <div className='bg-gradient-gray rounded-3xl px-10 py-10 sm:py-20'>
                    <h1 className="title-text text-center mb-20">Who's talking about us<span className='text-primary'>.</span></h1>
                    <div className="marquee-wrapper overflow-hidden whitespace-nowrap">
                        <div className="animate-marquee inline-block">
                            {logos.concat(logos).map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="inline-block h-8 sm:h-10 mx-6 sm:mx-14 opacity-80"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;