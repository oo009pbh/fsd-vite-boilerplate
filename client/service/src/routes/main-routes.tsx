import Main from '@pages/main/page/main';

// Typings
import { RouteType } from '@typings/routes/routeType';

export const mainRoutes: RouteType[] = [
  {
    path: '/',
    element: <Main />,
  },
];
