import { User } from './user.model';

export interface Store {
  authToken: string;
  user: User;
}
