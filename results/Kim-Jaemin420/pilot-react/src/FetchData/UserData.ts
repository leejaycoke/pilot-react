export class UserData {
  account: string;
  id: number;
  level: number;
  name: string;

  constructor(info: { account: string, id: number, level: number, name: string} | null) {
    this.account = info ? info.account : '';
    this.id = info ? info.id : 0;
    this.level = info ? info.level : 0;
    this.name = info ? info.name : '';
  }

}

