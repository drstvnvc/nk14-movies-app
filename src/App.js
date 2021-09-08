import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import AppMovies from "./containers/AppMovies";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
