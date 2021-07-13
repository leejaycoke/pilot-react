export interface UserLoginFormat {
  account: string,
  password: string,
}

export interface LoginToken {
  accessToken: string,
}

export interface User {
  account: string,
  id: number,
  name: string,
  level: number,
}

export interface Response {
  code: number,
  message: string,
  validate: unknown,
}

export interface InfoItem {
  iconName: string,
  colorName: string,
  textLabel: string,
  textBody: string,
}
