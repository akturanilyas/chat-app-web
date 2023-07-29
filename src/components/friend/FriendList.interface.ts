import { Friend } from '../../types/friend';

export interface FriendListProps {
  search?: String;
  itemOnClick: (friend: Friend) => void;
}
