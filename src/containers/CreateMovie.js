import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createMovie } from "../store/movies";

export default function CreateMovie() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [movieData, setMovieData] = useState({
    title: "",
    director: "",
    image_url: "",
    genre: "",
    release_date: "",
    duration: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      createMovie({
        movie: movieData,
        onSuccess: (movie) => {
          history.push(`movies/${movie.id}`);
        },
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            placeholder="Title"
            value={movieData.title}
            onChange={({ target }) =>
              setMovieData({ ...movieData, title: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            placeholder="Director"
            value={movieData.director}
            onChange={({ target }) =>
              setMovieData({ ...movieData, director: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            placeholder="Image url"
            value={movieData.image_url}
            onChange={({ target }) =>
              setMovieData({ ...movieData, image_url: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            placeholder="Genre"
            value={movieData.genre}
            onChange={({ target }) =>
              setMovieData({ ...movieData, genre: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            placeholder="Release date"
            type="date"
            value={movieData.release_date}
            onChange={({ target }) =>
              setMovieData({ ...movieData, release_date: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            type="number"
            placeholder="Duration"
            value={movieData.duration}
            onChange={({ target }) =>
              setMovieData({ ...movieData, duration: target.value })
            }
          />{" "}
          min
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
