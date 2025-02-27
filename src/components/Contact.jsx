import React from "react"
import { SectionTitle } from "./SectionTitle"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-auto h-auto bg-black p-4 text-white pt-12 md:pt-52"
    >
      <div className="flex flex-col pt-4 justify-center max-w-screen-md mx-auto h-auto">
        <SectionTitle title="Contact" />
        <p className="-mt-20 pb-6 md:text-xl sm:text-md text-center text-n-2">
          I would love to hear from you! Feel free to contact me via email,
          LinkedIn, or submit the form below. I look forward to hearing from
          you.
        </p>

        <div className="flex justify-center items-center font-jetbrains">
          <form
            action="https://getform.io/f/2eceabcf-879f-4922-b4a9-bcd8d4adfa8a"
            method="POST"
            className="flex flex-col w-full md:w-3/4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 mt-4 bg-transparent border-2 rounded-md text-white focus:outline-none border-color-softBlue focus:shadow-[0_0_15px_5px] focus:shadow-color-softBlue transition duration-300 ease-in-out"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  border-color-softBlue focus:shadow-[0_0_15px_5px] focus:shadow-color-softBlue transition duration-300 ease-in-out"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-color-softBlue focus:shadow-[0_0_15px_5px] focus:shadow-color-softBlue transition duration-300 ease-in-out"
            ></textarea>
            <button className="px-6 py-3 font-jetbrains my-8 mx-auto flex items-center rounded-md hover:scale-110 border-2 border-color-softBlue hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out text-color-softBlue hover:text-white font-semibold text-lg">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
