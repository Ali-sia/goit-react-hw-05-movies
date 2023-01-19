import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieByName } from 'services/api';
import SearchBox from 'components/SearchBox/SearchBox';

import { Box } from 'components/Box';
import { NavItem } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRequest = searchParams.get('query');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchRequest) return;

    getMovieByName(searchRequest)
      .then(response => {
        setMovies(response);
      })
      .catch(error => {
        setError('Ooops. Something went wrong...');
        console.log(error);
      });
  }, [searchRequest]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Box p={4}>
      <SearchBox onSubmit={changeQuery} />
      {error && <div>{error}</div>}

      <Box as="ul" display="flex" flexDirection="column">
        {movies.map(({ title, id }) => (
          <NavItem to={`/movies/${id}`} state={{ from: location }} key={id}>
            {title}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default Movies;

// const Customers = () => {
//   const location = useLocation();
//   const [customers, setCustomers] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const filterParam = searchParams.get('filter') ?? '';
//   const visibleCustomers = useMemo(() => {
//     return customers.filter(customer =>
//       customer.name.toLowerCase().includes(filterParam.toLowerCase())
//     );
//   }, [customers, filterParam]);

//   useEffect(() => {
//     getCustomers().then(setCustomers);
//   }, []);

//   if (!customers) {
//     return null;
//   }

//   const changeFilter = value => {
//     setSearchParams(value !== '' ? { filter: value } : {});
//   };

//   return (
//     <Box as="main" p={4}>
//       <SearchBox value={filterParam} onChange={changeFilter} />
//       <Box as="ul">
//         {visibleCustomers.map(({ id, name }) => (
//           <li key={id}>
//             {
//               <Link to={`${id}`} state={{ from: location }}>
//                 {name}
//               </Link>
//             }
//           </li>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Customers;
