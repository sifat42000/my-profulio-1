"use client";

import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10'>
            <div className='w-full h-[65px] flex items-center justify-between'>
                
                {/* Logo */}
                <a href='#about-me' className='flex items-center'>
                    <Image
                        src='/NavLogo.png'
                        alt='logo'
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-slowspin'
                    />
                </a>

                {/* Menu Button (Mobile) */}
                <button
                    className='md:hidden text-gray-200 focus:outline-none z-[60]'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Overlay with Blur Background */}
                {isOpen && (
                    <div className='fixed inset-0 bg-[#030014]/30 backdrop-blur-xl z-40 transition-all duration-300'></div>
                )}

                {/* Navigation Links */}
                <div
                    className={`absolute md:relative top-[65px] md:top-0 left-0 w-full md:w-auto bg-[#0300144f] md:bg-transparent flex flex-col md:flex-row items-center gap-5 p-5 md:p-0 transition-all duration-300 ${
                        isOpen ? 'block z-50' : 'hidden md:flex'
                    }`}
                >
                    {['About me', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className='text-gray-200 hover:text-[#7042f8] transition-colors duration-300'
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className='hidden md:flex items-center gap-5'>
                    {Socials.map((social) => (
                        <a key={social.name} href={social.link} target='_blank' rel='noopener noreferrer'>
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                className='hover:scale-110 transition-transform duration-300'
                            />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
