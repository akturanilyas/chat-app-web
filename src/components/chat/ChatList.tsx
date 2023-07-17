import React from 'react';
import { MAIN_PATH } from '../../constants/mainPath.constant';
import BaseLink from '../common/base-link/BaseLink';
import BaseView from '../common/base-view/BaseView';
import Logo from '../header/Logo';
import ChatItem from './ChatItem';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import CustomIconProvider from '../../providers/CustomIconProvider';
import BaseButton from '../common/base-button/BaseButton';

const messages = [
  {
    id: '1',
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    message: 'messagemessagemessagemessagemessagemessagemessage',
    time: '22:04',
  },
  {
    id: '2',
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    time: '22:04',
    message: 'messagemessagemessagemessagemessagemessagemessage',
  },
  {
    id: '3',
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    time: '22:04',
    message: 'messagemessagemessagemessagemessagemessagemessage',
  },
  {
    id: '4',
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    time: '22:04',
    message: 'messagemessagemessagemessagemessagemessagemessage',
  },
  {
    id: '5',
    name: 'name',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    message: 'messagemessagemessagemessagemessagemessagemessage',
    time: '22:21',
  },
];

const ChatList = () => {
  const form = useForm();
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
        <BaseView className={'flex flex-row items-center mt-2'}>
          <TextInput
            form={form}
            name={'search'}
            className={'mb-0 px-2'}
            placeholder={'GLOBAL.FORM_ELEMENTS.LABELS.SEARCH'}
          />
          <BaseButton icon={{ icon: CUSTOM_ICON.MESSAGE_PLUS }} className={'bg-transparent'} />
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
