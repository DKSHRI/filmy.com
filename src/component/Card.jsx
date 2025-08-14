import React from 'react'

const Card = ({ posterPath, title, handleaddtowatchlist, movieObj }) => {
  return (
    <div className='w-[12.5vw]'>
      <div
        className='rounded-xl object-cover h-[40vh] p-[10px] transition-transform duration-300 hover:scale-105 relative'
        style={{
          backgroundImage: `url(${posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : '/fallback.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          onClick={() => handleaddtowatchlist(movieObj)}
          className="bg-white cursor-pointer flex justify-center h-8 w-8 items-center rounded-2xl absolute top-2 right-2"
        >
          <h2>&#128509;</h2>
        </div>
      </div>

      <p className='text-center mt-2 font-semibold text-lg truncate' title={title}>
        {title || "Movie Title"}
      </p>
    </div>
  )
}

export default Card
