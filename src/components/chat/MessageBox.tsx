import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import Message from '../message/Message';
import Button from '../common/button/Button';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import {
  useCreateMessageMutation,
  useGetMessagesQuery,
} from '../../api/services/message/messageService';
import { MessageBoxInterface } from './MessageBox.interface';

const MessageBox: FC<MessageBoxInterface> = ({ chatId }) => {
  const form = useForm();
  const [createMessageMutation] = useCreateMessageMutation();
  const { data: messages } = useGetMessagesQuery({});

  const sendMessage = () => {
    createMessageMutation({ id: chatId, body: { text: form.getValues('message') } });
  };

  return (
    <BaseView className={'h-[90vh]'}>
      <BaseView className={'overflow-y-clip flex-grow'}>
        <BaseView className={'overflow-y-scroll gap-4 flex-1'}>
          {(messages || []).map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </BaseView>
        <BaseView className={'flex flex-row gap-2 items-center'}>
          <TextInput className={'my-2'} form={form} name={'message'} />
          <Button icon={{ icon: CUSTOM_ICON.SEND }} onClick={sendMessage} />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default MessageBox;
