export interface IUser {
  account: string;
  name: string;
  password: string;
}

export class UserDTO implements IUser {
  account = "";
  name = "";
  password = "";
}

export default class User extends UserDTO {
  constructor(dto?: UserDTO) {
    super();
    Object.assign(this, dto);
  }
}
