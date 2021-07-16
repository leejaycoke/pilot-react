class Auth {
  private readonly storageKey: string;

  constructor() {
    this.storageKey = 'AUTH_KEY';
  }

  public get = () => sessionStorage.getItem(this.storageKey);

  public set = (token: string) => sessionStorage.setItem(this.storageKey, token);

  public remove = () => sessionStorage.removeItem(this.storageKey);
}

export default new Auth();
