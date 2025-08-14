import React, { useEffect, useState } from 'react'

import Pagination from './Pagination'
import Card from './Card'
import axios from 'axios'

const Movie = ({ handleaddtowatchlist }) => {
  
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const left = (e) => {
    e.preventDefault();
    setPage(prev => (prev > 1 ? prev - 1 : 1));
  };

  const right = (e) => {
    e.preventDefault();
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=709c5e80d63554f8b36253cd89929dbd&language=en-US&page=${page}`).then(response => {
        setMovies(response.data.results); // Set movies from API response
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, [page]);

  return (
    <>
    
     <div>
    
      <div className='text-2xl font-bold text-center my-4'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around items-center gap-4'>
        {movies.map(movieObj => (
         <Card
  key={movieObj.id}
  posterPath={movieObj.poster_path}
  title={movieObj.title}
handleaddtowatchlist={handleaddtowatchlist}
  movieObj={movieObj}
/>

        ))}
      </div>
      <Pagination left={left} right={right} page={page} />

    </div>
   
    
    </>
   
  )
}

export default Movie