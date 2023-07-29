import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import { FriendItemProps } from './FriendItem.interface';

const FriendItem: FC<FriendItemProps> = (props) => {
  const { friend, itemOnClick } = props;

  const image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

  return (
    <BaseView
      className={
        'flex flex-row justify-between border-2 p-2 items-center border-slate-200'
      }
      onClick={() => itemOnClick(friend)}
    >
      <BaseView className={'flex flex-row items-center gap-2'}>
        <ImageView image={image} className={'w-12 h-12'} />
        <BaseText text={friend.user.name} />
      </BaseView>
    </BaseView>
  );
};

export default FriendItem;
