import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { ROUTES } from './const';

// lazy-load components
const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));

export const MyRoutes: RouteObject[] = [
   {
      path: ROUTES.Home,
      element: <Home />
   },
   {
      path: ROUTES.About,
      element: <About />
   }
];
