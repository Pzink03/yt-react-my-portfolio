import React from 'react';
import { PortfolioCards } from './PortfolioCards';
import { SectionTitle } from './SectionTitle';

const Portfolio = () => {
    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white flex flex-col justify-center items-center pt-12 md:pt-52'>
            <div className='lg:max-w-[85rem] md:max-w-[40rem] max-w-[30rem] pt-20 md:mx-auto flex flex-col justify-center items-center w-full h-full'>
                    <SectionTitle title="Projects" />
                    <PortfolioCards />
                </div>

        </div>
    );
};

export default Portfolio;
