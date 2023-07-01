import { createElement } from 'react';
import { PUBLIC_PATH } from '../constants/publicPath.constant';
import { IRoute } from './route.interface';
import Login from '../components/auth/Login';

const publicRoute: Array<IRoute> = [
  {
    path: PUBLIC_PATH.LOGIN,
    element: createElement(Login),
  },
  {
    path: PUBLIC_PATH.REGISTER,
    element: createElement(Login),
  },
  {
    path: PUBLIC_PATH.PASSWORD_RESET,
    element: createElement(Login),
  },
];

export default publicRoute;
