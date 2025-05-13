import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

import appwrite from "./assets/icons/appwrite.png"
import python from "./assets/icons/PythonIcon.png"
import mongoDB from "./assets/icons/MongoDBIcon.png"
import github from "./assets/icons/GitHubIcon.png"
import postgresql from "./assets/icons/PostgreSQLIcon.png"
import django from "./assets/icons/DjangoIcon.png"
import docker from "./assets/icons/DockerIcon.png"
import bootstrap from "./assets/icons/BootstrapIcon.png"
import fastapi from "./assets/icons/FastAPIIcon.png"
import gitlab from "./assets/icons/GitLabIcon.png"
import javascript from "./assets/icons/JavaScriptIcon.png"
import html from "./assets/icons/HTMLIcon.png"
import css from "./assets/icons/CSSIcon.png"
import typescript from "./assets/icons/TypeScriptIcon.png"
import tailwind from "./assets/icons/TailwindIcon.png"
import react from "./assets/icons/ReactIcon.png"

import peteTubeVid from "./assets/videos/PeteTubeVideo.mp4"
import peteTube from "./assets/portfolio/PeteTubeImage.JPG"
import peteTubeText from "./assets/portfolio/PeteTubeTitle.svg"
import rentovation from "./assets/portfolio/RentovationImage.png"
import carlink from "./assets/portfolio/CarLinkImage.jpg"
import gabhub from "./assets/portfolio/GabHubImage.JPG"
import jobBoard from "./assets/portfolio/EmploymentPuzzleImage.JPG"
import taskme from "./assets/portfolio/TaskMeImage.jpg"
import rent from "./assets/videos/RentovationVideo.mp4"
import taskmevid from "./assets/videos/TaskMeVideo.mp4"
import gabHubText from "./assets/portfolio/GabHubTitle.svg"
import taskMeText from "./assets/portfolio/TaskMeTitle.svg"
import employmentPuzzle from "./assets/portfolio/EmploymentPuzzleTitle.svg"
import rentovationText from "./assets/portfolio/RentovationTitle.svg"
import carLink from "./assets/portfolio/CarLinkTitle.svg"
import carLinkVid from "./assets/videos/CarLinkVideo.mp4"

