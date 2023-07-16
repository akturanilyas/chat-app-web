import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import FriendRequestItem from './FriendRequestItem';
import { FriendRequestListProps } from './FriendRequestList.interface';

const FriendRequestList: FC<FriendRequestListProps> = ({ requests }) => (
  <BaseView className={'gap-4'}>
    {(requests || []).map((request) => (
      <FriendRequestItem key={request.id} request={request} />
    ))}
  </BaseView>
);

export default FriendRequestList;
