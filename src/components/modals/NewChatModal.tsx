import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import ModalLayout from '../../layouts/ModalLayout';
import { ModalProps } from '../../routes/route.interface';
import SearchForm from '../forms/friend/SearchForm';
import FriendList from '../friend/FriendList';
import eventProvider from '../../providers/EventProvider';
import useModalDispatcher from '../../hooks/useModalDispatcher';
import { Friend } from '../../types/friend';

const NewChatModal: FC<ModalProps> = ({ eventName }) => {
  const form = useForm({ shouldUnregister: true });
  const { goBackModal } = useModalDispatcher();

  const modalProps = {
    header: {
      title: 'GLOBAL.COMPONENTS.MODALS.ADD_CHAT.TITLE',
    },
    footer: {
      buttons: [],
    },
  };

  const itemOnClick = (friend: Friend) => {
    eventName && eventProvider.emit({ eventName, payload: { friend } });
    goBackModal();
  };

  return (
    <ModalLayout {...modalProps}>
      <>
        <SearchForm form={form} />
        <FriendList search={form.watch('search')} itemOnClick={itemOnClick} />
      </>
    </ModalLayout>
  );
};

export default NewChatModal;
