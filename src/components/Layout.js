import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';

const Layout = () => {
  return (
    <Box display="flex" align-items="center" flexDirection="column">
      <AppBar />
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
    </Box>
  );
};

export default Layout;
