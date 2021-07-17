export default class User {
    id: number;
    account: string;
    name: string;
    level: number;

    constructor(id: number, account: string, name: string, level: number) {
        this.id = id;
        this.account = account;
        this.name = name;
        this.level = level;
    }
}
