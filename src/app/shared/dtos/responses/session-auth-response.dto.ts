import { User } from '@shared/dtos';

export interface SessionLogInResponse {
  user: User;
  authToken: string;
}
