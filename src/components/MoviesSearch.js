import { useEffect, useState,  useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/movies";
import _ from "lodash";

export default function MoviesSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const search = (searchTerm) => {
    if (!searchTerm || searchTerm.length > 2) {
      dispatch(getMovies(searchTerm));
    }
  };

  const debouncedSearch = useCallback(_.debounce(search, 500), []);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        onChange={handleChangeSearchTerm}
        placeholder="Search movies"
      />
    </div>
  );
}
