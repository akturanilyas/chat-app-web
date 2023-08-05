import { Chat } from '../../types/chat';

export interface ChatListProps {
  onListItemClicked: (chat: Chat) => void;
  chatId: string | undefined;
}
