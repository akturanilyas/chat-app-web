import { AddFriendItemProps } from './AddFriendItem.interface';
import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import BaseButton from '../common/base-button/BaseButton';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import ImageView from '../common/base-image/ImageView';

const AddFriendItem: FC<AddFriendItemProps> = (props) => {
  const { user } = props;
  const image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

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
        className={'bg-lime-500'}
        icon={{ icon: CUSTOM_ICON.PLUS_CIRCLE, iconClassName: 'text-slate-100 ' }}
      />
    </BaseView>
  );
};

export default AddFriendItem;
