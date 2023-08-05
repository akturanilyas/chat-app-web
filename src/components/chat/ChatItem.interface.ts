import { Chat } from '../../types/chat';

export interface ChatItemProps {
  chat: Chat;
  onClick: (id: string) => void;
  className?: string;
}
