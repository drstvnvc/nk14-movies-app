import { useSelector } from "react-redux";
import { selectMovies } from "../store/movies";

export default function AppMovies() {
  const movies = useSelector(selectMovies);
  return (
    <div>
      <h1>App movies</h1>

      <ul>
        {movies.data.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
