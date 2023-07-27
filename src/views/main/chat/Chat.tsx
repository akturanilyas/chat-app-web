import React, { FC } from 'react';
import BaseView from '../../../components/common/base-view/BaseView';
import ChatList from '../../../components/chat/ChatList';
import Header from '../../../components/header/Header';
import MessageBox from '../../../components/chat/MessageBox';

const Chat: FC = () => (
  <BaseView className={'flex-row w-full'}>
    <ChatList />
    <BaseView className={'w-full flex-1 min-h-screen min-w-0 relative'}>
      <Header />
      <MessageBox />
    </BaseView>
  </BaseView>
);

export default Chat;
