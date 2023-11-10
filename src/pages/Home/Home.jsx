import React from 'react';
import './Home.css';
import { Feature } from '../../components/Feature/Feature';
import { Hero } from '../../components/Hero/Hero';
import { icon1, icon2, icon3 } from '../../components/Feature/Feature';

export default function Home() {

    const featuresData = [
        {
            id: 1,
            icon: icon1,
            alt: 'Chat Icon',
            title: 'You are our #1 priority',
            text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        },
        {
            id: 2,
            icon: icon2,
            alt: 'Money Icon',
            title: 'More savings means higher rates',
            text: 'The more you save with us, the higher your interest rate will be!'
        },
        {
            id: 3,
            icon: icon3,
            alt: 'Security Icon',
            title: 'Security you can trust',
            text: 'We use top of the line encryption to make sure your data and money is always safe.'
        }
    ];

    return (
        <div className='home'>
            <div className='ctn-hero'>
                <Hero />
            </div>
            <div className='all-features'>
                {featuresData.map((feature) => (
                    <div className='ctn-features' key={feature.id}>
                        <Feature
                            id={feature.id}
                            icon={feature.icon}
                            alt={feature.alt}
                            title={feature.title}
                            text={feature.text}
                        />
                    </div>
                ))}
            </ div>
        </div>

    );
}
