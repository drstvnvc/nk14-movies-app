import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "../components/MovieRow";
import { getMovies, selectMovies } from "../store/movies";

export default function AppMovies() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  const [sortCriteria, setSortCriteria] = useState("id");
  const [sortDirection, setSortDirection] = useState(1);

  const sortedMovies = [...movies.data].sort((m1, m2) => {
    if (m1[sortCriteria] < m2[sortCriteria]) {
      return -1 * sortDirection;
    }
    if (m1[sortCriteria] > m2[sortCriteria]) {
      return 1 * sortDirection;
    }
    return 0;
  });
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function sortBy(criteria) {
    // change sort criteria
    setSortCriteria(criteria);

    // if sort criteria is not changed
    if (criteria == sortCriteria) {
      // change only direction
      setSortDirection(-1 * sortDirection);
    } else {
      // if sort criteria is changed
      // set ascending order
      setSortDirection(1);
    }
  }
  return (
    <div>
      <h1>App movies</h1>

      {sortedMovies.length ? (
        <div>
          <div>
            <span onClick={() => sortBy("title")}>Title</span>
            <span onClick={() => sortBy("director")}>Director</span>
          </div>
          <ul>
            {sortedMovies.map((movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      ) : (
        <div>Oops! There are no movies with this title</div>
      )}
    </div>
  );
}
