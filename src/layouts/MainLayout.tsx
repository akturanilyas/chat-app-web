import React, { FC } from 'react';
import BaseView from '../components/common/base-view/BaseView';
import { MainLayoutProps } from './MainLayout.interface';
import ChatList from '../components/side-menu/ChatList';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const MainLayout: FC<MainLayoutProps> = (props) => (
  <BaseView className={'flex-row'}>
    <ChatList />
    <BaseView className={'w-full flex-1 min-h-screen min-w-0 relative'}>
      <Header />
      {props.children}
      <Footer />
    </BaseView>
  </BaseView>
);

export default MainLayout;
