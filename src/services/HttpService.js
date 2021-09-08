import axios from "axios";

// abstract class
export default class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8002/api",
    });
  }
}
