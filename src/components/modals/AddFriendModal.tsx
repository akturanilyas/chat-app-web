import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import useModalDispatcher from '../../hooks/useModalDispatcher';
import ModalLayout from '../../layouts/ModalLayout';
import { ModalProps } from '../../routes/route.interface';
import eventProvider from '../../providers/EventProvider';
import AddFriendForm from '../forms/friend/AddFriendForm';

const AddFriendModal: FC<ModalProps> = ({ eventName, props }) => {
  const form = useForm({ shouldUnregister: true });
  const { goBackModal } = useModalDispatcher();

  const onSubmit = (data: Record<string, unknown>) => {
    eventName && eventProvider.emit({ eventName, payload: {} });

    goBackModal();
  };

  const modalProps = {
    header: {
      title: 'GLOBAL.COMPONENTS.MODALS.ADD_FRIEND.TITLE',
    },
    footer: {
      buttons: [
        {
          label: 'GLOBAL.BUTTONS.SUBMIT',
          onClick: form.handleSubmit(onSubmit),
        },
      ],
    },
  };

  return (
    <ModalLayout {...modalProps}>
      <AddFriendForm form={form} />
    </ModalLayout>
  );
};

export default AddFriendModal;
