import HelloContainer from '../hello/containers/helloContainer';
import { RouteConfigInterface } from './model';

export const routes: RouteConfigInterface[] = [
  {
    path: '/',
    component: HelloContainer,
    childRoutes: [],
  },
];
