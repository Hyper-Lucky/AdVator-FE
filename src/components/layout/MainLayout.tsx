import { Outlet } from 'react-router';
import Header from './Header';
import { Box } from '@mui/material';

const MainLayout = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <Box sx={{ height: '80' }} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
