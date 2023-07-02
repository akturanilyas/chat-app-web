import { IRoute } from './route.interface';
import { MAIN_PATH } from '../constants/mainPath.constant';
import { createElement } from 'react';
import Chat from '../views/main/chat/Chat';

export const mainRoute: Array<IRoute> = [
  {
    path: MAIN_PATH.DASHBOARD,
    element: createElement(Chat),
  },
  {
    path: '/test',
    element: createElement(Chat),
  },
];

export default mainRoute;
