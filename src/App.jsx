import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Movie from './component/Movie';
import Watchlist from './component/Watchlist';
import Bannner from './component/Bannner';
import Pagination from './component/Pagination';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    // Avoid duplicates
    setWatchlist((prev) => {
      if (prev.some((movie) => movie.id === movieObj.id)) {
        return prev;
      }
      return [...prev, movieObj];
    });
    console.log("Added to watchlist:", movieObj);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Default route redirects to /movie */}
        <Route path="/" element={<Navigate to="/movie" />} />

        {/* Movies page */}
        <Route
          path="/movie"
          element={
            <>
              <Bannner />
              <Movie handleaddtowatchlist={handleAddToWatchlist} />
            </>
          }
        />

        {/* Watchlist page */}
        <Route
          path="/watchlist"
          element={
            <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
