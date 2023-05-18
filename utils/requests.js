const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&genres=10749`,
  },
  fetchMistery: {
    title: "Mistery",
    url: `/discover/movie?api_key=${API_KEY}&genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&genres=16`,
  },
  fetchTv: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${API_KEY}&genres=1070`,
  },
};
