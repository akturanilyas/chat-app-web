import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import { useDebounce } from '../../hooks/useDebounce';
import { FriendListProps } from './FriendList.interface';
import FriendItem from './FriendItem';
import {
  useGetFriendsQuery,
  useLazyGetFriendsQuery,
} from '../../api/services/friend/friendService';

const FriendList: FC<FriendListProps> = ({ search }) => {
  const { data: friends } = useGetFriendsQuery({});
  const [getUsers, { data: _friends }] = useLazyGetFriendsQuery();

  useDebounce(
    () => {
      friends && search !== undefined && getUsers({ query: { name: search } });
    },
    500,
    [search],
  );

  return (
    <BaseView className={'gap-4'}>
      {(_friends || friends || []).map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </BaseView>
  );
};

export default FriendList;
