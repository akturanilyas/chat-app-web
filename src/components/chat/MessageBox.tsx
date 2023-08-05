import React, { FC, useEffect, useRef, useState } from 'react';
import BaseView from '../common/base-view/BaseView';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import Message from '../message/Message';
import { Message as MessageModel } from '../../types/message';

import Button from '../common/button/Button';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import { useLazyGetMessagesQuery } from '../../api/services/message/messageService';
import { MessageBoxInterface } from './MessageBox.interface';
import { useSocket } from '../../hooks/useSocket';
import { useMain } from '../../hooks/useSlices';
import { useDebounce } from '../../hooks/useDebounce';
import { isEmpty } from 'lodash';
import Header from '../header/Header';

const MessageBox: FC<MessageBoxInterface> = ({ currentChat }) => {
  const form = useForm();
  const [getMessagesQuery] = useLazyGetMessagesQuery();
  const [messages, setMessages] = useState<Array<MessageModel>>([]);
  const { user } = useMain();
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    lastMessageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const { emit } = useSocket({
    name: 'messageSent',
  });

  const updateMessageCallback = (response: Record<string, unknown>) => {
    const message = response.data as MessageModel;

    if (message.chat_id !== currentChat.id) {
      return;
    }

    setMessages((messages) => [...messages, message]);
  };

  useSocket({
    name: `messageListen-${user!.id}`,
    onConnect: updateMessageCallback,
  });

  const sendMessage = () => {
    emit({ chatId: currentChat?.id, text: form.getValues('message') });
    form.setValue('message', '');
    textInputRef.current?.focus();
  };

  useDebounce(() => scrollToBottom(), 300, [isEmpty(messages)]);

  useEffect(() => {
    currentChat?.id
      && getMessagesQuery({ id: currentChat?.id })
        .unwrap()
        .then((messages: Array<MessageModel>) => {
          setMessages(messages);
          scrollToBottom();
        });
  }, [currentChat?.id]);

  return (
    <>
      <Header chat={currentChat} />

      <BaseView className={'h-[90vh]'}>
        <BaseView className={'overflow-y-clip flex-grow'}>
          <BaseView className={'overflow-y-scroll gap-4 flex-1'}>
            {(messages || []).map((message, index) => {
              if (index + 1 === messages.length) {
                return (
                  <Message key={message.id} message={message} ref={lastMessageRef} />
                );
              }

              return <Message key={message.id} message={message} />;
            })}
          </BaseView>
          <BaseView className={'flex flex-row gap-2 items-center'}>
            <TextInput
              ref={textInputRef}
              className={'my-2'}
              form={form}
              name={'message'}
            />
            <Button icon={{ icon: CUSTOM_ICON.SEND }} onClick={sendMessage} />
          </BaseView>
        </BaseView>
      </BaseView>
    </>
  );
};

export default MessageBox;
