import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import ModalLayout from '../../layouts/ModalLayout';
import { ModalProps } from '../../routes/route.interface';
import SearchForm from '../forms/friend/SearchForm';
import AddFriendList from '../friend/AddFriendList';
import FriendList from '../friend/FriendList';

const NewChatModal: FC<ModalProps> = () => {
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
        <SearchForm form={form} />
        <FriendList search={form.watch('search')} />
      </>
    </ModalLayout>
  );
};

export default NewChatModal;
