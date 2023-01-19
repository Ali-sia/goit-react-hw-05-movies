import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

import { Suspense } from 'react';

import Loader from './Loader';

const Layout = () => {
  return (
    <Box display="flex" align-items="center" flexDirection="column">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
