import * as moviesSagas from "./movies/sagas";
import * as authSagas from "./auth/sagas";
// moviesSagas = {
//     watchGetMovies: function*() {},
//     watchAddMovie: function*() {},
//     watchDeleteMovie: function*() {},
// }

const sagas = {
  ...moviesSagas,
  ...authSagas,
  // watchGetMovies: function*() {},
  // watchAddMovie: function*() {},
  // watchDeleteMovie: function*() {},
};

export default sagas;
