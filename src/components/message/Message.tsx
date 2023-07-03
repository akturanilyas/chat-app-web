import React, { FC } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import TimeText from '../common/time-text/TimeText';
import { MessageProps } from './Message.interface';

const Message: FC<MessageProps> = (props) => {
  const { sender, message, receiver, time } = props;

  return (
    <BaseView>
      <BaseView className={'flex flex-row'} >
        <BaseView className={'w-full px-2 overflow-x-hidden'}>
          <BaseView className={'flex-row justify-between items-center'}>
            <BaseText text={'sender'} className={'font-bold'} />
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

export default Message;