export const portfolioCards = [
  {
    id: 1,
    image: gabhub,
    href: "https://github.com/Pzink03/GabHub",
    video: null,
    website: "https://gabhub.netlify.app",
    description:
      "Developed a dynamic social media application where users can create, like, and save posts, fostering content sharing and user engagement. I decided to incorporate Appwrite for media storage, end-to-end backend server capabilities, easy to manage API creation, and increased authentication and security measures. This allowed me to execute comprehensive CRUD functionality, allowing users to manage their posts, liked content, saved posts, and additional multimedia within the application. For the styling I decided to use Tailwind as well as some custom CSS to handle certain Tailwind limitations. This allowed me to implement a fully responsive design.",
    title: gabHubText,
    subtitle: "Fullstack Developer",
    icons: [
      {
        // img:[python, django, css, html, github],
        img: javascript,
        style: "shadow-yellow-400",
        tooltip: "Javascript",
      },
      {
        // img:[python, django, css, html, github],
        img: react,
        style: "shadow-sky-300",
        tooltip: "React",
      },
      {
        // img:[python, django, css, html, github],
        img: typescript,
        style: "shadow-blue-400",
        tooltip: "TypeScript",
      },
      {
        // img:[python, django, css, html, github],
        img: appwrite,
        style: "shadow-red-400",
        tooltip: "Appwrite",
      },
      {
        // img:[python, django, css, html, github],
        img: css,
        style: "shadow-blue-400",
        tooltip: "CSS",
      },
      {
        // img:[python, django, css, html, github],
        img: tailwind,
        style: "shadow-teal-400",
        tooltip: "FastAPI",
      },
      {
        // img:[python, django, css, html, github],
        img: github,
        style: "shadow-gray-400",
        tooltip: "GitHub",
      },
    ],
    style: "shadow-blue-400",
  },
  {
    id: 2,
    image: jobBoard,
    href: "https://github.com/Pzink03/Employment-Puzzle",
    video: null,
    website: "https://employmentpuzzle.netlify.app",
    description:
      "While developing this already existing job board website I implemented front-end features to enhance overall functionality and user interface. Implementing custom React hooks I integrate context functionality, giving the application dynamic features such as a user-friendly dark mode. I also designed and integrated the use of Stripe payments, providing a solution for job listing renewals and facilitating updates to job statuses. Also, I introduced job listing filtering, hiding, and favoriting features, utilizing local storage to ensure persistent UI interactions.",
    note: " Currently working on authentication when the app is deployed. For feature videos, please check out my LinkedIn, or feel free to clone the project and test it in a local environment. Thanks!",
    title: employmentPuzzle,
    subtitle: "Frontend Developer",
    icons: [
      {
        // img:[python, django, css, html, github],
        img: javascript,
        style: "shadow-yellow-400",
        tooltip: "Javascript",
      },
      {
        // img:[python, django, css, html, github],
        img: react,
        style: "shadow-sky-300",
        tooltip: "React",
      },
      {
        // img:[python, django, css, html, github],
        img: typescript,
        style: "shadow-blue-400",
        tooltip: "TypeScript",
      },
      {
        // img:[python, django, css, html, github],
        img: css,
        style: "shadow-blue-400",
        tooltip: "CSS",
      },
      {
        // img:[python, django, css, html, github],
        img: tailwind,
        style: "shadow-teal-400",
        tooltip: "FastAPI",
      },
      {
        // img:[python, django, css, html, github],
        img: github,
        style: "shadow-gray-400",
        tooltip: "GitHub",
      },
    ],
    style: "shadow-blue-400",
  },
  {
    id: 3,
    image: rentovation,
    href: "https://github.com/Pzink03/Rent-ovation",
    video: rent,
    description:
      "Featuring personalized interfaces for users, enabling signups, property and appointment management, all supported by custom CSS. JWT authentication has been implemented to restrict functionality for unauthenticated users",
    title: rentovationText,
    subtitle: "Fullstack Developer",
    icons: [
      {
        // img:[python, django, css, html, github],
        img: javascript,
        style: "shadow-yellow-400",
        tooltip: "Javascript",
      },
      {
        // img:[python, django, css, html, github],
        img: react,
        style: "shadow-sky-300",
        tooltip: "React",
      },
      {
        // img:[python, django, css, html, github],
        img: python,
        style: "shadow-yellow-400",
        tooltip: "Python",
      },
      {
        // img:[python, django, css, html, github],
        img: postgresql,
        style: "shadow-blue-400",
        tooltip: "PostgreSQL",
      },
      {
        // img:[python, django, css, html, github],
        img: css,
        style: "shadow-blue-400",
        tooltip: "CSS",
      },

      {
        // img:[python, django, css, html, github],
        img: fastapi,
        style: "shadow-teal-400",
        tooltip: "FastAPI",
      },
      {
        // img:[python, django, css, html, github],
        img: docker,
        style: "shadow-blue-400",
        tooltip: "Docker",
      },
      {
        // img:[python, django, css, html, github],
        img: github,
        style: "shadow-gray-400",
        tooltip: "GitHub",
      },
    ],
    style: "shadow-blue-400",
  },
  {
    id: 4,
    image: carlink,
    href: "https://github.com/Pzink03/Car-Link",
    video: carLinkVid,
    description:
      "This application facilitates automobile inventory tracking, appointment booking, and sales recording. It optimizes database operations and model relationships through Django's ORM (Object Relational Mapping) framework.",
    title: carLink,
    subtitle: "Fullstack Developer",
    icons: [
      {
        // img:[python, django, css, html, github],
        img: javascript,
        style: "shadow-yellow-400",
        tooltip: "JavaScript",
      },
      {
        // img:[python, django, css, html, github],
        img: react,
        style: "shadow-sky-300",
        tooltip: "React",
      },
      {
        // img:[python, django, css, html, github],
        img: python,
        style: "shadow-yellow-400",
        tooltip: "Python",
      },
      {
        // img:[python, django, css, html, github],
        img: django,
        style: "shadow-green-600",
        tooltip: "Django",
      },
      {
        // img:[python, django, css, html, github],
        img: bootstrap,
        style: "shadow-purple-700",
        tooltip: "Bootstrap",
      },
      {
        // img:[python, django, css, html, github],
        img: css,
        style: "shadow-blue-400",
        tooltip: "HTML",
      },
      {
        // img:[python, django, css, html, github],
        img: docker,
        style: "shadow-blue-400",
        tooltip: "Docker",
      },
      {
        // img:[python, django, css, html, github],
        img: github,
        style: "shadow-gray-400",
        tooltip: "GitHub",
      },
    ],
  },
  {
    id: 5,
    image: taskme,
    href: "https://github.com/Pzink03/TaskMe",
    video: taskmevid,
    description:
      "Enabling users to efficiently create and oversee tasks, the application employs a responsive UI built on a Django database. This allows users to seamlessly manage projects and associated tasks.",
    title: taskMeText,
    subtitle: "Fullstack Developer",
    icons: [
      {
        // img:[python, django, css, html, github],
        img: python,
        style: "shadow-yellow-400",
        tooltip: "Python",
      },
      {
        // img:[python, django, css, html, github],
        img: django,
        style: "shadow-green-600",
        tooltip: "Django",
      },
      {
        // img:[python, django, css, html, github],
        img: css,
        style: "shadow-blue-400",
        tooltip: "CSS",
      },
      {
        // img:[python, django, css, html, github],
        img: html,
        style: "shadow-orange-400",
        tooltip: "HTML",
      },
      {
        // img:[python, django, css, html, github],
        img: github,
        style: "shadow-gray-400",
        tooltip: "GitHub",
      },
    ],
  },
  {
    id: 6,
    image: peteTube,
    href: "https://github.com/Pzink03/Youtube-clone",
    video: peteTubeVid,
    website: "",
    description:
      "Created a mock YouTube homepage as a personal project. Despite not utilizing any external APIs, the focus was on recreating the popular and complex YouTube interface. This project served as a fun creative challenge that tested my styling ability.",
    title: peteTubeText,
    subtitle: "Youtube's Homepage",
    icons: [
      {
        // img:[python, django, css, html, github],
        img: javascript,
        style: "shadow-yellow-400",
        tooltip: "Javascript",
      },
      {
        // img:[python, django, css, html, github],
        img: react,
        style: "shadow-sky-300",
        tooltip: "React",
      },
      {
        // img:[python, django, css, html, github],
        img: typescript,
        style: "shadow-blue-400",
        tooltip: "TypeScript",
      },
      {
        // img:[python, django, css, html, github],
        img: css,
        style: "shadow-blue-400",
        tooltip: "CSS",
      },
      {
        // img:[python, django, css, html, github],
        img: tailwind,
        style: "shadow-teal-400",
        tooltip: "FastAPI",
      },
      {
        // img:[python, django, css, html, github],
        img: github,
        style: "shadow-gray-400",
        tooltip: "GitHub",
      },
    ],
    style: "shadow-blue-400",
  },
]

