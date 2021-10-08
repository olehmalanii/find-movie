import React, { useState } from "react";
import MovieComponent from "./MovieComponent";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const key = "api_key=7cdb1113f3a717b0bb1c1ffd1da7a363";
    const url = `https://api.themoviedb.org/3/search/movie?${key}&language=en-US&query=${query}&page=1&include_adult=false`;

    if (query) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.results);
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    } else {
      setQuery("Titanic");
    }
  };

  const movieList = movies
    .filter((movie) => movie.vote_count > 0 && movie.poster_path)
    .map((movie) => <MovieComponent movie={movie} key={movie.id} />);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="query" className="label">
          Movie
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search for any movie, e.g. Titanic"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">{movieList}</div>
    </>
  );
}
