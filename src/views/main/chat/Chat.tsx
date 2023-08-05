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

  console.log(chatId);

  return (
    <BaseView className={'flex-row w-full'}>
      <ChatList onListItemClicked={onChatItemClicked} chatId={chatId} />
      <BaseView className={'w-full flex-1 min-h-screen min-w-0 relative'}>
        <Header />
        {chatId ? (
          <MessageBox chatId={chatId} />
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
