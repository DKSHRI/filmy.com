import React, { useState } from 'react';


const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};


const Watchlist = ({ watchlist, setWatchlist }) => {
  const [search, setSearch] = useState('');

  const filteredList = watchlist.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const removeFromWatchlist = (id) => {
    setWatchlist(prev => prev.filter(movie => movie.id !== id));
  };

  return (
    <>
      {/* Genre buttons */}
      <div className="flex gap-1.5 justify-center flex-wrap m-4">
        {[...new Set(watchlist.flatMap(movie => movie.genre_ids))].map(id => (
          <div key={id} className='w-[5.5rem] bg-blue-500 flex justify-center items-center rounded-xl text-center'>
            {genreMap[id] || 'Unknown'}
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex justify-center items-center">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='h-[3rem] w-[18rem] bg-gray-200 rounded-md p-2 m-[20px] text-center'
          type="text"
          placeholder="Search Movies..."
        />
      </div>

      {/* Watchlist table */}
      <div className="border border-gray-300 rounded-md m-8">
        <table className="w-full text-center">
          <thead className='border-b-2'>
            <tr className="bg-gray-200">
              <th className="py-2">Image</th>
              <th className="py-2">Name</th>
              <th className="py-2">Popularity</th>
              <th className="py-2">Rating</th>
              <th className="py-2">Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map(movie => (
              <tr key={movie.id}>
                <td className='flex justify-center items-center'>
                  <img 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={movie.title} 
                    className="w-24 h-36 object-cover" 
                  />
                </td>
                <td>{movie.title}</td>
                <td>{movie.popularity}</td>
                <td>{movie.vote_average}</td>
                <td>{movie.genre_ids.map(id => genreMap[id]).join(', ')}</td>
                <td 
                  onClick={() => removeFromWatchlist(movie.id)} 
                  className="text-red-500 cursor-pointer"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
