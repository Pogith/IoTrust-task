import { createBrowserRouter, RouterProvider } from 'react-router';
import AppRoot from './root';
import { paths } from '@/config/paths';
import HomePage from '@/pages/home/HomePage';

const router = createBrowserRouter([
  {
    element: <AppRoot />,
    children: [
      {
        path: paths.home.getHref(),
        element: <HomePage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
