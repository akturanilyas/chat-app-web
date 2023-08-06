import React, { FC, useEffect, useRef, useState } from 'react';
import BaseView from '../common/base-view/BaseView';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import Message from '../message/Message';
import { Message as MessageModel } from '../../types/message';
import { useLazyGetMessagesQuery } from '../../api/services/message/messageService';
import { MessageBoxInterface } from './MessageBox.interface';
import { useSocket } from '../../hooks/useSocket';
import { useMain } from '../../hooks/useSlices';
import { useDebounce } from '../../hooks/useDebounce';
import { isEmpty } from 'lodash';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import TextButton from '../common/button/TextButton';

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
    <BaseView className={'relative'}>
      <BaseView className={'bg-grey-200 '}>
        <BaseView className={'overflow-y-clip h-[calc(100vh_-_96px)]'}>
          <BaseView className={'overflow-y-scroll gap-4 flex-1 pt-4'}>
            {(messages || []).map((message, index) => {
              if (index + 1 === messages.length) {
                return (
                  <Message key={message.id} message={message} ref={lastMessageRef} />
                );
              }

              return <Message key={message.id} message={message} />;
            })}
          </BaseView>
          <BaseView className={'flex flex-row px-14'}>
            <TextInput
              ref={textInputRef}
              form={form}
              placeholder={'Write a message...'}
              name={'message'}
              suffix={
                <TextButton
                  className={'bg-transparent'}
                  icon={{
                    icon: CUSTOM_ICON.SEND,
                    iconClassName: 'fill-blue-primary text-blue-primary',
                  }}
                  onClick={sendMessage}
                />
              }
            />
          </BaseView>
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default MessageBox;
