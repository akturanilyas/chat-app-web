import { IModalRoute } from './route.interface';
import { ModalName } from '../enums/modalName.enum';
import AddFriendModal from '../components/modals/AddFriendModal';
import FriendRequestModal from '../components/modals/FriendRequestModal';
import NewChatModal from '../components/modals/NewChatModal';

export const modalRoute: IModalRoute[] = [
  {
    name: ModalName.ADD_FRIEND_MODAL,
    component: AddFriendModal,
  },
  {
    name: ModalName.FRIEND_REQUEST_MODAL,
    component: FriendRequestModal,
  },
  {
    name: ModalName.NEW_CHAT_MODAL,
    component: NewChatModal,
  },
];

export default modalRoute;
