import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

            </div>

            <p className='text-xl mt-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit provident, harum qui illum repellat voluptatibus, repellendus animi totam quidem sequi veritatis, voluptatum odio minus? Consequatur, reprehenderit non praesentium totam nesciunt natus inventore molestiae vero perferendis laboriosam cumque perspiciatis veritatis exercitationem facere optio voluptatem quis debitis cupiditate, eos ducimus iusto?</p>

            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ratione officia sequi asperiores. Error quod sapiente eum cum libero nesciunt totam at, recusandae corrupti corporis saepe, fuga nobis ab nihil.

            </p>
        </div>
    </div>
  )
}

export default About
