import React, { useState } from 'react';
import peteTube from '../assets/portfolio/peteTube.JPG'
import peteTubeText from '../assets/portfolio/PeteTubeText.svg'
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import typescript from "../assets/Typescriptlogo.png"
import peteTubeVid from '../assets/PeteTube.mp4';


const Clones = () => {
    const websiteClones = [
        {
            id: 1,
            src: peteTube,
            href: "https://github.com/Pzink03/Youtube-clone",
            video: peteTubeVid,
            website: '',
            description: "Created a mock YouTube homepage as a personal project. Despite not utilizing any external APIs, the focus was on recreating the popular and complex YouTube interface. This project served as a fun creative challenge that tested my styling ability.",
            titles: [
                {
                    caption: "",
                    img: peteTubeText,


                }
            ],
            subtitle: "Youtube's Homepage",
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

    ];

    // Create an array of videoVisible states, one for each portfolio item
    const [videoVisibleArray, setVideoVisibleArray] = useState(websiteClones.map(() => false));

    const handleVideoButtonClick = (index) => {
        const updatedVideoVisibleArray = [...videoVisibleArray];
        updatedVideoVisibleArray[index] = !updatedVideoVisibleArray[index];
        setVideoVisibleArray(updatedVideoVisibleArray);
    };

    return (
        <div name='projects' className='bg-gradient-to-t from-black to-gray-800 w-full h-full text-white  p-4'>
            <div className='max-w-screen-lg pt-20 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-blue-500'>Website Clones</p>
                <p className='py-6 md:text-xl sm:text-md'>Here are some popular websites I have cloned.</p>
                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8 px-12 py-6 sm:px-0'>
                    {websiteClones.map(({ id, src, href, video, description, titles, images, tooltip, style, website, subtitle }, index) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg relative'>
                            <header className='font-bold text-2xl pb-4'>
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
                            <p className='text-center text-lg text-gray-500'>{subtitle}</p>
                            {/* <p className='pb-2 text-sm'>Stack used:</p>
                            <div className='flex'>
                            {images.map((image) => (
                                <img key={image} className='image-test' src={image} alt={`Stack ${image}`} />
                            ))}
                            </div> */}
                        </header>
                        <div className='h-80 w-full'>
                            <img src={src} alt='' className='h-full w-full object-cover object-top rounded-md duration-200' />
                        </div>
                            <div className='clone-description md:text-xl '>{description}</div>
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
                                    <video className="" controls autoPlay>
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

export default Clones;
