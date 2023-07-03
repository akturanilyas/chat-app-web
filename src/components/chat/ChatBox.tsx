import React from 'react';
import BaseView from '../common/base-view/BaseView';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import Message from '../message/Message';

const messages = [
  {
    id: '1',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '2',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '3',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '3',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '3',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '3',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '3',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '4',
    message: 'message',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
  {
    id: '4',
    message: 'messasssaaaaaaa gemessa sssaaaaaaageaklsmdlkm aklsmdkl amsdlkamskdmalksmd klasmlkmas',
    sender: 'sender',
    receiver: 'receiver',
    time: '22:10',
  },
];

const MessageBox = () => {
  const form = useForm();

  return (
    <BaseView className={'h-[90vh]'}>
      <BaseView className={'overflow-y-clip flex-grow'}>
        <BaseView className={'overflow-y-scroll gap-4 flex-1'}>
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </BaseView>
        <BaseView>
          <TextInput form={form} name={'message'} />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default MessageBox;
