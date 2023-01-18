import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast, POSTER_URL } from 'services/api';

import { Box } from '../Box';
import { Photo, CharacterName, ActorName } from './MovieCast.styled';

const MovieCast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(moviesId).then(response => {
      setCast(response.cast);
    });
  }, [moviesId]);

  if (!cast) {
    return null;
  }

  return (
    <Box as="ul" p={4}>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <Photo src={`${POSTER_URL}${profile_path}`} />
            <CharacterName>Character - {character}</CharacterName>
            <ActorName>Actor - {name}</ActorName>
          </li>
        );
      })}
    </Box>
  );
};

export default MovieCast;
