import React, { useState } from 'react';
import rentovation from '../assets/portfolio/Rentovation.png';
import carlink from '../assets/portfolio/Carlink.jpg'
// import reactParallax from '../assets/portfolio/reactParallax.jpg';
import taskme from '../assets/portfolio/TaskMe.jpg'
import navbar from '../assets/portfolio/navbar.jpg';
import rent from '../assets/rent.mp4';
import taskmevid from '../assets/taskme.mp4';
// import car from '../assets/car.mp4';
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import python from "../assets/Python.png"
// import github from "../assets/github.png"
// import tailwind from "../assets/tailwind.png"
import postgresql from "../assets/postgresql.png"
import django from "../assets/Django.png"
import bootstrap from "../assets/Bootstrap.png"
import docker from "../assets/Docker.png"
import fastapi from "../assets/fastapi.png"
import gitlab from "../assets/GitLabLogo.png"


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: rentovation,
            href: "https://gitlab.com/PZink03/rent-ovation",
            video: rent,
            description: "Featuring personalized interfaces for users, enabling signups, property and appointment management, all supported by custom CSS. JWT authentication has been implemented to restrict functionality for unauthenticated users",
            title: "Rent-ovation",
            images: [
                {
                    // img:[python, django, css, html, github],
                    img: javascript,
                    style: "shadow-yellow-400",
                    tooltip: "Javascript"
                },
                {
                    // img:[python, django, css, html, github],
                    img: reactImage,
                    style: "shadow-sky-300",
                    tooltip: "React"
                },
                {
                    // img:[python, django, css, html, github],
                    img: python,
                    style: "shadow-yellow-400",
                    tooltip: "Python"
                },
                {
                    // img:[python, django, css, html, github],
                    img: postgresql,
                    style: "shadow-blue-400",
                    tooltip: "PostgreSQL"
                },
                {
                    // img:[python, django, css, html, github],
                    img: css,
                    style: "shadow-blue-400",
                    tooltip: "CSS"
                },
                {
                    // img:[python, django, css, html, github],
                    img: html,
                    style: "shadow-orange-400",
                    tooltip: "HTML"
                },
                {
                    // img:[python, django, css, html, github],
                    img: fastapi,
                    style: "shadow-teal-400",
                    tooltip: "FastAPI"
                },
                {
                    // img:[python, django, css, html, github],
                    img: docker,
                    style: "shadow-blue-400",
                    tooltip: "Docker"
                },




            ],
            style: 'shadow-blue-400',

        },
        {
            id: 2,
            src: carlink,
            href: "https://gitlab.com/PZink03/Car-link",
            // video: car,
            description: "The application facilitates automobile inventory tracking, appointment booking, and sales recording. It optimizes database operations and model relationships through Django's ORM (Object Relational Mapping) framework.",
            title: "Car Link",
            images: [
                {
                    // img:[python, django, css, html, github],
                    img: javascript,
                    style: "shadow-yellow-400",
                    tooltip: "JavaScript"
                },
                {
                    // img:[python, django, css, html, github],
                    img: reactImage,
                    style: "shadow-sky-300",
                    tooltip: "React"
                },
                {
                    // img:[python, django, css, html, github],
                    img: python,
                    style: "shadow-yellow-400",
                    tooltip: "Python"
                },
                {
                    // img:[python, django, css, html, github],
                    img: django,
                    style: "shadow-green-600",
                    tooltip: "Django"
                },
                {
                    // img:[python, django, css, html, github],
                    img: bootstrap,
                    style: "shadow-purple-700",
                    tooltip: "Bootstrap"
                },
                {
                    // img:[python, django, css, html, github],
                    img: html,
                    style: "shadow-orange-400",
                    tooltip: "HTML"
                },
                {
                    // img:[python, django, css, html, github],
                    img: gitlab,
                    style: "shadow-orange-400",
                    tooltip: "GitLab"
                },
                {
                    // img:[python, django, css, html, github],
                    img: docker,
                    style: "shadow-blue-400",
                    tooltip: "Docker"
                },




            ],

        },
        {
            id: 3,
            src: taskme,
            href: "https://gitlab.com/PZink03/TaskMe",
            video: taskmevid,
            description: "Enabling users to efficiently create and oversee tasks, the application employs a responsive UI built on a Django database. This allows users to seamlessly manage projects and associated tasks.",
            title: "TaskMe",
            images: [
                {
                    // img:[python, django, css, html, github],
                    img: python,
                    style: "shadow-yellow-400",
                    tooltip: "Python"
                },
                {
                    // img:[python, django, css, html, github],
                    img: django,
                    style: "shadow-green-600",
                    tooltip: "Django"
                },
                {
                    // img:[python, django, css, html, github],
                    img: css,
                    style: "shadow-blue-400",
                    tooltip: "CSS"
                },
                {
                    // img:[python, django, css, html, github],
                    img: html,
                    style: "shadow-orange-400",
                    tooltip: "HTML"
                },
                {
                    // img:[python, django, css, html, github],
                    img: gitlab,
                    style: "shadow-orange-400",
                    tooltip: "GitLab"
                },



            ],

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
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-4'>
            <div className='max-w-screen-lg pt-20 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-blue-500'>Projects</p>
                <p className='py-6 md:text-xl sm:text-md'>Here are some of the projects I've created</p>

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
                            <img src={src} sizes={200} alt='' className='rounded-md duration-200' />
                            <div className='portfolio-description md:text-xl '>{description}</div>
                            <p data-tooltip={images.tooltip} className='py-4 text-md font-bold text-center'>Stack:</p>
                            <div className='flex justify-around '>
    {images.map((image) => (
        <img
            key={image.img}
            data-tooltip={image.tooltip}
            className={`shadow-md ${image.style} image-test`}
            src={image.img}
            alt={`Stack ${image.img}`}
            title={image.tooltip}

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
