import React, { FC } from 'react';
import { AddFriendListProps } from './AddFriendList.interface';
import BaseView from '../common/base-view/BaseView';
import AddFriendItem from './AddFriendItem';

const AddFriendList: FC<AddFriendListProps> = ({ users }) => (
    <BaseView>
      {users.map((user) => (
        <AddFriendItem key={user.id} user={user} />
      ))}
    </BaseView>
  );

export default AddFriendList;
