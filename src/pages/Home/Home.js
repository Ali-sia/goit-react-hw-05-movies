import { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';

import { getTrandingMovies } from '../../services/api';

import { Box } from 'components/Box';
import { NavItem } from './Home.styled';

// import { Suspense } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrandingMovies().then(response => {
      setMovies(response);
    });
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <Box as="main" p={4}>
      <Box as="ul" display="flex" flexDirection="column">
        {movies.map(({ title, id }) => (
          <NavItem to={`/movies/${id}`} key={id}>
            {title}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
