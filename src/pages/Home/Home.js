import { useState, useEffect } from 'react';

import { getTrandingMovies } from '../../services/api';

import { Box } from 'components/Box';
import { NavItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrandingMovies()
      .then(response => {
        setMovies(response);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
        console.log(error);
      });
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <Box as="main" p={4}>
      {error && <div>{error}</div>}
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
