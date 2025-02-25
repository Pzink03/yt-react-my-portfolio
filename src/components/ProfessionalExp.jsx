import { useState } from 'react';
import NLTFHomePic from '../assets/NLTFHomePage.JPG';
import qualityFirstHomePagePic from '../assets/QualityFirstHomePage.JPG';
import grid from '../assets/grid.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const roadmap = [
  {
    id: "0",
    title: "Quality First Auto Care",
    text: "Quality First Auto Care hired me to design and develop their website for their mechanic shop. I created a Figma design and presented it to the owner and his marketing team. Their main priorities were the mobile experience and an easy to navigate UI. To achieve this, I used Tailwind CSS for responsive styling and implemented React Router for smooth navigation. Additionally, I incorporated Framer Motion for animations and React Icons to give a consistent feel to the website.",
    date: "December 2024",
    status: "done",
    imageUrl: qualityFirstHomePagePic,

    website: "https://nelsonleetreefarmllc.com/",
    href: "https://github.com/Pzink03/NelsonLeeTreeFarm",
  },
  {
    id: "1",
    title: "Nelson Lee Tree Farm",
    text: "Quality First Auto Care hired me to design and develop their website for their mechanic shop. I created a Figma design and presented it to the owner and his marketing team. Their main priorities were the mobile experience and an easy to navigate UI. To achieve this, I used Tailwind CSS for responsive styling and implemented React Router for smooth navigation. Additionally, I incorporated Framer Motion for animations and React Icons to give a consistent feel to the website.",
    date: "May 2023",
    status: "progress",
    imageUrl: NLTFHomePic,
    website: "https://nelsonleetreefarmllc.com/",
    href: "https://github.com/Pzink03/NelsonLeeTreeFarm",
  },
];

export default function ProfessionalExp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? roadmap.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === roadmap.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = roadmap[currentIndex];

  return (
    <div className="relative bg-gradient-to-b from-gray-800 to-black p-4 lg:p-10 pt-12 lg:pt-52 flex flex-col items-center ">
      <SectionTitle title="Professional Work" />
      <div className='flex'>
      <button onClick={prevSlide} className=" hidden lg:block mx-4 h-12 self-center text-color-softBlue w-fit hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white  rounded-full border-2 border-color-softBlue cursor-pointer">
          <ChevronLeft size={24} />
        </button>
      <div className="relative  lg:flex w-full max-w-[105rem]">
      <div className="relative bg-n-8 flex rounded-xl overflow-hidden shadow-2xl shadow-gray-800 border-4 border-gray-800">
  <div className="absolute top-10 left-1/2 max-w-full">
    <img className="w-full" src={grid} alt="Grid" />
  </div>

  {/* Responsive Layout */}
  <div className="flex flex-col lg:flex-row relative gap-x-2 w-full">

    {/* Title for Small Screens */}
    <h4 className="h4 m-4 text-center text-3xl lg:hidden text-color-softBlue font-semibold section-title">
      {currentItem.title}
    </h4>

    {/* Image */}
    <div className="flex items-center justify-start max-w-[70rem] max-h-[44rem] border-t-2 border-b-2 border-gray-800 mx-2 lg:border-0">
      <img className="rounded-lg w-full object-cover object-left py-6" src={currentItem.imageUrl} alt={currentItem.title} />
    </div>

    {/* Content */}
    <div className='flex flex-col justify-between items-center lg:border-l-2 border-color-softBlue p-4'>

      {/* Title for Larger Screens */}
      <h4 className="h4 m-8 text-center lg:text-5xl text-2xl text-color-softBlue font-semibold section-title hidden lg:block">
        {currentItem.title}
      </h4>

      <p className="text-white/80 lg:text-xl text-lg max-w-7xl p- lg:p-10">{currentItem.text}</p>
      <div className='flex gap-4 mt-6 font-jetbrains lg:text-base text-sm md:mb-4'>
        <button className='text-color-softBlue w-fit hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white lg:px-10 px-4 lg:py-3 py-2 my-2 flex items-center rounded-lg border-2 border-color-softBlue cursor-pointer'>
          <a href={currentItem.website}>Visit Website</a>
        </button>
        <a href={currentItem.href} className='text-color-softBlue w-fit hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white lg:px-12 px-4 lg:py-3 py-2 my-2 flex items-center rounded-lg border-2 border-color-softBlue cursor-pointer'>View Code</a>
      </div>
      <div className='lg:hidden flex justify-between w-full py-2 text-white'>
      <button onClick={prevSlide} className=" mx-4 h-8 w-10 justify-items-center self-center hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out rounded-full border-2 border-color-softBlue cursor-pointer">
          <ChevronLeft size={24} />
          prev
        </button>
        <button onClick={nextSlide} className=" mx-4 h-8 w-10 self-center justify-items-center hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out rounded-full border-2 border-color-softBlue cursor-pointer">
          <ChevronRight size={24} color='white'/>
          next
        </button>

      </div>
    </div>
  </div>
</div>
      </div>
      <button onClick={nextSlide} className="hidden lg:block mx-4 h-12 self-center text-color-softBlue w-fit hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white  rounded-full border-2 border-color-softBlue cursor-pointer">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
