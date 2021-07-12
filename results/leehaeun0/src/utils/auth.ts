class Auth {
  private accessToken: string | null;
  private readonly storageKey: string;

  constructor() {
    this.accessToken = null;
    this.storageKey = 'AUTH_KEY';
  }

  public get = () => sessionStorage.getItem(this.storageKey);

  public set = (token: string) => sessionStorage.setItem(this.storageKey, token);

  public remove = () => sessionStorage.removeItem(this.storageKey);
}

export default new Auth();
