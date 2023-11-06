import react, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import MovieCard from "./Moviecard";
import SearchIcon from "./search.svg";
// api key :  28f04b41

const API_URL = "https://www.omdbapi.com?apikey=28f04b41";
const movie1 = {
  Title: "The Amazing Spiderman 2 Webb Cut",
  Year: "2021",
  imdbID: "tt18351128",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
};

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");

  const [movies, setMovies] = useState([]);

  const SearchMovie = async (Title) => {
    const response = await fetch(`${API_URL}&s=${Title}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovie('thor');
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieMania</h1>

        <div className="search">
          <input
            placeholder="Search Any Bollywood or Hollywood Movie"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={(movies) => SearchMovie(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movies) => (
              <MovieCard movies={movies} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found.</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
