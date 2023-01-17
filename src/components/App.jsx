import React from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
// import { Box } from './Box';

import Layout from './Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<h1>trending movie</h1>} />
          <Route path="movies/:moviesId" element={<h2>movie page</h2>}>
            <Route path="cast" element={<h2>cast</h2>} />
            <Route path="reviews" element={<h2>reviews</h2>} />
          </Route>
          <Route path="movies" element={<h2>filter page</h2>}></Route>
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
