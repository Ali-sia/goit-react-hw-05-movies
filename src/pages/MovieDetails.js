// import { getCustomerById } from 'fakeApi';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import MovieCast from 'components/MovieCast';
import MovieReviews from 'components/MovieReviews';

const MovieDetails = () => {
  return (
    <>
      <h3>movie details page</h3>
      <MovieCast />
      <MovieReviews />
    </>
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
