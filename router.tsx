import MainLayout from '@components/layout/MainLayout';
import { useRoutes } from 'react-router';
import Main from '@pages/Main/Main';

export const useMainRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ index: true, element: <Main /> }],
    },
  ]);
