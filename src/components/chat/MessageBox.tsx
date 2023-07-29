import React, { FC, useEffect, useState } from 'react';
import BaseView from '../common/base-view/BaseView';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import Message from '../message/Message';
import { Message as MessageModel } from '../../types/message';

import Button from '../common/button/Button';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import {
  useCreateMessageMutation,
  useLazyGetMessagesQuery,
} from '../../api/services/message/messageService';
import { MessageBoxInterface } from './MessageBox.interface';

const MessageBox: FC<MessageBoxInterface> = ({ chatId }) => {
  const form = useForm();
  const [createMessageMutation] = useCreateMessageMutation();
  const [getMessagesQuery] = useLazyGetMessagesQuery();
  const [messages, setMessages] = useState<Array<MessageModel>>([]);
  const sendMessage = () => {
    createMessageMutation({ id: chatId, body: { text: form.getValues('message') } });
  };

  useEffect(() => {
    chatId
      && getMessagesQuery({ id: chatId })
        .unwrap()
        .then((messages: Array<MessageModel>) => setMessages(messages));
  }, [chatId]);

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
