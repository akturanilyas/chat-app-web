import React, { FC, useState } from 'react';
import BaseView from '../../../components/common/base-view/BaseView';
import ChatList from '../../../components/chat/ChatList';
import Header from '../../../components/header/Header';
import MessageBox from '../../../components/chat/MessageBox';
import BaseText from '../../../components/common/base-text/BaseText';

const Chat: FC = () => {
  const [chatId, setChatId] = useState<string>();

  const onChatItemClicked = (id: string) => {
    setChatId(id);
  };

  return (
    <BaseView className={'flex-row w-full'}>
      <ChatList onListItemClicked={onChatItemClicked} />
      <BaseView className={'w-full flex-1 min-h-screen min-w-0 relative'}>
        <Header />
        {chatId ? (
          <MessageBox chatId={chatId} />
        ) : (
          <BaseView>
            <BaseText text={'Select any chat'} />
          </BaseView>
        )}
      </BaseView>
    </BaseView>
  );
};

export default Chat;
