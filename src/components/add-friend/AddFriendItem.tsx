import { AddFriendItemProps } from './AddFriendItem.interface';
import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import BaseButton from '../common/base-button/BaseButton';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import ImageView from '../common/base-image/ImageView';
import {
  useAddFriendMutation,
  useRemoveFriendMutation,
} from '../../api/services/friend/friendService';
import { twMerge } from 'tailwind-merge';
import { FriendStatus } from '../../enums/FriendStatus.enum';

const AddFriendItem: FC<AddFriendItemProps> = (props) => {
  const { user } = props;
  const [addFriendMutation] = useAddFriendMutation();
  const [removeFriendMutation] = useRemoveFriendMutation();

  const image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

  const addFriend = () => {
    addFriendMutation({ body: { user_id: user.id } });
  };

  const removeFriend = () => {
    removeFriendMutation({ body: { user_id: user.id } });
  };

  const classes = twMerge(`
  ${user.is_friend ? 'bg-red-500' : 'bg-lime-500'}
  ${user.status === FriendStatus.PENDING || 'disabled'} 
    `);

  return (
    <BaseView
      className={
        'flex flex-row justify-between border-2 p-2 items-center border-slate-200'
      }
    >
      <BaseView className={'flex flex-row items-center gap-2'}>
        <ImageView image={image} className={'w-12 h-12'} />
        <BaseText text={user.full_name} />
      </BaseView>

      <BaseButton
        className={classes}
        icon={{ icon: CUSTOM_ICON.PLUS_CIRCLE, iconClassName: 'text-error-100' }}
        onClick={user.is_friend ? removeFriend : addFriend}
      />
    </BaseView>
  );
};

export default AddFriendItem;
