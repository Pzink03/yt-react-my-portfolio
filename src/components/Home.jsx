import React from 'react'
import HeroImage from '../assets/Gradpic.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
import Typewriter from "./Typewrite.jsx";


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl mt-20 pt-10 font-bold text-blue-500 border-b-4 border-gray-500 pr-4'>
                Hello!  <Typewriter text=" I'm Pete" delay={300} />


                </h2>

                <p className='text-white py-4 max-w-md '>
                <Typewriter text="I'm a Fullstack Engineer specializing in frontend development, with expertise in React, JavaScript, Python, CSS and other frameworks. Adept at creating captivating user interfaces that seamlessly integrate interactivity and design. I'm a collaborative team player committed to delivering exceptional web experiences that merge innovation with functionality. Check out some of my projects below!" delay={25} />






                </p>
                <div className='flex '>
                    <Link to='projects' smooth duration={500} className=' mr-4 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>

                    <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Contact
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>

                </div>

            </div>
            <div>
                <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full mt-6' />
            </div>
        </div>

    </div>
  )
}

export default Home
