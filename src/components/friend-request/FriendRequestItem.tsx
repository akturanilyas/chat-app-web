import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import { FriendRequestItemProps } from './FriendRequestItem.interface';
import {
  useAcceptFriendMutation,
  useRejectFriendMutation,
} from '../../api/services/friend/friendService';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import BaseButton from '../common/base-button/BaseButton';

const FriendRequestItem: FC<FriendRequestItemProps> = ({ request }) => {
  const [acceptFriendMutation] = useAcceptFriendMutation();
  const [rejectFriendMutation] = useRejectFriendMutation();

  const image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

  const acceptRequest = () => {
    acceptFriendMutation({ id: request.id });
  };

  const rejectRequest = () => {
    rejectFriendMutation({ id: request.id });
  };

  return (
    <BaseView
      className={
        'flex flex-row justify-between border-2 p-2 items-center border-slate-200'
      }
    >
      <BaseView className={'flex flex-row items-center gap-2'}>
        <ImageView image={image} className={'w-12 h-12'} />
        <BaseText text={request.user.name} />
      </BaseView>

      <BaseView className={'flex flex-row gap-4'}>
        <BaseButton
          className={'bg-lime-500 text-slate-100'}
          icon={{ icon: CUSTOM_ICON.USER_PLUS, iconClassName: 'text-error-100' }}
          onClick={acceptRequest}
        />

        <BaseButton
          className={'bg-red-500 text-slate-100'}
          icon={{
            icon: CUSTOM_ICON.USER_MINUS,
          }}
          onClick={rejectRequest}
        />
      </BaseView>
    </BaseView>
  );
};

export default FriendRequestItem;
