import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import { HeaderProps } from './Header.interface';
import BaseButton from '../common/base-button/BaseButton';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import useModalDispatcher from '../../hooks/useModalDispatcher';
import { ModalName } from '../../enums/modalName.enum';
import BaseText from '../common/base-text/BaseText';
import { useFriendRequestsQuery } from '../../api/services/friend/friendService';
import ImageView from '../common/base-image/ImageView';
import { useAppDispatch } from '../../hooks/useRedux';
import { setUser } from '../../redux/slices/mainSlice';

const Header: FC<HeaderProps> = ({ chat }) => {
  const { openModal } = useModalDispatcher();
  const { data: requests } = useFriendRequestsQuery({});
  const dispatch = useAppDispatch();

  const headerClasses = `
    flex-row
    w-full items-center
    sticky top-0 left-0
    z-20 h-24
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
      <BaseView className={'flex-row flex-1 items-center h-24'}>
        <BaseView className={'flex flex-1 flex-row items-center gap-4'}>
          {chat && <ImageView image={chat.target.image} className={'w-12 h-12'} />}
          {chat && (
            <BaseText className={'font-bold text-slate-400'} text={chat.target.name} />
          )}
        </BaseView>
        <BaseView className={'flex-row h-full items-center gap-2'}>
          <BaseButton
            icon={{ icon: CUSTOM_ICON.USER_PLUS }}
            className={'bg-transparent'}
            onClick={() =>
              openModal({
                name: ModalName.ADD_FRIEND_MODAL,
                eventName: ModalName.ADD_FRIEND_MODAL,
              })
            }
          />
          <BaseView className={'flex flex-1 relative'}>
            <BaseButton
              icon={{ icon: CUSTOM_ICON.BELL }}
              className={'bg-transparent'}
              onClick={() =>
                openModal({
                  name: ModalName.FRIEND_REQUEST_MODAL,
                  eventName: ModalName.FRIEND_REQUEST_MODAL,
                })
              }
            />
            {requests && (
              <BaseView
                className={'bottom-1 right-1 bg-red-600 rounded-2xl w-[16px] absolute'}
              >
                <BaseText
                  text={requests.length.toString()}
                  className={'text-slate-100 self-center text-sm'}
                />
              </BaseView>
            )}
          </BaseView>
          <BaseButton
            icon={{ icon: CUSTOM_ICON.X, iconClassName: 'text-error', customSize: 32 }}
            className={'bg-transparent'}
            onClick={() => dispatch(setUser(undefined))}
          />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Header;
