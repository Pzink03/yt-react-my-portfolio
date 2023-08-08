import React, { useState } from 'react';
import rentovation from '../assets/portfolio/Rentovation.png';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import rent from '../assets/rent.mp4';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: rentovation
        },
        {
            id: 2,
            src: reactParallax
        },
        {
            id: 3,
            src: navbar
        },
    ];

    const [videoVisible, setVideoVisible] = useState(false);

    const handleVideoButtonClick = () => {
        setVideoVisible(!videoVisible);
    };

    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* ... */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                    onClick={handleVideoButtonClick}
                                >
                                    {videoVisible ? 'Hide Video' : 'Play Video'}
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Video player */}
                {videoVisible && (
                    <div className='flex items-center justify-center'>
                        <video controls autoPlay>
                            <source src={rent} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
