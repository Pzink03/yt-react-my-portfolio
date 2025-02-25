import React, { useState } from 'react'
import { Stats } from './Stats'
import { SectionTitle } from './SectionTitle';

const aboutCardInfo = [
  {
    id: 1,
    title: "About",
    info: "Hello! I'm excited to combine my passion for problem-solving and creativity by developing efficient and user-friendly web applications. I'm an adaptable, and collaborative software engineer who loves the challenges of learning new development tools, editors, and programming languages to create unique and pleasurable user experiences. My passion for software engineering stems from the ability to problem solve and figure out an effective solution in a collaborative way.",
  },
  {
    id: 2,
    title: "Background",
    info: "This is the Background info",
  },
  {
    id: 3,
    title: "Skills",
    info: "This is the skills info",
  },
  {
    id: 4,
    title: "More Info",
    info: "This is the Additional info",
  },
]

const About = () => {
  const [value, setValue] = useState(aboutCardInfo[0].title); // Default selection

  return (
    <div name="about" className="w-auto h-auto pt-12 md:pt-52 bg-gradient-to-b to-gray-800 from-black text-white p-4 pb-52">
      <div className="max-w-screen-lg pt-4 z-2 mx-auto flex flex-col justify-center w-auto h-auto">
       <SectionTitle title="About" />
        <div className="flex flex-col  md:flex-row items-start w-full justify-center pt-10">
          <div className="flex md:flex-col md:gap-4 z-2 justify-start md:w-[40%] w-full border-b-2 border-gray-800 md:border-b-0">
            {aboutCardInfo.map((card) => (
              <button
              key={card.id}
              onClick={() => setValue(card.title)}
              className=" flex w-72 justify-center text-center whitespace-nowrap text-color-softBlue hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out md:text-xl text-sm hover:text-white md:px-6 px-2 md:py-2 py-2 md:my-2 items-center rounded-lg border-2 border-b-0 border-l-0 md:border-b-2 md:border-l-2 border-gray-800 md:border-color-softBlue cursor-pointer font-jetbrains"
            >
              {card.title}
            </button>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center md:w-[70%] w-full md:h-72 h-auto gap-y-10 rounded-lg text-xl pt-10 md:pt-0">
            {aboutCardInfo.find((card) => card.title === value)?.info}
        <Stats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
