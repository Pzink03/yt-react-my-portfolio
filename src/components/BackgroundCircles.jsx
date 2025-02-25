
import javascript from "../assets/icons/JavaScriptIcon.png"
import html from "../assets/icons/HTMLIcon.png"
import css from "../assets/icons/CSSIcon.png"
import typescript from "../assets/icons/TypeScriptIcon.png"
import tailwind from "../assets/icons/TailwindIcon.png"
import react from "../assets/icons/ReactIcon.png"
// import appwrite from "../assets/icons/appwrite.png"
// import python from "../assets/icons/PythonIcon.png"
// import mongoDB from "../assets/icons/MongoDBIcon.png"
import github from "../assets/icons/GitHubIcon.png"
import postgresql from "../assets/icons/PostgreSQLIcon.png"
import django from "../assets/icons/DjangoIcon.png"
// import docker from "../assets/icons/DockerIcon.png"
// import bootstrap from "../assets/icons/BootstrapIcon.png"
// import fastapi from "../assets/icons/FastAPIIcon.png"
// import gitlab from "../assets/icons/GitLabIcon.png"
import { motion } from "framer-motion";

const homeIcons = [
  {
    id: 1,
    src: javascript,
    className: "absolute bottom-1/2 left-1/2 w-14 h-1/2 origin-bottom",
    imageClassName: "w-8 h-8 rounded-full mt-9 -rotate-[36deg] shadow-[0_0_10px_3px] shadow-color-softBlue",
    rotate: 34,
    y: -50,
    delay: 0.6,
    duration: 0.8,

  },
  {
    id: 2,
    src: typescript,
    className: "absolute bottom-1/2 left-1/2 w-14 h-1/2 origin-bottom ",
    rotate: -36,
    y: -50,
    delay: 0.4,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full mt-2 rotate-[36deg] shadow-[0_0_10px_3px] shadow-color-softBlue"
  },
  {
    id: 3,
    src: react,
    className: "absolute bottom-1/2 left-1/2 w-14 h-1/2 origin-bottom",
    rotate: -65,
    y: -70,
    delay: 0.2,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full rotate-[65deg] -mt-2 shadow-[0_0_10px_3px] shadow-color-softBlue"

  },
  {
    id: 4,
    src: tailwind,
    className: "absolute bottom-1/2 left-1/2 w-14 h-1/2 origin-bottom",
    rotate: -95,
    y: -50,
    delay: 0,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full rotate-[70deg] -mt-12 shadow-[0_0_10px_3px] shadow-color-softBlue"

  },
  {
    id: 5,
    src: css,
    className: "absolute bottom-1/2 left-1/2 w-14 h-1/2 origin-bottom",
    rotate: 62,
    y: -50,
    delay: 0.8,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full mt-7 -rotate-[65deg] shadow-[0_0_10px_3px] shadow-color-softBlue"

  },
  {
    id: 6,
    src: html,
    className: "absolute bottom-1/2 left-1/2 w-14 h-1/2 origin-bottom",
    rotate: 96,
    y: -50,
    delay: 1,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full mt-2 -rotate-[95deg] shadow-[0_0_10px_3px]  shadow-color-softBlue"
  },
  {
    id: 7,
    src: github,
    className: "absolute bottom-1/2 left-[55%] w-14 h-1/3 origin-bottom",
    rotate: 40,
    y: -50,
    delay: 1.3,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full -ml-4 -rotate-[40deg] shadow-[0_0_10px_3px]  shadow-color-softBlue"
  },
  {
    id: 8,
    src: django,
    className: "absolute bottom-1/2 mr-4 right-[55.5%] w-14 h-1/3 origin-bottom",
    rotate: -34,
    y: -50,
    delay: 1.1,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full mt-4 rotate-[34deg] shadow-[0_0_10px_3px]  shadow-color-softBlue"
  },
  {
    id: 9,
    src: postgresql,
    className: "absolute bottom-2/4 mb-14 right-[49%] w-14 h-1/3 origin-bottom",
    rotate: 4,
    y: -50,
    delay: 1.2,
    duration: 0.8,
    imageClassName: "w-8 h-8 rounded-full mt-2 rotate-[4deg] shadow-[0_0_10px_3px]  shadow-color-softBlue"
  },
]



const Rings = () => {
    return (
      <>
        <div className="absolute top-1/2 left-1/2 w-[95.875rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[61.375rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[46.125rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </>
    );
  };

export const BackgroundCircles = ({ parallaxRef }) => {

    return (
      <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:top-[5.5rem]">
        <Rings />

          {homeIcons.map((icon) => (

          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: icon.rotate, y: icon.y }}
            transition={{ duration: icon.duration, ease: "easeOut", delay: icon.delay}}
            className={icon.className}
            key={icon.id}
          >
            <img
              src={icon.src}
              className={icon.imageClassName}
              alt="icons"
            />
          </motion.div>
          ))}

      </div>
    );
  };
