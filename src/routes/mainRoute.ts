import { createElement } from 'react';
import { MAIN_PATH } from '../constants/mainPath.constant';
import { IRoute } from './route.interface';
import Chat from '../views/main/chat/Chat';

export const mainRoute: Array<IRoute> = [
  {
    path: MAIN_PATH.DASHBOARD,
    element: createElement(Chat),
  },
];

export default mainRoute;
