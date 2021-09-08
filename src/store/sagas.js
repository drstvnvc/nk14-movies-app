import * as moviesSagas from "./movies/sagas";
// moviesSagas = {
//     watchGetMovies: function*() {},
//     watchAddMovie: function*() {},
//     watchDeleteMovie: function*() {},
// }

const sagas = {
  ...moviesSagas,
  // watchGetMovies: function*() {},
  // watchAddMovie: function*() {},
  // watchDeleteMovie: function*() {},
};

export default sagas;
