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

export class LoginFetchConfig implements RequestInit {
    method = "POST";
    headers: HeadersInit = {
        "Content-Type": "application/json",
    }
    body: BodyInit;

    constructor(auth: Auth) {
        this.body = JSON.stringify(auth);
    }
}

export class UserFetchConfig implements RequestInit {
    method = "GET";
    headers: HeadersInit

    constructor(accessToken: string) {
        this.headers = {
            Authorization: `Bearer ${accessToken}`,
        }
    }
}

export class User {
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
