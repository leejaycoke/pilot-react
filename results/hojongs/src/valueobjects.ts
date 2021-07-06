export class Auth {
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

export class LoginConfig {
    method = "POST";
    headers = {
        "Content-Type": "application/json",
    }
    body: string;

    constructor(auth: Auth) {
        this.body = JSON.stringify(auth);
    }
}
