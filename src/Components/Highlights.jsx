import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
const Section = () => {
  useGSAP(() => {
    gsap.to("#highlights", {
      opacity: 1,
      delay: 1.5,
      y:-50
    });
  }, []);
  return (
    <section  className=' sm:py-32 py-20 sm:px-10 px-5 w-full overflow-hidden h-full bg-zinc-900'>
      <div className=' margin-inline-start: auto;margin-inline-end: auto;position: relative;max-width: 1120px;'>
        <div className='w-full mb-12 flex items-end justify-between '>
          <h1 id='highlights' className=' text-white lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>Get the highlights.</h1>
        <div className='flex flex-wrap items-end gap-5'>
      
        </div>
      
        </div>
      </div>
    </section>
  )
}

export default Section
