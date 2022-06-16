import axios from "axios";

const instance = axios.create ({
    baseURL: "https://api.themoviedb.org/3",
    // baseURL: "https://api.themoviedb.org/3/movie/550?api_key=ddb69b94b950227c022d1fdbc66c7587",
});

export default instance;