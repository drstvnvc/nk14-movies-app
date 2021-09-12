import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import GuestRoute from "./components/shared/GuestRoute";
import PrivateRoute from "./components/shared/PrivateRoute";
import AppMovies from "./containers/AppMovies";
import CreateMovie from "./containers/CreateMovie";
import Login from "./containers/Login";
import Movie from "./containers/Movie";
import Register from "./containers/Register";
import { getActiveUser, selectIsAuthenticated } from "./store/auth";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
          <PrivateRoute exact path="/create-movie">
            <CreateMovie />
          </PrivateRoute>
          <Route exact path="/movies/:id">
            <Movie />
          </Route>
          <GuestRoute exact path="/login">
            <Login />
          </GuestRoute>
          <GuestRoute exact path="/register">
            <Register />
          </GuestRoute>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route path="/">
            <div>Page not found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
