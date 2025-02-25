import React from 'react'
import { techs } from '../constants'
import { SectionTitle } from './SectionTitle'




const Experience = () => {

  return (
    <div name='skills' className='bg-gradient-to-t from-black to-gray-800 w-auto h-auto pt-12 md:pt-52 p-4'>
        <div className='max-w-screen-lg mx-auto pt-20 flex flex-col justify-center w-auto h-auto text-white'>
            <SectionTitle title="Skills" />
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 font-jetbrains'>
                {techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img
                        src={src}
                        alt=''
                        className='w-20 mx-auto'
                        />
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience
