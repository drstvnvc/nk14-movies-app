import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "../components/MovieRow";
import { getMovies, selectMovies } from "../store/movies";

export default function AppMovies() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <h1>App movies</h1>

      <ul>
        {movies.data.map((movie) => (
          <MovieRow key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
