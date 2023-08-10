import React, { useState } from 'react';
import rentovation from '../assets/portfolio/Rentovation.png';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import rent from '../assets/rent.mp4';
import car from '../assets/car.mp4';
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import python from "../assets/Python.png"
import github from "../assets/github.png"
// import tailwind from "../assets/tailwind.png"
import postgresql from "../assets/postgresql.png"
import django from "../assets/Django.png"
import bootstrap from "../assets/Bootstrap.png"
import docker from "../assets/Docker.png"

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: rentovation,
            href: "https://gitlab.com/PZink03/rent-ovation",
            video: rent,
            description: "A property management app with user-specific interfaces, signups, property and appointment management.  Implemented JWT authentication to limit functionality for unauthenticated users.",
            title: "Rent-ovation",
            images: [javascript,reactImage, python, postgresql, css, html, github, docker],
            tooltip: "testing"
        },
        {
            id: 2,
            src: reactParallax,
            href: "https://gitlab.com/PZink03/Car-link",
            video: car,
            description: "An application that allows the user to track automobile inventory, book appointments, and record sales. Leveraged Django ORM (Object Relational Mapping) for database operations and model relationships ",
            title: "Car Link",
            images: [javascript,reactImage, python, django,html, bootstrap, github, docker ],
            style: 'shadow-green-400',
            tooltip: "testing2"
        },
        {
            id: 3,
            src: navbar,
            href: "https://gitlab.com/PZink03/TaskMe",
            description: "Allows the user to create and manage tasks in a to-do list application. Developed a responsive UI using a Django database resulting in an application allowing users to manage different projects and tasks",
            title: "TaskMe",
            images: [python, django, css, html, github],
            tooltip: "testing3"
        },
    ];

    // Create an array of videoVisible states, one for each portfolio item
    const [videoVisibleArray, setVideoVisibleArray] = useState(portfolios.map(() => false));

    const handleVideoButtonClick = (index) => {
        const updatedVideoVisibleArray = [...videoVisibleArray];
        updatedVideoVisibleArray[index] = !updatedVideoVisibleArray[index];
        setVideoVisibleArray(updatedVideoVisibleArray);
    };

    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Here are some of the projects I've created</p>

            </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, href, video, description, title, images, tooltip, style }, index) => (


                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg relative'>
                            <header className='font-bold text-2xl pb-4'>
                            <h1 className='text-center pb-4'>{title}</h1>
                            {/* <p className='pb-2 text-sm'>Stack used:</p>
                            <div className='flex'>
                            {images.map((image) => (
                                <img key={image} className='image-test' src={image} alt={`Stack ${image}`} />
                            ))}
                            </div> */}
                        </header>
                            <img src={src} alt='' className='rounded-md duration-200' />
                            <div className='portfolio-description md:text-2xl '>{description}</div>
                            <p data-tooltip={tooltip} className='py-4 text-md font-bold text-center'>Stack:</p>
                            <div className='flex justify-around '>
    {images.map((image) => (
        <img
            key={image}
            data-tooltip={tooltip}
            className={`shadow-md shadow-gray-400 image-test`}
            src={image}
            alt={`Stack ${image}`}
            title={image.replace(/\.png$/, '')} // Remove ".png" from the image filename for the tooltip
        />
    ))}
</div>
                            <div className='flex items-center justify-center'>

                                <button
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                    onClick={() => handleVideoButtonClick(index)}
                                >
                                    {videoVisibleArray[index] ? 'Hide Video' : 'Play Video'}
                                </button>
                                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                            </div>
                            {videoVisibleArray[index] && (
                                <div className='flex items-center justify-center'>
                                    <video controls autoPlay>
                                        <source src={video} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
