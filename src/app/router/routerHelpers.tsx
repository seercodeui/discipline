import { Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import type { AppRouteConfig } from './routesConfig';

export const isAuth = () => {
  return true;
};

export const buildRoute = ({ path, access, Page, SuspensePage }: AppRouteConfig): RouteObject => {
  const pageElement = SuspensePage ? (
    <Suspense fallback={<SuspensePage />}>
      <Page />
    </Suspense>
  ) : (
    <Page />
  );

  const GuardedRouteElement = () => {
    const authorized = isAuth();

    if (access === 'public') {
      return <PublicRoute isAuth={authorized}>{pageElement}</PublicRoute>;
    }

    return <ProtectedRoute isAuth={authorized}>{pageElement}</ProtectedRoute>;
  };

  return {
    path,
    element: <GuardedRouteElement />,
  };
};
