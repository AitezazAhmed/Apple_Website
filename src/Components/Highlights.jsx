import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import VideoCarousel from './VideoCarousel';
const Section = () => {
  useGSAP(() => {
    gsap.to("#highlights", {
      opacity: 1,
     
      y:-50,
    });
  }, []);
  useGSAP(() => {
    gsap.to("#link", {
      opacity: 1,
      duration: 1,
      y:-50,
      stagger:0.25
    });
  }, []);
  return (
    <section  className='sm:py-32 py-20 sm:px-10 px-5 w-full overflow-hidden h-full bg-zinc-900'>
      <div className=' margin-inline-start: auto;margin-inline-end: auto;position: relative;max-width: 1120px;'>
        <div className='w-full mb-12 items-end justify-between md:flex  '>
          <h1 id='highlights' className=' text-white lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>Get the highlights.</h1>
         <div className='flex flex-wrap items-end gap-7 md:flex-1 md:justify-end  '>
          <a id='link' className=' link flex text-white opacity-0  translate-y-20' href=""> Watch the film <img src="/assets/images/watch.svg" alt="" /></a>
          <a id='link' className='link flex text-white opacity-0  translate-y-20 gap-1.5' href=""> Watch the event<img src="/assets/images/right.svg" alt="" /></a>
         </div>
        <div className='flex flex-wrap items-end gap-5'>
        </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Section