export const navLinks = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "projects",
  },
  {
    id: 4,
    link: "skills",
  },
]

export const links = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={25} />
      </>
    ),
    href: "https://www.linkedin.com/in/pete-zink-84199025b/",
    style: "",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={25} />
      </>
    ),
    href: "https://github.com/PZink03",
  },
  {
    id: 3,
    child: (
      <>
        <HiOutlineMail size={25} />
      </>
    ),
    href: "mailto:pete.zink03@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        <BsFillPersonLinesFill size={25} />
      </>
    ),
    href: "/myresume.pdf",
    style: "",
    download: true,
  },
]

export const techs = [
  {
    id: 1,
    src: react,
    title: "React",
    style: "shadow-sky-300",
  },
  {
    id: 2,
    src: postgresql,
    title: "PostgreSQL",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: typescript,
    title: "TypeScript",
    style: "shadow-blue-400",
  },
  {
    id: 4,
    src: appwrite,
    title: "Appwrite",
    style: "shadow-red-400",
  },
  {
    id: 5,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 6,
    src: python,
    title: "Python",
    style: "shadow-yellow-500",
  },
  {
    id: 7,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 8,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 9,
    src: mongoDB,
    title: "MongoDB",
    style: "shadow-green-400",
  },
  {
    id: 10,
    src: django,
    title: "Django",
    style: "shadow-green-600",
  },
  {
    id: 11,
    src: bootstrap,
    title: "BootStrap",
    style: "shadow-purple-700",
  },
  {
    id: 12,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-300",
  },

  {
    id: 13,
    src: fastapi,
    title: "FastAPI",
    style: "shadow-teal-400",
  },

  {
    id: 14,
    src: docker,
    title: "Docker",
    style: "shadow-blue-400",
  },
  {
    id: 15,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 16,
    src: gitlab,
    title: "GitLab",
    style: "shadow-orange-400",
  },
  // {
  //   id: 17,
  //   src: figma,
  //   title: "Figma",
  //   style: "shadow-gray-400",
  // },
  // {
  //   id: 18,
  //   src: premierPro,
  //   title: "Adobe Premier Pro",
  //   style: "shadow-purple-700",
  // },
  // {
  //   id: 19,
  //   src: photoshop,
  //   title: "Adobe Photoshop",
  //   style: "shadow-blue-500",
  // },
]
