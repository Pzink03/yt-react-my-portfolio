import React from 'react'
import { FaLinkedin, FaGitlab } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"
const Contact = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                <FaLinkedin size={30} /></>
            ),
            href: 'https://www.linkedin.com/in/pete-zink-84199025b/',
            style: ''
        },
        {
            id: 2,
            child: (
                <>
                <FaGitlab size={30} /></>
            ),
            href: 'https://gitlab.com/PZink03',

        },
        {
            id: 3,
            child: (
                <>
                <HiOutlineMail size={30} /></>
            ),
            href: 'mailto:pete.zink03@gmail.com',

        },
        {
            id: 4,
            child: (
                <>
                <BsFillPersonLinesFill size={30} /></>
            ),
            href: '/resume.pdf',
            style: "",
            download: true,

        }
    ]
  return (
    <div name='contact' className='w-auto h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col pt-4 justify-center max-w-screen-lg mx-auto h-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 md:text-xl sm:text-md'>Submit the form below to get in touch with me, or click on one of the links below</p>
            </div>
            <div className=''>


    </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/2eceabcf-879f-4922-b4a9-bcd8d4adfa8a' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 mt-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400 transition duration-300' />
                    <input type='text' name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400 transition duration-300' />
                    <textarea name='message' placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400 transition duration-300'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's Talk
                    </button>
                    <ul className='flex justify-center'>
            {links.map (({id, child, href, style, download}) => (
                // eslint-disable-next-line
            <li key={id} className={ "flex justify-around w-20 h-14 px-4 mx-2 rounded-full bg-gray-500 hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer" + " " + style }>
                <a className='flex justify-between items-center text-white' href={href} download={download} target='_blank' rel="noreferrer">  {child}</a>
            </li>
            ))}
        </ul>
                </form>


            </div>
        </div>
    </div>
  )
}

export default Contact
