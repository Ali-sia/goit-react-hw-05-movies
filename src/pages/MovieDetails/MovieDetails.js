import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

import { getMovieByID, POSTER_URL } from 'services/api';

import { Box } from 'components/Box';
import {
  Poster,
  Title,
  MovieCaption,
  MovieParagraph,
  NavItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieByID(moviesId)
      .then(response => {
        setMovie(response);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
        console.log(error);
      });
  }, [moviesId]);

  if (!movie) {
    return null;
  }

  const { id, title, overview, popularity, poster_path, release_date, genres } =
    movie;
  const backLinkHref = location.state?.from ?? '/home';

  return (
    <Box key={id}>
      <Link to={backLinkHref}>Back to list</Link>
      {error && <div>{error}</div>}
      <Box display="flex" alignItems="center" p={4}>
        <Box mr={4}>
          <Poster src={`${POSTER_URL}${poster_path}`} alt="poster" />
        </Box>
        <Box>
          <Title>{title}</Title>
          <MovieParagraph>
            <MovieCaption>Popularity:</MovieCaption> {popularity}
          </MovieParagraph>
          <MovieParagraph>
            <MovieCaption>Release date:</MovieCaption> {release_date}
          </MovieParagraph>
          <MovieParagraph>
            <MovieCaption>Genres</MovieCaption>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </MovieParagraph>
          <MovieParagraph>
            <MovieCaption>Overview:</MovieCaption> {overview}
          </MovieParagraph>
        </Box>
      </Box>
      <Box as="ul" display="flex" p={4}>
        <NavItem to="cast">Cast</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
      </Box>
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
    </Box>
  );
};

export default MovieDetails;
// const CustomerDetails = () => {
//   const { customerId } = useParams();
//   const [customer, setCustomer] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     getCustomerById(Number(customerId)).then(setCustomer);
//   }, [customerId]);

//   if (!customer) {
//     return null;
//   }

//   const { id, name } = customer;
//   const backLinkHref = location.state?.from ?? '/customers';

//   return (
//     <main>
//       <Link to={backLinkHref}>Back to customers</Link>
//       <h1>user: {name}</h1>
//       <p>id: {id}</p>
//     </main>
//   );
// };

// export default CustomerDetails;
