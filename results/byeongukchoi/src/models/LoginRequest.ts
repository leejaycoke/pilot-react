export default class LoginRequest {
  account: string;
  password: string;

  constructor(account: string, password: string) {
    this.account = account;
    this.password = password;
  }

  public isValid(): boolean {
    return !(!this.account || !this.password);
  }
}
