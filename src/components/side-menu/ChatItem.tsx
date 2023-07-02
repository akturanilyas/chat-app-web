import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import { ChatItemProps } from './ChatItem.interface';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import TimeText from '../common/time-text/TimeText';

const ChatItem: FC<ChatItemProps> = (props) => {
  const { name, message, image, time } = props;

  return (
    <BaseView>
      <BaseView className={'flex flex-row'}>
        <ImageView image={image} className={'w-16 h-16'} />

        <BaseView className={'w-full px-2 overflow-x-hidden'}>
          <BaseView className={'flex-row justify-between items-center'}>
            <BaseText text={name} className={'font-bold'} />
            <TimeText text={time} className={'font-bold'} />
          </BaseView>

          <BaseText
            text={message}
            className={'font-medium text-sm truncate break-all cursor-pointer'}
          />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ChatItem;
