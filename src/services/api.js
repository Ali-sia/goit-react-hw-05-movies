import axios from 'axios';

const API_KEY = '115b567d77b04428b1251a93b22d9778';
const BASE_URL = 'https://api.themoviedb.org/3';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500/'; //+ poster path

export const getTrandingMovies = async (page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return res.data.results;
};
export const getMovieByID = async (movieId, page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return res.data;
};

export const getMovieCast = async (movieId, page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return res.data;
};
export const getMovieReviews = async (movieId, page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );
  return res.data.results;
};

export const getMovieByName = async (movieName, page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false&query=${movieName}`
  );

  return res.data.results;
};
