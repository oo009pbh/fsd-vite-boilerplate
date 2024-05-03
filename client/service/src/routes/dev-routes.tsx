import DevSample from '@pages/dev/page/sample';

// Typings
import { RouteType } from '@typings/routes/routeType';

export const devRoutes: RouteType[] = [
  {
    path: '/dev/sample',
    element: <DevSample />,
  },
];
