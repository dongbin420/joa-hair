import { Route } from '@/types/NavigationType';

export const getFilteredRoutes = (routes: Route[], targetIdx: number) => {
  return routes.slice(targetIdx);
};
