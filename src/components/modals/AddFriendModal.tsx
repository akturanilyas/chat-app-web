import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import ModalLayout from '../../layouts/ModalLayout';
import { ModalProps } from '../../routes/route.interface';
import SearchForm from '../forms/friend/SearchForm';
import AddFriendList from '../friend/AddFriendList';

const AddFriendModal: FC<ModalProps> = ({ props, eventName }) => {
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
        <AddFriendList search={form.watch('search')} />
      </>
    </ModalLayout>
  );
};

export default AddFriendModal;
