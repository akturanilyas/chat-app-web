import { IModalRoute } from './route.interface';
import { ModalName } from '../enums/modalName.enum';
import AddFriendModal from '../components/modals/AddFriendModal';

export const modalRoute: IModalRoute[] = [
  {
    name: ModalName.ADD_FRIEND_MODAL,
    component: AddFriendModal,
  },
];

export default modalRoute;
