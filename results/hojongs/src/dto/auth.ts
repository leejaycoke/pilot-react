export default class Auth {
    account: string;
    password: string;

    constructor(account: string, password: string) {
        this.account = account;
        this.password = password;
    }

    public toString(): string {
        return `Auth(account=${this.account},password=${this.password})`;
    }
}