import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"

export const links = [
    {
        id: 1,
        child: (
            <>
             <FaLinkedin size={40} /></>
        ),
        href: 'https://www.linkedin.com/in/pete-zink-84199025b/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
             <FaGithub size={40} /></>
        ),
        href: 'https://github.com/PZink03',

    },
    {
        id: 3,
        child: (
            <>
             <HiOutlineMail size={40} /></>
        ),
        href: 'mailto:pete.zink03@gmail.com',

    },
    {
        id: 4,
        child: (
            <>
             <BsFillPersonLinesFill size={40} /></>
        ),
        href: '/myresume.pdf',
        style: "rounded-br-md",
        download: true,

    }
]
const SocialLinks = () => {




  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>


            {links.map (({id, child, href, style, download}) => (
                // eslint-disable-next-line
            <li key={id} className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded:md duration-300 bg-gray-500" + " " + style }>
                <a className='flex justify-between items-center w-full text-white' href={href} download={download} target='_blank' rel="noreferrer">  {child}</a>
            </li>
            ))}
        </ul>

    </div>
  )
}

export default SocialLinks
