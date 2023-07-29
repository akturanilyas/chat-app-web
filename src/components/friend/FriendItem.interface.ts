import { Friend } from '../../types/friend';

export interface FriendItemProps {
  friend: Friend;
  itemOnClick: (friend: Friend) => void;
}
