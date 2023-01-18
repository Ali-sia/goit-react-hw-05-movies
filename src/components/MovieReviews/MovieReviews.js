import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';

import { Box } from '../Box';
// import { Photo, CharacterName, ActorName } from './MovieReviews.styled';

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(moviesId).then(response => {
      console.log('response :>> ', response);
      setReviews(response);
    });
  }, [moviesId]);

  if (!reviews) {
    return null;
  }

  return (
    <Box as="ul" p={4}>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <b>{author}</b>
            <p>{content}</p>
          </li>
        );
      })}
    </Box>
  );
};

export default MovieReviews;
