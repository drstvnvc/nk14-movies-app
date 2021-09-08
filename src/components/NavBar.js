import { Link } from "react-router-dom";
import MoviesSearch from "./MoviesSearch";

export default function NavBar() {
  return (
    <div>
      <MoviesSearch />
      <nav>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </nav>
    </div>
  );
}
