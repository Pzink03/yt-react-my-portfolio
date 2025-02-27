import React, { useRef } from "react"
import HeroImage from "../assets/HeroImage.jpg"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"
import Typewriter from "./Typewrite.jsx"
import { BackgroundCircles } from "./BackgroundCircles.jsx"

import { SocialLinks } from "./SocialLinks.jsx"

const Home = () => {
  const parallaxRef = useRef(null)

  return (
    <div
      name="home"
      className="h-screen w-full bg-black relative"
      ref={parallaxRef}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:w-full md:items-center items-start z-1 justify-start h-full relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full relative ">
          <div className=" flex flex-col items-start justify-center gap-2 md:mx-2 px-">
            <header className="flex flex-col md:text-6xl text-4xl section-title font-bold whitespace-nowrap section-title">
              <h2 className="section-title font-bold text-white w-full text-center">
                Hi, I'm
                <span className=" text-color-softBlue section-title pl-4 space-x-1">
                  Pete Zink
                </span>
              </h2>
            </header>
            <Typewriter text="I'm a" />
            <p className="text-white/80 ">
              I'm a software engineer specializing in building and designing
              exceptional web applications
            </p>
            <div className="flex flex-col md:items-start">
              <SocialLinks />
              <Link
                to="contact"
                smooth
                className="group font-jetbrains text-color-softBlue w-fit  hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white md:px-4 px-2 md:py-3 py-2 my-2 flex items-center rounded-full border-2 border-color-softBlue cursor-pointer"
              >
                Let's work together
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex lg:justify-end items-center justify-center w-full mt-2 md:ml-2 pb-20">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-full lg:w-[25rem] w-[20rem] h-[20rem] lg:h-[25rem] object-cover mt-2 border-2 border-color-softBlue shadow-[0_0_15px_5px] shadow-color-softBlue"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:flex">
        <BackgroundCircles />
      </div>
    </div>
  )
}

export default Home
