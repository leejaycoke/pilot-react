export interface ILoginResponse {
  code: number;
  message: string;
}

export class LoginResponseDTO implements ILoginResponse {
  code = 0;
  message = "";
  validate? = {};
}

export default class LoginResponse extends LoginResponseDTO {
  constructor(dto: LoginResponseDTO) {
    super();
    Object.assign(this, dto);
  }
}
