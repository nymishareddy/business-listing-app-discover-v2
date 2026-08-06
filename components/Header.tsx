"use client"
import Image from 'next/image';
import React from 'react';

type Props = {
  onTabChange: (tab: string) => void;
};

function Header({ onTabChange }: Props) {
  return (
    <div className='flex justify-between p-3 px-5 shadow-sm bg-white z-10 relative'>
      <div className='flex gap-3 items-center'>
        <Image src='/logo.svg' alt='logo' width={50} height={50} />
        <h2 className='text-[25px] font-semibold text-red-500 tracking-widest'>DISCOVER</h2>
      </div>
      <ul className='flex gap-8 items-center'>
        <li onClick={() => onTabChange('home')} className='text-[18px] hover:text-red-400 cursor-pointer'>Home</li>
        <li onClick={() => onTabChange('about')} className='text-[18px] hover:text-red-400 cursor-pointer'>About Us</li>
        <li onClick={() => onTabChange('contact')} className='text-[18px] hover:text-red-400 cursor-pointer'>Contact Us</li>
      </ul>
    </div>
  );
}

export default Header;
