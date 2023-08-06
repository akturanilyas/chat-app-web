import { Message } from '../../types/message';
import { ForwardedRef } from 'react';

export interface MessageProps {
  message: Message;
  ref?: ForwardedRef<HTMLDivElement>;
}
