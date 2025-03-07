"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]'
        >
            {/* Left Content */}
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                
                {/* Welcome Box */}
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box flex items-center py-2 px-3 border border-[#7042f88b] opacity-[0.9] rounded-lg'
                >
                    <SparklesIcon className='text-[#b49bff] mr-2 h-5 w-5' />
                    <h1 className='Welcome-text text-[12px] md:text-[13px]'>
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                {/* Hero Title */}
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-4 mt-6 text-4xl md:text-6xl font-bold text-white w-full'
                >
                    <span>
                        Hello, It's Me
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                            {" "}Rashiquzzaman{" "}
                        </span>
                        Sifat
                    </span>
                </motion.div>

                {/* Hero Description */}
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-base md:text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I&apos;m a MERN stack developer. Check out my projects and skills.
                </motion.p>

                {/* Learn More Button */}
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] md:max-w-[200px] bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300'
                >
                    Learn More!
                </motion.a>
            </div>

            {/* Right Image */}
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full flex justify-center items-center mt-10 md:mt-0'
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt='work icons'
                    height={450}
                    width={450}
                    className="max-w-[300px] sm:max-w-[400px] md:max-w-[650px] w-full h-auto"
                    priority
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
