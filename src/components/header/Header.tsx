import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import { HeaderProps } from './Header.interface';
import UserActions from './UserActions';
import BaseButton from '../common/base-button/BaseButton';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import useModalDispatcher from '../../hooks/useModalDispatcher';
import { ModalName } from '../../enums/modalName.enum';

const Header: FC<HeaderProps> = () => {
  const { openModal } = useModalDispatcher();

  const headerClasses = `
    flex-row
    w-full items-center
    sticky top-0 left-0
    z-20 h-16
    bg-white
    dark:bg-slate-dark
    backdrop-blur
    supports-backdrop-blur:bg-white
    supports-backdrop-blur:dark:bg-slate-dark
    border-b
    border-slate-200
    dark:border-slate-800
    px-8
  `;

  return (
    <BaseView className={headerClasses}>
      <BaseView className={'flex-row flex-1 justify-end items-center'}>
        <BaseView className={'flex-row h-full items-center gap-8'}>
          <BaseButton
            icon={{ icon: CUSTOM_ICON.PLUS_CIRCLE }}
            onClick={() => openModal({ name: ModalName.ADD_FRIEND_MODAL, eventName: ModalName.ADD_FRIEND_MODAL })}
          />
          <UserActions />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Header;
