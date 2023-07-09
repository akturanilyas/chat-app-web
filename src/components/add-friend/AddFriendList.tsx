import React, { FC } from 'react';
import { AddFriendListProps } from './AddFriendList.interface';
import BaseView from '../common/base-view/BaseView';
import AddFriendItem from './AddFriendItem';
import {
  useLazySearchUserQuery,
  useSearchUserQuery,
} from '../../api/services/user/userService';
import { useDebounce } from '../../hooks/useDebounce';

const AddFriendList: FC<AddFriendListProps> = ({ search }) => {
  const { data: users } = useSearchUserQuery({});
  const [getUsers, { data: _users }] = useLazySearchUserQuery();

  useDebounce(
    () => {
      users && getUsers({ query: { name: search } });
    },
    500,
    [search],
  );

  return (
    <BaseView className={'gap-4'}>
      {(_users || users || []).map((user) => (
        <AddFriendItem key={user.id} user={user} />
      ))}
    </BaseView>
  );
};

export default AddFriendList;
