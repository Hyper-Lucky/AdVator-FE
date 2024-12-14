import { Outlet } from 'react-router';
import Header from './Header';

const MainLayout = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
