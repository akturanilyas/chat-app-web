export interface ChatListProps {
  onListItemClicked: (id: string) => void;
  chatId: string | undefined;
}
