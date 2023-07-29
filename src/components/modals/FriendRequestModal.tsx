import React, { FC } from 'react';
import ModalLayout from '../../layouts/ModalLayout';
import { ModalProps } from '../../routes/route.interface';
import FriendRequestList from '../friend-request/FriendRequestList';
import { useFriendRequestsQuery } from '../../api/services/friend/friendService';

const FriendRequestModal: FC<ModalProps> = () => {
  const { data: requests } = useFriendRequestsQuery({});

  const modalProps = {
    header: {
      title: 'GLOBAL.COMPONENTS.MODALS.FRIEND_REQUESTS.TITLE',
    },
    footer: {
      buttons: [],
    },
  };

  return (
    <ModalLayout {...modalProps}>
      {<FriendRequestList requests={requests || []} />}
    </ModalLayout>
  );
};

export default FriendRequestModal;
