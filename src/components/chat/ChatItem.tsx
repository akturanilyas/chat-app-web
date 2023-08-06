import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import { ChatItemProps } from './ChatItem.interface';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import TimeText from '../common/time-text/TimeText';
import { twMerge } from 'tailwind-merge';
import { getFormattedDate, getToday } from '../../utils/dateTimeUtil';
import { DATE_TIME_FORMAT, TIME_FORMAT } from '../../constants/dateTime.constant';

const ChatItem: FC<ChatItemProps> = (props) => {
  const { chat, onClick, className, currentChatId } = props;

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
            <BaseText
              text={chat.target.name}
              className={`font-bold ${currentChatId === chat.id ? 'text-slate-200' : ''}`}
            />
            <TimeText
              text={getFormattedDate(
                chat.message?.time,
                chat.message?.time! > getToday().toString()
                  ? DATE_TIME_FORMAT
                  : TIME_FORMAT,
              )}
              className={`font-bold ${currentChatId === chat.id ? 'text-slate-200' : ''}`}
            />
          </BaseView>

          <BaseText
            text={chat.message?.text || ''}
            className={`font-medium text-sm truncate break-all cursor-pointer ${
              currentChatId === chat.id ? 'text-slate-200' : ''
            }`}
          />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ChatItem;
