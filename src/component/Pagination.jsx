import React, { useState } from 'react'

const Pagination = ({ left, right, page }) => {
  return (
    <div className='bg-gray-400 flex justify-center items-center gap-4 p-2'>
      <a href="#" onClick={left} className="px-3 py-1 text-xl font-bold hover:bg-gray-500 rounded">&lt;</a>
   <h1 className="text-xl font-bold">{page}</h1>

      <a href="#" onClick={right} className="px-3 py-1 text-xl font-bold hover:bg-gray-500 rounded">&gt;</a>
    </div>
  )
}

export default Pagination