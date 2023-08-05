import React, { FC, useEffect } from 'react';
import { MAIN_PATH } from '../../constants/mainPath.constant';
import BaseLink from '../common/base-link/BaseLink';
import BaseView from '../common/base-view/BaseView';
import Logo from '../header/Logo';
import ChatItem from './ChatItem';
import TextInput from '../inputs/TextInput';
import { useForm } from 'react-hook-form';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import BaseButton from '../common/base-button/BaseButton';
import { ModalName } from '../../enums/modalName.enum';
import useModalDispatcher from '../../hooks/useModalDispatcher';
import eventProvider from '../../providers/EventProvider';
import {
  useCreateChatMutation,
  useGetChatsQuery,
} from '../../api/services/chat/chatService';
import { ChatListProps } from './ChatList.interface';
import { Friend } from '../../types/friend';

const ChatList: FC<ChatListProps> = ({ onListItemClicked, chatId }) => {
  const form = useForm();
  const [createChatMutation] = useCreateChatMutation();
  const { data: chats } = useGetChatsQuery({});
  const { openModal } = useModalDispatcher();

  const chatListClasses = `
    w-96 h-[100vh] overflow-auto no-scrollbar
    sticky top-0 left-0 z-10
    bg-slate-light
    dark:bg-slate-dark
    border-r-[1px]
    border-slate-200
    dark:border-slate-800
    justify-between
  `;

  const openNewChatModal = () => {
    openModal({
      name: ModalName.NEW_CHAT_MODAL,
      eventName: ModalName.NEW_CHAT_MODAL,
    });
  };

  const newChatModalCallback = (payload?: Record<string, unknown>) => {
    createChatMutation({ body: { id: (payload?.friend as Friend).user.id } });
  };
  const friendRequestModalCallback = (payload?: Record<string, unknown>) => {
    //
  };

  useEffect(() => {
    eventProvider.addListener({
      eventName: ModalName.FRIEND_REQUEST_MODAL,
      callback: friendRequestModalCallback,
    });

    eventProvider.addListener({
      eventName: ModalName.NEW_CHAT_MODAL,
      callback: newChatModalCallback,
    });

    return () => {
      eventProvider.removeAllListeners({ eventName: ModalName.FRIEND_REQUEST_MODAL });
      eventProvider.removeAllListeners({ eventName: ModalName.NEW_CHAT_MODAL });
    };
  }, []);

  console.log(chatId);

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
              logoClassName={'w-[140px]'}
            />
          </BaseLink>
        </BaseView>
        <BaseView className={'flex flex-row items-center mt-2 gap-4'}>
          <TextInput
            form={form}
            name={'search'}
            className={'mb-0 ml-4'}
            placeholder={'GLOBAL.FORM_ELEMENTS.LABELS.SEARCH'}
          />
          <BaseButton
            icon={{ icon: CUSTOM_ICON.MESSAGE_PLUS }}
            className={'bg-transparent mr-4'}
            onClick={openNewChatModal}
          />
        </BaseView>
        <BaseView className={'my-6 flex-1 w-full'}>
          {(chats || []).map((chat, index) => (
            <ChatItem
              key={chat.id}
              className={chat.id === chatId ? 'bg-blue-primary' : ''}
              chat={chat}
              onClick={onListItemClicked}
            />
          ))}
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ChatList;
