import React from 'react';
import SideMenuItems from '../../assets/predefined-data/sideMenuItems';
import { MAIN_PATH } from '../../constants/mainPath.constant';
import BaseLink from '../common/base-link/BaseLink';
import BaseView from '../common/base-view/BaseView';
import Logo from '../header/Logo';
import SideMenuItem from './SideMenuItem';

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
      <BaseView>
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
        <BaseView className={'my-6 mx-4 flex-1'}>
          {SideMenuItems.map((item, index) => (
            <SideMenuItem key={index} {...item} />
          ))}
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ChatList;
