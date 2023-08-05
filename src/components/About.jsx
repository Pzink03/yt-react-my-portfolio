import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

            </div>

            <p className='text-xl mt-20'>Hello! I'm excited to combine my passion for problem-solving and creativity by developing efficient and user-friendly web applications. I'm an adaptable, and collaborative software engineer who loves the challenges of learning new development tools, editors, and programming languages to create unique and pleasurable user experiences. My passion for software engineering stems from the ability to problem solve and figure out an effective solution in a collaborative way.</p>

            <br />
            <p className='text-xl'>
            Programming Languages | Python 3, JavaScript ES6+, SQL, HTML5, CSS
            <br />
Front-End | DOM manipulation, WebSockets, React, React Hooks, Redux Toolkit
<br />
Back-End | Django 4, PostgreSQL, MongoDB, FastAPI, RabbitMQ
<br />
System Design | Microservices, Domain-driven design, Message passing, Event sourcing
<br />
Developer Tools | Git, Docker, Insomnia

<br />
I look forward to hearing from you!

            </p>
        </div>
    </div>
  )
}

export default About
