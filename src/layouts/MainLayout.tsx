import React, { FC } from 'react';
import BaseView from '../components/common/base-view/BaseView';
import { MainLayoutProps } from './MainLayout.interface';

const MainLayout: FC<MainLayoutProps> = (props) => (
  <BaseView className={'flex-row'}>
    <BaseView className={'w-full flex-1 min-h-screen min-w-0 relative'}>
      {props.children}
    </BaseView>
  </BaseView>
);

export default MainLayout;
