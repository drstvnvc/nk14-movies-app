import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </nav>
  );
}
