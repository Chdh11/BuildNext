import React from 'react'
import Image from 'next/image'
import downIcon from '@/images/iconmonstr-arrow-down-circle-filled-240.png'

function Hero() {
  return (
    <div className='text-white bg-black'>
      <section className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm lg:mt-6">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-3 border-0 md:border-1 rounded">
             <h1 className="text-xl font-bold">BuildNext</h1>
            <button className="ml-auto border pl-4 pr-4 pt-1 pb-1 rounded cursor-pointer hidden md:block">
             Sign Up
            </button>
        </div>
        </section>

      <section className='flex flex-col justify-center items-center text-center w-2/3 mx-auto mt-30 md:mt-45 lg:mt-60 mb-20 md:mb-25 lg:mb-35 '>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl  mb-7'>Stop overthinking Start building</h1>
        <p className='mb-7 text-xs md:text-base'>Turn your stack, goals, and time into project ideas you can start today.</p>
        <button className='border-1 px-4 py-3 text-xs md:text-base rounded cursor-pointer'>Build Your Next Project</button>
      </section>
        {/* <div className='block md:hidden w-2xl'></div> */}
      <Image priority src={downIcon} alt="Down" className='w-[40px] h-[40px] mx-auto hidden md:block mb-25 lg:mb-35  animate-bounce' />

      <section className='flex flex-col justify-center items-center mb-20 md:mb-30 lg:mb-40'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-20 lg:mb-25'>Get Started</h1>
       <div className="flex flex-col md:flex-row gap-10">
            <div className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] bg-white">Card 1</div>
            <div className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] bg-white">Card 2</div>
            <div className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] bg-white">Card 3</div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-20 lg:mb-25'>Why BuildNext?</h1>
        <div className='ml-10 mr-10 md:ml-30 md:mr-30'>

            <div className='flex flex-col lg:flex-row gap-7  mb-10 min-w-0'>
                <div className=''>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3'>Heading</h1>
                    <p className='text-xs lg:text-base'>Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quidem? Nulla nostrum pariatur culpa, ipsa iusto architecto aspernatur aperiam aliquam? Sunt repudiandae exercitationem cupiditate quis corporis totam rem reiciendis voluptates.</p>
                </div>
                <div className='bg-white h-[200px] md:h-[250px]'>
                    {/* image */} Image
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-7 mb-10 min-w-0'>
                <div className='bg-white hidden lg:block h-[200px] md:h-[250px]'>
                    {/* image */} Image
                </div>
                <div className=''>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3'>Heading</h1>
                    <p className='text-xs lg:text-base'>Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quidem? Nulla nostrum pariatur culpa, ipsa iusto architecto aspernatur aperiam aliquam? Sunt repudiandae exercitationem cupiditate quis corporis totam rem reiciendis voluptates.</p>
                </div>
                <div className='bg-white block lg:hidden h-[200px] md:h-[250px]'>
                    {/* image */} Image
                </div>
            </div>

        </div>
      </section>

      <section className='flex flex-col justify-center items-center w-[70%] lg:w-[60%] text-center w-1/2 mx-auto mt-20 lg:mt-40 mb-40 lg:mb-55'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-10'>Get Your Next Project Idea</h1>
        <button className='border-1 p-4 rounded cursor-pointer text-xs md:text-base'>Build Your Next Project</button>
      </section>

      <section className='bg-white text-black flex flex-col md:flex-row  gap-3 px-8 lg:px-20 py-10'>
        <div className='md:w-[60%] lg:w-[40%]'>
            <h1 className='font-bold text-lg'>BuildNext</h1>
            <p className='text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates sapiente rerum, dicta dolorum ipsum eum ea reiciendis qui vel!</p>
            <div>
                <h1 className='text-xs lg:text-base mt-2'>Contribute</h1>
                
            </div>
        </div>
        <div className='md:ml-auto md:text-right'>
            <h1 className='font-bold text-lg'>Contact</h1>
            <p className='text-xs lg:text-base'>chhavidhankhar07@gmail.com</p>
            <div>
               
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
