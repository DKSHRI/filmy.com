import React from 'react'
import banner from '../assets/banner.jpg'
const Bannner = () => {
  return (
    <div>
      <img
        src={banner}
        alt="Banner"
        className="h-[20vh] md:h-[70vh] w-full object-cover"
      />
      <div className='  bg-black bg-opacity-70 flex items-center justify-center'>
        <h1 className='text-white '>Avenger</h1>
      </div>
    </div>
  )
}

export default Bannner