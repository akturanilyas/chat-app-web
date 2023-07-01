import { createElement } from 'react';
import { PUBLIC_PATH } from '../constants/publicPath.constant';
import { IRoute } from './route.interface';
import Login from '../views/public/auth/Login';
import Register from '../views/public/auth/Register';

const publicRoute: Array<IRoute> = [
  {
    path: PUBLIC_PATH.LOGIN,
    element: createElement(Login),
  },
  {
    path: PUBLIC_PATH.REGISTER,
    element: createElement(Register),
  },
];

export default publicRoute;
