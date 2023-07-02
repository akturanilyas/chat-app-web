import React from 'react';
import { MAIN_PATH } from '../../constants/mainPath.constant';
import BaseLink from '../common/base-link/BaseLink';
import BaseView from '../common/base-view/BaseView';
import Logo from '../header/Logo';
import ChatItem from './ChatItem';

const messages = [
  {
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    message: 'messagemessagemessagemessagemessagemessagemessage',
    time: '22:04',
  },
  {
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    time: '22:04',
    message: 'messagemessagemessagemessagemessagemessagemessage',
  },
  {
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    time: '22:04',
    message: 'messagemessagemessagemessagemessagemessagemessage',
  },
  {
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    time: '22:04',
    message: 'messagemessagemessagemessagemessagemessagemessage',
  },
  {
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    message: 'messagemessagemessagemessagemessagemessagemessage',
    time: '22:21',
  },
];

const ChatList = () => {
  const chatListClasses = `
    w-64 h-[100vh] overflow-auto no-scrollbar
    sticky top-0 left-0 z-10
    bg-slate-light
    dark:bg-slate-dark
    border-r-[1px]
    border-slate-200
    dark:border-slate-800
    justify-between
  `;

  return (
    <BaseView className={chatListClasses}>
      <BaseView className={'w-full'}>
        <BaseView className={'sticky top-0 left-0 z-10'}>
          <BaseLink to={MAIN_PATH.DASHBOARD}>
            <Logo
              className={`
              border-b 
              border-slate-200 
              dark:border-slate-800 
              w-full 
              h-16 
              px-4
              bg-slate-light 
              dark:bg-slate-dark
            `}
            />
          </BaseLink>
        </BaseView>
        <BaseView className={'my-6 flex-1 w-full px-2'}>
          {messages.map((item, index) => (
            <ChatItem key={index} {...item} />
          ))}
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ChatList;
