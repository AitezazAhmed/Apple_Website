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
    <nav  className='flex justify-center gap-9 h-11 items-center'>
     <div ><img src="/Apple.svg" alt="Apple Logo" width={17} /></div>
        <ul className='flex gap-9'>
            {navData.navItems.map((item,idx)=>{
               return <li className='text-white opacity-80 text-xs hover:opacity-100 transition-all cursor-pointer' key={idx}>{item.name}</li>
            })}
        </ul>
        <div className=' opacity-80 hover:opacity-100 transition-all cursor-pointer'> <img  src="/search.svg" alt="" width={17} /></div>
        <div className=' opacity-80 hover:opacity-100 transition-all cursor-pointer'> <img  src="https://img.icons8.com/pastel-glyph/50/FFFFFF/paper-bag.png" width={17} alt="paper-bag"/></div>
    </nav>
  )
}

export default Nav
