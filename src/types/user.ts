export type User = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  age?: string;
};

export type FriendableUser = {
  id: string;
  full_name: string;
  username: string;
  photo?: string;
  is_friend: boolean;
};
