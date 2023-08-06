import React, { FC, useState } from 'react';
import BaseView from '../../../components/common/base-view/BaseView';
import ChatList from '../../../components/chat/ChatList';
import MessageBox from '../../../components/chat/MessageBox';
import BaseText from '../../../components/common/base-text/BaseText';
import { Chat as ChatModel } from '../../../types/chat';
import Header from '../../../components/header/Header';

const Chat: FC = () => {
  const [chat, setChat] = useState<ChatModel>();

  const onChatItemClicked = (chat: ChatModel) => {
    setChat(chat);
  };

  return (
    <BaseView className={'flex-row w-full'}>
      <ChatList onListItemClicked={onChatItemClicked} chatId={chat?.id} />
      <BaseView className={'w-full flex-1 min-h-screen min-w-0 relative'}>
        <Header chat={chat} />

        {chat ? (
          <MessageBox currentChat={chat} />
        ) : (
          <BaseView className={'items-center justify-center h-full align-middle'}>
            <BaseText text={'GLOBAL.FORM_ELEMENTS.LABELS.SELECT_ANY_CHAT'} />
          </BaseView>
        )}
      </BaseView>
    </BaseView>
  );
};

export default Chat;
