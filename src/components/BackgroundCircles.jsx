import { MouseParallax } from "react-just-parallax";
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
// import appwrite from "../assets/appwrite.png"
import react from "../assets/react.png"
// import python from "../assets/Python.png"
// import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
// import postgresql from "../assets/postgresql.png"
import typescript from "../assets/Typescriptlogo.png"
// import django from "../assets/Django.png"
// import bootstrap from "../assets/Bootstrap.png"
// import docker from "../assets/Docker.png"
// import fastapi from "../assets/fastapi.png"

const Rings = () => {
    return (
      <>
        <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </>
    );
  };

export const BackgroundCircles = ({ parallaxRef }) => {

    return (
      <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[2rem]">
        <Rings />
        <MouseParallax strength={0.02} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[36deg]">
            <img
            src={javascript}
            className="w-12 h-12 rounded-lg -rotate-[36deg] "
            alt="javascript"
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[36deg]">
            <img
            src={typescript}
            className="w-12 h-12 rounded-lg mt-2 rotate-[36deg]"
            alt="typescript"
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <img
            src={react}
            className="w-12 h-12 rounded-lg"
            alt="react"
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[95deg]">
            <img
            src={tailwind}
            className="w-12 h-12 rounded-lg rotate-[75deg]"
            alt="tailwind"
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[95deg]">
            <img
            src={html}
            className="w-12 h-12 rounded-lg mt-24 mr-24 -rotate-[95deg]"
            alt="html"
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <img
            src={css}
            className="w-12 h-12 rounded-lg mt-44 mr-64 -rotate-[70deg]"
            alt="css"
            />
          </div>
        </MouseParallax>
      </div>
    );
  };
