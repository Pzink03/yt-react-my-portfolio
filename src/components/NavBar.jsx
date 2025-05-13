import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import { navLinks } from "../constants"

const NavBar = () => {
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return

    enablePageScroll()
    setOpenNavigation(false)
  }

  return (
    <div
      className={`flex fixed w-full z-20 justify-between lg:justify-normal items-center h-20 text-white border-b border-n-6 font-jetbrains bg-black lg:backdrop-blur-sm px-4 ${
        openNavigation ? "bg-n-8" : "bg-black backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center">
        <h1 className="text-5xl font-signature ml-2">Pete Zink</h1>
      </div>
      <div className="topp lg:mx-auto bg-n-8 lg:static lg:flex lg:bg-transparent">
        <ul className="hidden lg:flex items-center midd ">
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className=" bott cursor-pointer capitalize font-medium text-white hover:text-gray-300"
            >
              <Link className="" to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="contact" smooth>
        <button
          className="hidden lg:flex text-color-softBlue w-fit  hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white md:px-6 px-2 md:py-2 py-2 my-2 items-center rounded-lg border-2 border-color-softBlue cursor-pointer"
          href="#contact"
        >
          Contact Me
        </button>
      </Link>
      <div
        onClick={toggleNavigation}
        className="cursor-pointer pr-4 z-40 text-gray-500 lg:hidden"
      >
        {openNavigation ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {openNavigation && (
        <ul className="flex flex-col justify-center items-center z-30 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-"
            >
              <Link onClick={handleClick} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
