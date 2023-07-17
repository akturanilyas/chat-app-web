export type Friend = {
  id: string;
  full_name: string;
  username: string;
  photo?: string;
};

export type FriendRequest = {
  id: string;
  user: { name: string };
};
