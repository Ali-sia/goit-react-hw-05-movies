import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast, POSTER_URL } from 'services/api';

import { Box } from '../Box';
import {
  Photo,
  CharacterName,
  ActorName,
  CastList,
  CastItem,
} from './MovieCast.styled';

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
    <CastList>
      {error && <div>{error}</div>}
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItem key={id}>
            <Photo src={`${POSTER_URL}${profile_path}`} />
            <CharacterName>{character}</CharacterName>
            <ActorName>{name}</ActorName>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default MovieCast;
