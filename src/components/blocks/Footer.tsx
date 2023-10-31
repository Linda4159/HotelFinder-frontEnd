import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='sm:p-0 sm:text-xs sm:flex-wrap sm:pt-5 sm:h-28 flex flex-row h-56 justify-evenly text-slate-50 bg-[rgb(0,150,255)] p-12'>
        {/* <h1 className='mr-10'>HotelFinder</h1> */}
        
        <div className='flex flex-col'>
            <h1>Quick Links </h1>
            <h3>Home</h3>
            <h3>Contact Us</h3>
            <h3>Blog</h3>
            <h3>Services</h3>
        </div>
        <div className='flex flex-col'>
            <h1>Community</h1>
            <h3>Home</h3>
            <h3>Contact Us</h3>
            <h3>Blog</h3>
            <h3>Services</h3>
        </div>
        <div className='flex flex-col'>
            <h1>Sections</h1>
            <h3>Home</h3>
            <h3>Contact Us</h3>
            <h3>Blog</h3>
            <h3>Services</h3>
        </div>
        <div className='flex flex-col'>
            <h1>Top Cities</h1>
            <h3>Home</h3>
            <h3>Contact Us</h3>
            <h3>Blog</h3>
            <h3>Services</h3>
        </div>
        
    </div>
  )
}

export default Footer