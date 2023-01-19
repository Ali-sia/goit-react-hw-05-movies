import React from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';

import Layout from './Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../components/MovieReviews/MovieReviews')
);

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
