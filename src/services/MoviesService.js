import HttpService from "./HttpService";

class MoviesService extends HttpService {
  getMovies = async (title = "") => {
    let endpoint = "/movies";
    if (title) {
      endpoint += `?title=${title}`;
    }

    const { data } = await this.client.get(endpoint);
    return data;
  };
}

const moviesService = new MoviesService();
export default moviesService;
