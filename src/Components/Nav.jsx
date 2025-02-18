import React from 'react'

const navData = {
    "navItems": [
      {
        "name": "Store",
      },
      {
        "name": "Mac",
      },
      {
        "name": "iPad",
  
      },
      {
        "name": "iPhone",
     
      },
      {
        "name": "Watch",
        
      },
      {
        "name": "Vision",
     
      },
      {
        "name": "AirPods",
        
      },
      {
        "name": "TV & Home",
       
      },
      {
        "name": "Entertainment",
        
      },
      {
        "name": "Accessories",
       
      },
      {
        "name": "Support",
       
      }
    ]
  };
  
const Nav = () => {
  return (
    <nav  className=' w-full flex justify-center gap-9 h-11 items-center max-lg:gap-3 max-sm: gap-x-3 '>
     <div ><img src="/Apple.svg" alt="Apple Logo" width={20} /></div>
        <ul className='flex gap-9  max-lg:gap-3  max-sm:hidden  '>
            {navData.navItems.map((item,idx)=>{
               return <li className='text-white opacity-80 text-xs hover:opacity-100 transition-all cursor-pointer' key={idx}>{item.name}</li>
            })}
        </ul>
        <div className=' opacity-80 hover:opacity-100 transition-all cursor-pointer flex max-sm: gap-x-2 max-sm:justify-end max-sm:flex-1'> <img  src="/search.svg" alt="" width={17} />
        <img  src="https://img.icons8.com/pastel-glyph/50/FFFFFF/paper-bag.png" width={17} alt="paper-bag"/></div>
    </nav>
  )
}

export default Nav
