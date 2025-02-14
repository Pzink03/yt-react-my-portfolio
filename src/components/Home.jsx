import React, { useRef } from 'react'
import HeroImage from '../assets/Gradpic.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
import Typewriter from "./Typewrite.jsx";
import { BackgroundCircles } from './BackgroundCircles.jsx';
import { links } from './SocialLinks.jsx'


const Home = () => {
    const parallaxRef = useRef(null)

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800 relative' ref={parallaxRef}>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center z-1 justify-center h-full px-4 relative'>
            <div className='flex flex-col justify-center h-full relative '>
                        <h2 className='font-jetbrains text-4xl text-center font-bold text-white section-title'>
                        Hello I'm
                        <br/>
                        <p className='text-6xl text-color-softBlue font-jetbrains'>Pete Zink</p>
                        </h2>
            <div className='flex w-full mt-2'>
                <img src={HeroImage} alt='my profile' className='md:rounded-full rounded-xl w-full h-[36rem] object-cover md:p-20 mt-2' />
            </div>
                    <div className='max-w-xl flex flex-col items-center justify-center w-'>
                        <p className='text-white/80 '>
                        <Typewriter text="I'm a software engineer specializing in building and designing exceptional web applications" delay={25} />
                        </p>
                        <div className=''>
                            <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full border-2 border-color-softBlue cursor-pointer'>
                                Let's work together
                                <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </Link>

                        </div>
                        <ul className="hidden absolute -left-[20.5rem] bottom-[30.5rem] gap-2 px-4 py-1 bg-gray-700 backdrop-blur border border-gray-800 rounded-2xl xl:flex">
                                    {links.map((icon, index) => (
                                        <a className="flex items-center  justify-center w-14 h-12 rounded-full transition-colors hover:bg-gray-500 text-white" target="_blank" rel='noreferrer' key={icon.id} href={icon.href}>
                                            <div>
                                            {icon.child}
                                            </div>
                                        </a>
                                    ))}
                                    </ul>

                    </div>

                </div>
            </div>
            <div className='hidden md:flex'>

        <BackgroundCircles />
            </div>

    </div>
  )
}

export default Home
