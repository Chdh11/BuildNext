import React from 'react'
import Image from 'next/image'
import downIcon from '@/images/iconmonstr-arrow-down-circle-filled-240.png'

function Hero() {
  return (
    <div>
        {/* fixed top-0 left-0 z-100 */}
      <section className='flex flex-row items-center w-[95vw] p-4 ml-8 mr-8 mt-8 mb-6 m border-1 rounded '>
        <h1 className='text-xl'>BuildNext</h1>
        <button className='ml-auto border-1 pl-4 pr-4 pt-1 pb-1 rounded cursor-pointer'>Sign Up</button>
        {/* <img className=''></img> */}
      </section>

      <section className='flex flex-col justify-center items-center w-[60%] text-center w-1/2 mx-auto mt-35'>
        <h1 className='text-8xl mb-7'>Stop overthinking Start building</h1>
        <p className='mb-7'>Turn your stack, goals, and time into project ideas you can start today.</p>
        <button className='border-1 p-4 rounded cursor-pointer'>Build Your Next Project</button>
      </section>

      <Image priority src={downIcon} alt="Follow us on Twitter" className='w-[45px] h-[45px] mx-auto mt-35 mb-35 animate-bounce' />

      <section className='flex flex-col justify-center items-center mb-40'>
        <h1 className='text-5xl mb-25'>Get Started</h1>
        <div className='flex flex-row gap-10 '>
            <div className='w-sm h-[300px] bg-white'>Card 1</div>
            <div className='w-sm h-[300px] bg-white'>Card 2</div>
            <div className='w-sm h-[300px] bg-white'>Card 3</div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl mb-35'>Why BuildNext?</h1>
        <div className='w-[70%]'>
            <div className='flex flex-row gap-20 mb-30'>
                <div className='w-[600px]'>
                    <h1 className='text-3xl mb-5'>Heading</h1>
                    <p>Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quidem? Nulla nostrum pariatur culpa, ipsa iusto architecto aspernatur aperiam aliquam? Sunt repudiandae exercitationem cupiditate quis corporis totam rem reiciendis voluptates.</p>
                </div>
                <div className='bg-white w-[500px] h-[300px]'>
                    {/* image */} Image
                </div>
            </div>
            <div className='flex flex-row gap-20 mb-30'>
                <div className='bg-white w-[500px] h-[300px]'>
                    {/* image */} Image
                </div>
                <div className='w-[600px]'>
                    <h1 className='text-3xl mb-5'>Heading</h1>
                    <p>Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quidem? Nulla nostrum pariatur culpa, ipsa iusto architecto aspernatur aperiam aliquam? Sunt repudiandae exercitationem cupiditate quis corporis totam rem reiciendis voluptates.</p>
                </div>
            </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center w-[60%] text-center w-1/2 mx-auto mt-30 mb-50'>
        <h1 className='text-8xl mb-20'>Get Your Next Project Idea</h1>
        <button className='border-1 p-4 rounded cursor-pointer'>Build Your Next Project</button>
      </section>
    </div>
  )
}

export default Hero
