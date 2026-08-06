import category from '@/data/category'
import Image from 'next/image'
import { useState } from 'react';
import React from 'react'

function Hero({userInput}:any) {
  const [searchInput,setSearchInput]=useState<string>();
  return (
    <div className='text-center mt-4'>
      <div className='relative w-full'>
        <Image src='/bg3.png' alt='hero-image' width={500} height={100} className='w-full h-[480px] object-cover' />
        <div className='absolute top-4 left-1/2 -translate-x-1/2 w-full px-4 pb-6'>
          <h2 className='text-[55px] text-red-400 tracking-widest font-semibold'>DISCOVER</h2>
          <h2 className='text-[20px] text-gray-500'>Your Amazing City</h2>

          <div className='mt-5 z-10 flex justify-center w-full'>
            <div className='flex w-full max-w-3xl px-4'>
              <input type='text'
              onChange={(e)=>setSearchInput(e.target.value)}
              placeholder='Search Anything'
                className='flex-grow bg-white p-3 text-base border border-gray-300 rounded-full px-6 shadow-sm outline-red-300'
              />
              <button 
              onClick={()=>userInput(searchInput)}
              className='bg-red-400 rounded-full p-3 shadow-md z-10 hover:scale-105 transition-transform ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
            <div className='mt-5 flex flex-col justify-center items-center'>
            <h2 className='mt-2 text-gray-500'>Or Browse the Category</h2>
            <div className='grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3'>
              {category.map((item,index)=>(
                <div  key={index} className='border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-500 hover:scale-110 cursor-pointer transition-all'> 
                  <Image src={item.icon} alt={item.name} width={70} height={50}/>
                </div>  

              
              ))}
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
