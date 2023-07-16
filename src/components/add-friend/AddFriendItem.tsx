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

  let button = (
    <BaseButton
      className={'bg-lime-500'}
      icon={{ icon: CUSTOM_ICON.USER_PLUS, iconClassName: 'text-error-100' }}
      onClick={addFriend}
    />
  );

  if (user.is_friend) {
    button = (
      <BaseButton
        className={'bg-red-500'}
        icon={{ icon: CUSTOM_ICON.USER_MINUS, iconClassName: 'text-error-100' }}
        onClick={removeFriend}
      />
    );
  }

  if (user.status === FriendStatus.PENDING) {
    button = (
      <BaseButton
        className={'bg-red-500'}
        icon={{ icon: CUSTOM_ICON.USER_MINUS, iconClassName: 'text-error-100' }}
        disabled={true}
      />
    );
  }

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

      {button}
    </BaseView>
  );
};

export default AddFriendItem;
