import { Box } from 'components/Box';
import { getCustomers } from 'fakeApi';
import { useState, useEffect, useMemo } from 'react';
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import SearchBox from 'components/SearchBox';

const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';
  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  if (!customers) {
    return null;
  }

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <Box as="main" p={4}>
      <SearchBox value={filterParam} onChange={changeFilter} />
      <Box as="ul">
        {visibleCustomers.map(({ id, name }) => (
          <li key={id}>
            {
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            }
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default Customers;
