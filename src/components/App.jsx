import React from 'react';
// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
// import { Box } from './Box';

import Layout from './Layout';
import Home from '../pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import Movies from 'pages/Movies/Movies';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <p>
              Path not resolved, try
              <a href="http://localhost:3000/goit-react-hw-05-movies">
                http://localhost:3000/goit-react-hw-05-movies
              </a>
            </p>
          }
        />
      </Routes>

      <GlobalStyle />
    </>
  );
};

export default App;
