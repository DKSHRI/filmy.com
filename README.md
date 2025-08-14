Movie Watchlist App
Overview
This is a React-based web application that allows users to browse trending movies, add them to a watchlist, and manage their watchlist. The app fetches movie data from The Movie Database (TMDb) API and provides a responsive user interface styled with Tailwind CSS.
Features

Browse Trending Movies: Displays a list of trending movies fetched from the TMDb API.
Add to Watchlist: Users can add movies to their watchlist with a single click.
Watchlist Management: View, search, and remove movies from the watchlist.
Pagination: Navigate through pages of trending movies.
Responsive Design: Optimized for both mobile and desktop devices using Tailwind CSS.
Search Functionality: Filter movies in the watchlist by title.
Genre Display: Shows genres associated with movies in the watchlist.

Technologies Used

React: Frontend JavaScript library for building the user interface.
React Router: For client-side routing.
Tailwind CSS: Utility-first CSS framework for styling.
Axios: For making API requests to the TMDb API.
The Movie Database (TMDb) API: Provides movie data.

Project Structure
├── src/
│   ├── assets/
│   │   ├── banner.jpg        # Banner image for the movie page
│   │   └── logo.png          # Logo image for the navbar
│   ├── component/
│   │   ├── Bannner.jsx       # Banner component for the movie page
│   │   ├── Card.jsx          # Movie card component for displaying movie details
│   │   ├── Movie.jsx         # Main movie page component
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── Pagination.jsx    # Pagination component for navigating movie pages
│   │   └── Watchlist.jsx     # Watchlist page component
│   ├── App.jsx               # Main app component with routing and state management
│   ├── App.css               # Imports Tailwind CSS
│   ├── index.css             # Imports Tailwind CSS
│   └── main.jsx              # Entry point for React application
├── README.md                 # Project documentation
└── package.json              # Project dependencies and scripts

Installation

Clone the repository:
git clone <repository-url>
cd movie-watchlist-app


Install dependencies:
npm install


Set up TMDb API key:

Obtain an API key from The Movie Database (TMDb).
The API key is already included in the Movie.jsx component for demonstration purposes. In a production environment, store the API key securely (e.g., in environment variables).


Run the application:
npm start

The app will be available at http://localhost:3000.


Usage

Home Page: Redirects to the /movie route, displaying a banner and a list of trending movies.
Movies Page:
View trending movies fetched from the TMDb API.
Click the bookmark icon on a movie card to add it to the watchlist.
Use pagination buttons (< and >) to navigate through movie pages.


Watchlist Page:
View all movies added to the watchlist in a table format.
Search movies by title using the search bar.
View genres associated with each movie.
Click "Delete" to remove a movie from the watchlist.



Components

Navbar.jsx: Displays the app logo and navigation links to the Movies and Watchlist pages.
Bannner.jsx: Shows a banner image with a title overlay for the Movies page.
Card.jsx: Renders individual movie cards with a poster, title, and an option to add to the watchlist.
Movie.jsx: Fetches and displays trending movies, includes pagination, and passes the handleaddtowatchlist function to Card components.
Pagination.jsx: Provides navigation buttons for browsing movie pages.
Watchlist.jsx: Displays the watchlist in a table, includes a search bar and genre filters.
App.jsx: Manages the app's state (watchlist) and routing using React Router.
main.jsx: Entry point for rendering the React application.

Styling

The app uses Tailwind CSS for styling, providing a responsive and modern design.
Movie cards scale on hover for better user interaction.
The watchlist table is styled with a clean, centered layout.
Genre buttons and pagination controls use hover effects for improved usability.

API Integration

The app uses the TMDb API to fetch trending movies.
Endpoint: https://api.themoviedb.org/3/movie/popular?api_key=<API_KEY>&language=en-US&page=<PAGE>
The Movie.jsx component handles API requests using Axios and updates the movie list based on the current page.

Notes

Ensure a stable internet connection for fetching movie data from the TMDb API.
The app avoids adding duplicate movies to the watchlist by checking movie IDs.
A fallback image (/fallback.png) is used if a movie poster is unavailable (configure this in Card.jsx if needed).
The banner image and logo are assumed to be in the assets folder; update paths in Bannner.jsx and Navbar.jsx if necessary.

Future Improvements

Add user authentication to save watchlists persistently.
Implement sorting options for the watchlist (e.g., by popularity, rating, or release date).
Add error handling for API failures with user-friendly messages.
Include a loading spinner during API requests.
Enhance the banner with dynamic content from the TMDb API.

License
This project is licensed under the MIT License.
