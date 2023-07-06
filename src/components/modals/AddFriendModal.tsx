import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import ModalLayout from '../../layouts/ModalLayout';
import { ModalProps } from '../../routes/route.interface';
import AddFriendForm from '../forms/friend/AddFriendForm';
import AddFriendList from '../add-friend/AddFriendList';

const AddFriendModal: FC<ModalProps> = () => {
  const form = useForm({ shouldUnregister: true });

  const modalProps = {
    header: {
      title: 'GLOBAL.COMPONENTS.MODALS.ADD_FRIEND.TITLE',
    },
    footer: {
      buttons: [],
    },
  };

  return (
    <ModalLayout {...modalProps}>
      <>
        <AddFriendForm form={form} />
        <AddFriendList users={[]} />
      </>
    </ModalLayout>
  );
};

export default AddFriendModal;
