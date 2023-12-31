import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import appwrite from "../assets/appwrite.png"
import python from "../assets/Python.png"
import mongoDB from "../assets/MongoDB.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import postgresql from "../assets/postgresql.png"
import django from "../assets/Django.png"
import docker from "../assets/Docker.png"
import bootstrap from "../assets/Bootstrap.png"
import fastapi from "../assets/fastapi.png"
import gitlab from "../assets/GitLabLogo.png"
import typescript from "../assets/Typescriptlogo.png"



const Experience = () => {

    const techs = [
        {
            id: 1,
            src: reactImage,
            title: 'React',
            style: 'shadow-sky-300'
        },
        {
            id: 2,
            src: postgresql,
            title: 'PostgreSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-400'
        },
        {
            id: 4,
            src: appwrite,
            title: 'Appwrite',
            style: 'shadow-red-400'
        },
        {
            id: 5,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: mongoDB,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id: 10,
            src: django,
            title: 'Django',
            style: 'shadow-green-600'
        },
        {
            id: 11,
            src: bootstrap,
            title: 'BootStrap',
            style: 'shadow-purple-700'
        },
        {
            id: 12,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-300'
        },


        {
            id: 13,
            src: fastapi,
            title: 'FastAPI',
            style: 'shadow-teal-400'
        },


        {
            id: 14,
            src: docker,
            title: 'Docker',
            style: 'shadow-blue-400'
        },
        {
            id: 15,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 16,
            src: gitlab,
            title: 'GitLab',
            style: 'shadow-orange-400'
        },

    ]



  return (
    <div name='skills' className='bg-gradient-to-t from-gray-800 to-black w-auto h-auto pt-20 p-4'>
        <div className='max-w-screen-lg mx-auto pt-20 flex flex-col justify-center w-auto h-auto text-white'>
            <div className=''>
                <p className='text-4xl font-bold border-b-4 border-gray-500 mt-6 inline text-blue-500'>Skills</p>
                <p className='py-6 md:text-xl sm:text-md'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>

                    ))
                }




            </div>
        </div>

    </div>
  )
}

export default Experience
