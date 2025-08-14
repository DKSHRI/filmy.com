
# Movie Watchlist App

## Overview

A React-based web application that lets users browse trending movies, add them to a watchlist, and manage it efficiently. Movie data is fetched from [The Movie Database (TMDb) API](https://www.themoviedb.org/), and the interface is styled with **Tailwind CSS** for a responsive, modern design.

---

## Features

* **Browse Trending Movies** – Displays trending movies fetched from TMDb API.
* **Add to Watchlist** – Save movies to your personal watchlist with one click.
* **Watchlist Management** – View, search, and remove movies from your watchlist.
* **Pagination** – Navigate through multiple pages of trending movies.
* **Responsive Design** – Optimized for mobile and desktop devices.
* **Search Functionality** – Filter watchlist movies by title.
* **Genre Display** – View genres associated with watchlist movies.

---

## Technologies Used

* **React** – Frontend JavaScript library.
* **React Router** – For client-side routing.
* **Tailwind CSS** – Utility-first CSS framework.
* **Axios** – For API requests.
* **TMDb API** – Source for movie data.

---

## Project Structure

```
├── src/
│   ├── assets/
│   │   ├── banner.jpg         # Banner image
│   │   └── logo.png           # Navbar logo
│   ├── component/
│   │   ├── Bannner.jsx        # Banner component
│   │   ├── Card.jsx           # Movie card component
│   │   ├── Movie.jsx          # Trending movies page
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Pagination.jsx     # Pagination controls
│   │   └── Watchlist.jsx      # Watchlist page
│   ├── App.jsx                # App state & routing
│   ├── App.css                # Tailwind imports
│   ├── index.css              # Tailwind imports
│   └── main.jsx               # Entry point
├── README.md
└── package.json
```

---

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd movie-watchlist-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up TMDb API key**

   * Get an API key from [TMDb](https://www.themoviedb.org/documentation/api).
   * For demonstration, the API key is inside `Movie.jsx`.
   * In production, store it securely (e.g., environment variables).

4. **Run the application**

   ```bash
   npm start
   ```

---

## Usage

### Movies Page

* Browse trending movies.
* Click the bookmark icon to add to watchlist.
* Use pagination to navigate between pages.

### Watchlist Page

* View saved movies in a table format.
* Search by movie title.
* View associated genres.
* Remove movies with the delete option.

---

## Components

* **Navbar.jsx** – App logo & navigation links.
* **Bannner.jsx** – Banner image & overlay text.
* **Card.jsx** – Individual movie cards.
* **Movie.jsx** – Fetches & displays trending movies.
* **Pagination.jsx** – Navigation buttons for movie pages.
* **Watchlist.jsx** – Displays & manages watchlist.
* **App.jsx** – Handles state & routing.

---

## Styling

* **Tailwind CSS** for modern responsive UI.
* Movie cards scale on hover.
* Clean watchlist table layout.
* Interactive hover effects for buttons and pagination.

---

## API Integration

* **Endpoint:**

  ```
  https://api.themoviedb.org/3/movie/popular?api_key=<API_KEY>&language=en-US&page=<PAGE>
  ```
* Axios is used for fetching movie data.
* Pagination updates results dynamically.

---

## Notes

* Duplicate movies are avoided using movie IDs.
* A fallback image is used if no poster is available (`/fallback.png`).
* Paths for banner & logo can be updated in `Bannner.jsx` & `Navbar.jsx`.

---

## Future Improvements

* Add **user authentication** for persistent watchlists.
* Sorting options (popularity, rating, release date).
* Better error handling for API failures.
* Loading spinner during API requests.
* Dynamic banner from TMDb API.

---

## License

Licensed under the **MIT License**.

---

If you want, I can also make a **shorter, marketing-friendly README** for GitHub that looks cleaner and more visually engaging with badges and screenshots. Would you like me to do that?
