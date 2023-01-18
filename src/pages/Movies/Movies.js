import { NavLink, Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox';
import { useState, useEffect, useMemo } from 'react';

import { getMovieByName } from 'services/api';

import { Box } from 'components/Box';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) return;

    getMovieByName(searchRequest).then(response => {
      setMovies(response);
    });
  }, [searchRequest]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Box>
      <SearchBox onSubmit={changeQuery} />

      {/* <Box as="ul" display="flex" flexDirection="column">
        {movies.map(({ title, id }) => (
          <NavLink to={`/movies/${id}`} state={{ from: location }} key={id}>
            {title}
          </NavLink>
        ))}
      </Box> */}
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
