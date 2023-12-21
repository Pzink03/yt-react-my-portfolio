import React, { useState } from 'react';
import rentovation from '../assets/portfolio/Rentovation.png';
import carlink from '../assets/portfolio/Carlink.jpg'
import gabhub from '../assets/portfolio/GabHub.JPG'
import jobBoard from '../assets/portfolio/Jobboard.JPG'
import taskme from '../assets/portfolio/TaskMe.jpg'
import rent from '../assets/rent.mp4';
import taskmevid from '../assets/taskme.mp4';
import gabHubText from '../assets/portfolio/GabHubText.svg'
import taskMeText from '../assets/portfolio/TaskMeText.svg'
import employmentPuzzle from '../assets/portfolio/EmploymentPuzzleText.svg'
import rentovationText from '../assets/portfolio/RentovationText.svg'
import carLink from '../assets/portfolio/CarLinkText.svg'
// import car from '../assets/car.mp4';
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import appwrite from "../assets/appwrite.png"
import reactImage from "../assets/react.png"
import python from "../assets/Python.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import postgresql from "../assets/postgresql.png"
import typescript from "../assets/Typescriptlogo.png"
import django from "../assets/Django.png"
import bootstrap from "../assets/Bootstrap.png"
import docker from "../assets/Docker.png"
import fastapi from "../assets/fastapi.png"
// import gitlab from "../assets/GitLabLogo.png"


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: jobBoard,
            href: "https://github.com/Pzink03/GabHub",
            video: null,
            website: "https://gabhub.netlify.app/",
            description: "While developing this already existing job board website I implemented front-end features to enhance overall functionality and user interface. Implementing custom React hooks I integrate context functionality, giving the application dynamic features such as a user-friendly dark mode. I also designed and integrated the use of Stripe payments, providing a solution for job listing renewals and facilitating updates to job statuses. Also, I introduced job listing filtering, hiding, and favoriting features, utilizing local storage to ensure persistent UI interactions.",
            titles: [
                {
                    caption: "Employment Puzzle",
                    img: employmentPuzzle,

                }
            ],
            subtitle: "Frontend Developer",
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
                    img: typescript,
                    style: "shadow-blue-400",
                    tooltip: "TypeScript"
                },
                {
                    // img:[python, django, css, html, github],
                    img: css,
                    style: "shadow-blue-400",
                    tooltip: "CSS"
                },
                {
                    // img:[python, django, css, html, github],
                    img: tailwind,
                    style: "shadow-teal-400",
                    tooltip: "FastAPI"
                },
                {
                    // img:[python, django, css, html, github],
                    img: github,
                    style: "shadow-gray-400",
                    tooltip: "GitHub"
                },
            ],
            style: 'shadow-blue-400',

        },
        {
            id: 2,
            src: gabhub,
            href: "https://github.com/Pzink03/GabHub",
            video: null,
            website: "https://gabhub.netlify.app/",
            description: "Developed a dynamic social media application where users can create, like, and save posts, fostering content sharing and user engagement. I decided to incorporate Appwrite for media storage, end-to-end backend server capabilities, easy to manage API creation, and increased authentication and security measures. This allowed me to execute comprehensive CRUD functionality, allowing users to manage their posts, liked content, saved posts, and additional multimedia within the application. For the styling I decided to use Tailwind as well as some custom CSS to handle certain Tailwind limitations. This allowed me to implement a fully responsive design.",
            titles: [
                {
                    caption: '',
                    img: gabHubText,

                }
            ],
            subtitle: "Fullstack Developer",
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
                    img: typescript,
                    style: "shadow-blue-400",
                    tooltip: "TypeScript"
                },
                {
                    // img:[python, django, css, html, github],
                    img: appwrite,
                    style: "shadow-red-400",
                    tooltip: "Appwrite"
                },
                {
                    // img:[python, django, css, html, github],
                    img: css,
                    style: "shadow-blue-400",
                    tooltip: "CSS"
                },
                {
                    // img:[python, django, css, html, github],
                    img: tailwind,
                    style: "shadow-teal-400",
                    tooltip: "FastAPI"
                },
                {
                    // img:[python, django, css, html, github],
                    img: github,
                    style: "shadow-gray-400",
                    tooltip: "GitHub"
                },


            ],
            style: 'shadow-blue-400',

        },
        {
            id: 3,
            src: rentovation,
            href: "https://github.com/Pzink03/Rent-ovation",
            video: rent,
            description: "Featuring personalized interfaces for users, enabling signups, property and appointment management, all supported by custom CSS. JWT authentication has been implemented to restrict functionality for unauthenticated users",
            titles: [
                {
                    caption: "",
                    img: rentovationText,
                    style: ""

                }
            ],
            subtitle: "Fullstack Developer",
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
                {
                    // img:[python, django, css, html, github],
                    img: github,
                    style: "shadow-gray-400",
                    tooltip: "GitHub"
                },




            ],
            style: 'shadow-blue-400',

        },
        {
            id: 4,
            src: carlink,
            href: "https://github.com/Pzink03/Car-Link",
            video: '',
            description: "The application facilitates automobile inventory tracking, appointment booking, and sales recording. It optimizes database operations and model relationships through Django's ORM (Object Relational Mapping) framework.",
            titles: [
                {
                    caption: "Employment Puzzle",

                    img: carLink

                }
            ],
            subtitle: "Fullstack Developer",
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
                    img: css,
                    style: "shadow-blue-400",
                    tooltip: "HTML"
                },
                {
                    // img:[python, django, css, html, github],
                    img: docker,
                    style: "shadow-blue-400",
                    tooltip: "Docker"
                },
                {
                    // img:[python, django, css, html, github],
                    img: github,
                    style: "shadow-gray-400",
                    tooltip: "GitHub"
                },




            ],

        },
        {
            id: 5,
            src: taskme,
            href: "https://github.com/Pzink03/TaskMe",
            video: taskmevid,
            description: "Enabling users to efficiently create and oversee tasks, the application employs a responsive UI built on a Django database. This allows users to seamlessly manage projects and associated tasks.",
            titles: [
                {
                    caption: "Employment Puzzle",
                    img: taskMeText,


                }
            ],
            subtitle: "Fullstack Developer",
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
                    img: github,
                    style: "shadow-gray-400",
                    tooltip: "GitHub"
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
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white p-4'>
            <div className='max-w-screen-lg pt-20 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-blue-500'>Projects</p>
                <p className='py-6 md:text-xl sm:text-md'>Here are some of the projects I've created</p>
                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8 py-6 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, href, video, description, titles, images, tooltip, style, website, subtitle }, index) => (


                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg relative'>
                            <header className='font-bold flex bg-none justify-center flex-col text-2xl pb-4'>
                            {titles.map((title) => (

                                <div key={title.caption} className={`flex flex-col justify-center gap-10 ${title.style}`}>

                                    {title.img !== '' ? (
                                    <img
                                        className='object-cover '
                                        src={title.img}
                                        alt={title.caption}>
                                    </img>

                                    ): <p>{title.caption}</p>}
                                </div>



                            ))}
                            <p className='text-center text-sm text-gray-500 pb-4'>
                                {subtitle}
                            </p>
                            {/* <p className='pb-2 text-sm'>Stack used:</p>
                            <div className='flex'>
                            {images.map((image) => (
                                <img key={image} className='image-test' src={image} alt={`Stack ${image}`} />
                            ))}
                            </div> */}
                        </header>
                        <div className='h-80 w-full'>
                            <img src={src} sizes={200} alt='' className='h-full w-full object-cover object-top rounded-md duration-200' />
                        </div>
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
                                    {video == null ? <a href={website}>Visit Site</a>: videoVisibleArray[index] ? 'Hide Video' : 'Play Video' }

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
