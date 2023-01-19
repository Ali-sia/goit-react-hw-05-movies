import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';

import { Box } from '../Box';
// import { Photo, CharacterName, ActorName } from './MovieReviews.styled';

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviews(moviesId)
      .then(response => {
        setReviews(response);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
        console.log(error);
      });
  }, [moviesId]);

  if (!reviews) {
    return null;
  }

  return (
    <Box as="ul" p={4}>
      {error && <div>{error}</div>}
      {reviews.length > 0 ? (
        <>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <b>{author}</b>
                <p>{content}</p>
              </li>
            );
          })}
        </>
      ) : (
        <Box>We don`t have any reviews yet</Box>
      )}
    </Box>
  );
};

export default MovieReviews;
