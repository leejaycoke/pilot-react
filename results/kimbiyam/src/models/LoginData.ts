class LoginData {
  constructor(account: string, password: string) {
    this._account = account;
    this._password = password;
  }

  private _account: string;
  private _password: string;

  toJson = () => {
    return { account: this._account, password: this._password };
  };
}

export default LoginData;
