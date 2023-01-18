import axios from 'axios';

const API_KEY = '115b567d77b04428b1251a93b22d9778';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrandingMovies = async (page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return res.data.results;
};

// export const getMovieByID = () => {};
// export const getMovieByName = () => {};
// export const getMovieCast = () => {};
// export const getMovieReviews = () => {};
