const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  action: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=action&page=1&include_adult=false`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
