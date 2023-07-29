export type Chat = {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  target: { name: string; id: string; image: string };
  user_id: string;
  target_id: string;
  target_type: string;
  message: string;
  time: string;
  image: string;
};
