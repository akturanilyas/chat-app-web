export type Message = {
  id: string;
  created_at: string;
  updated_at: string;
  text: string;
  chat_id: string;
  sender: { id: string; name: string };
  time: string;
};
