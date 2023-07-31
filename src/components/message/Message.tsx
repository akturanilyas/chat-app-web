import React, { FC, ForwardedRef, forwardRef } from 'react';
import BaseView from '../common/base-view/BaseView';
import BaseText from '../common/base-text/BaseText';
import ImageView from '../common/base-image/ImageView';
import TimeText from '../common/time-text/TimeText';
import { MessageProps } from './Message.interface';
import { useMain } from '../../hooks/useSlices';

const Message: FC<MessageProps> = forwardRef(
  (props: MessageProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { message } = props;
    const { user } = useMain();

    const classes = 'flex flex-row w-1/2';

    const isMyMessage = message.sender.id === user?.id;

    return (
      <BaseView ref={ref} style={{ direction: isMyMessage ? 'rtl' : 'ltr' }}>
        <BaseView className={classes}>
          <BaseView
            className={
              'm-2 min-w-[150px] border border-primary rounded-2xl min-h-[64px] px-2 my-2 overflow-x-hidden'
            }
          >
            <BaseView className={'flex flex-row gap-4 items-center'}>
              <BaseText text={message.sender.name} className={'font-bold'} />
            </BaseView>

            <BaseView className={'flex-row'}>
              <BaseText text={message.text} className={'font-medium text-sm'} />
            </BaseView>

            <BaseView className={'flex-row-reverse'}>
              <TimeText text={message.time} className={'font-bold'} />
            </BaseView>
          </BaseView>
        </BaseView>

        <BaseView className={'-mt-2'}>
          <ImageView
            image={'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'}
            className={'max-w-[24px]'}
          />
        </BaseView>
      </BaseView>
    );
  },
);

export default Message;
