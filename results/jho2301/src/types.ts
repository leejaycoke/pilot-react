export interface LoginForm {
  account: string;
  password: string;
}

export type UserId = number;

export type Level = number;

export interface User {
  id: UserId;
  account: string;
  name: string;
  level: Level;
}
