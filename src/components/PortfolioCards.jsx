import { useState } from "react"
import { portfolioCards } from "../constants"
import { ProjectIcons } from "./ProjectIcons"

export function PortfolioCards() {
  const [videoVisibleArray, setVideoVisibleArray] = useState(
    portfolioCards.map(() => false)
  )

  const handleVideoButtonClick = (index) => {
    const updatedVideoVisibleArray = [...videoVisibleArray]
    updatedVideoVisibleArray[index] = !updatedVideoVisibleArray[index]
    setVideoVisibleArray(updatedVideoVisibleArray)
  }

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 lg:mx-10 mx-4">
      {portfolioCards.map(
        (
          {
            id,
            image,
            href,
            video,
            description,
            note,
            title,
            icons,
            website,
            subtitle,
          },
          index
        ) => (
          <div
            key={id}
            className={`shadow-md shadow-gray-600 hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue border-2 border-gray-800 lg:even:translate-y-[7rem] rounded-lg relative hover:scale-105 transition ease-in-out h-auto ${
              videoVisibleArray[index] ? "mb-" : ""
            }`}
          >
            <header className="font-bold flex justify-center flex-col text-2xl pb-4">
              <img className="object-cover" src={title} alt="Title" />
              <p className="text-center text-sm text-gray-500 pb-4">
                {subtitle}
              </p>
            </header>
            <div className="md:h-[32rem] h-[20.5rem] w-full">
              <img
                src={image}
                sizes={200}
                alt="Project"
                className="h-full object-cover object-top rounded-md duration-200"
              />
            </div>
            <div
              className={`${
                videoVisibleArray[index] ? "h-[65.9%]" : "h-[80%]"
              } portfolio-description object-top flex flex-col md:text-xl md:overflow-hidden overflow-auto`}
            >
              {description}
              {note != null && (
                <p className="pt-2">
                  <span className="text-red-700 font-bold">Note:</span>
                  {note}
                </p>
              )}
            </div>
            <ProjectIcons projectIcons={icons} />
            <div className="flex gap-4 items-center justify-center mt-6 font-jetbrains md:text-base text-sm">
              <button
                className="text-color-softBlue w-fit  hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white md:px-10 px-4 md:py-3 py-2 my-2 flex items-center rounded-lg border-2 border-color-softBlue cursor-pointer"
                onClick={() => handleVideoButtonClick(index)}
              >
                {video == null ? (
                  <a href={website}>Visit Website</a>
                ) : videoVisibleArray[index] ? (
                  "Hide Video"
                ) : (
                  "Play Video"
                )}
              </button>
              <a
                href={href}
                className="text-color-softBlue w-fit  hover:bg-color-softBlue hover:shadow-[0_0_15px_5px] hover:shadow-color-softBlue transition-all duration-300 ease-in-out hover:text-white md:px-12 px-4 md:py-3 py-2 my-2 flex items-center rounded-lg border-2 border-color-softBlue cursor-pointer"
              >
                View Code
              </a>
            </div>
            {video == null
              ? null
              : videoVisibleArray[index] && (
                  <div className="flex items-center justify-center">
                    <video
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[300px] mt-4"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
          </div>
        )
      )}
    </div>
  )
}
