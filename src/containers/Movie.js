import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovie, selectMovie } from "../store/movies";

export default function Movie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(selectMovie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  if (!movie) {
    return null;
  }
  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.director}</h2>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img width="300" src={movie.image_url} alt={movie.title} />

        <div>
          <p>{movie.genre}</p>
          <p>{movie.release_date}</p>
          <p>{movie.duration} min</p>
        </div>
      </div>
    </div>
  );
}
