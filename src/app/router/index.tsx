import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { buildRoute } from './routerHelpers';
import { routesConfig } from './routesConfig';

const router = createBrowserRouter([
  ...routesConfig.map(buildRoute),
  {
    path: '*',
    element: <div>Page Not Found</div>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
