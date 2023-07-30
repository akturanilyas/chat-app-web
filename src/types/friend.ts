export type Friend = {
  id: string;
  user: { id: string; name: string };
};

export type FriendRequest = {
  id: string;
  user: { name: string };
  receiver_id: string;
};
