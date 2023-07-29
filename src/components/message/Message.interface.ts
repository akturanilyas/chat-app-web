import { User } from '../../types/user';

export interface MessageProps {
  id: string;
  message: string;
  sender: string;
  receiver: string;
  time: string;
}
