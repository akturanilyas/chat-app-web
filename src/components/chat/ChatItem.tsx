import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import { ChatItemProps } from './ChatItem.interface';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import TimeText from '../common/time-text/TimeText';
import { twMerge } from 'tailwind-merge';

const ChatItem: FC<ChatItemProps> = (props) => {
  const { chat, onClick, className } = props;

  const classes = twMerge(`
  p-4 rounded
  ${className}
  `);

  return (
    <BaseView className={classes}>
      <BaseView className={'flex flex-row'} onClick={() => onClick(chat.id)}>
        <ImageView image={chat.target.image} className={'w-16 h-16 justify-center'} />

        <BaseView className={'w-full px-2 overflow-x-hidden justify-center'}>
          <BaseView className={'flex-row justify-between items-center'}>
            <BaseText text={chat.target.name} className={'font-bold'} />
            <TimeText text={chat.time} className={'font-bold'} />
          </BaseView>

          <BaseText
            text={chat.message}
            className={'font-medium text-sm truncate break-all cursor-pointer'}
          />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ChatItem;
