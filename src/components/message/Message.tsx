import React, { FC, ForwardedRef, forwardRef } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import TimeText from '../common/time-text/TimeText';
import { MessageProps } from './Message.interface';
import { useMain } from '../../hooks/useSlices';

const Message: FC<MessageProps> = forwardRef(
  (props: MessageProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { message } = props;
    const { user } = useMain();

    const classes = 'flex flex-row w-1/2 mx-4';

    const isMyMessage = message.sender.id === user?.id;

    return (
      <BaseView ref={ref} style={{ direction: isMyMessage ? 'rtl' : 'ltr' }}>
        <BaseView className={classes}>
          <BaseView
            className={`min-w-[150px] rounded-2xl
               rtl:rounded-bl-none min-h-[64px] 
               overflow-x-hidden shadow-md
               mx-8
               ${
                 isMyMessage
                   ? 'bg-blue-primary rounded-br-none'
                   : 'bg-grey-100 rounded-bl-none'
               }`}
          >
            <BaseView className={'flex flex-row gap-4 items-center mx-4 my-2'}>
              <BaseText
                text={message.sender.name}
                className={`font-bold ${
                  isMyMessage ? 'text-slate-200' : 'text-slate-400'
                }`}
              />
            </BaseView>

            <BaseView className={'flex-row mx-4 pb-2'} style={{ direction: 'ltr' }}>
              <BaseText
                text={message.text}
                className={`font-medium text-sm ${
                  isMyMessage ? 'text-slate-100' : 'text-slate-500'
                }`}
              />
            </BaseView>

            <BaseView className={'flex-row-reverse'}>
              <TimeText text={message.time} className={'font-bold'} />
            </BaseView>
          </BaseView>
        </BaseView>
      </BaseView>
    );
  },
);

export default Message;
