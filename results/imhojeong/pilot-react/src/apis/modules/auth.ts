import axios from 'axios';

const address = 'http://localhost:5000';

export class CommonInfoResponse {
    code: number;
    message: string;
    validate?: object;
    constructor(code: number,
    message: string, validate?: object) {
        this.code = code;
        this.message = message;
        this.validate = validate;
    }
}

export class AuthenticationInfoRequest {
    account?: string;
    password?: string;

    constructor(account?: string, password?: string) {
        this.account = account;
        this.password = password;
    }
}

export class AuthenticationInfoResponse {
    accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }
}

export class UserInfoResponse {
    
    id: number;
    account: string;
    name: string;
    level: number;

    constructor(id: number, account: string,
    name: string, level: number) {
        this.id = id;
        this.account = account;
        this.name = name;
        this.level = level;
    }
}

export const doLogin = (sendData: AuthenticationInfoRequest) : Promise<AuthenticationInfoResponse> => {
    return axios.post(`${address}/auth/login`,
        sendData
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        return error.response.data;
    });
        
}

export const doLogout = () => {
    return axios.get(`${address}/auth/logout`)
        .then((response) => {
            return response.status;
        })
        .catch((error) => {
            return error.status;
        })
}

export const doUserInfo = (accessToken: AuthenticationInfoResponse) : Promise<UserInfoResponse> => {
    return axios.get(`${address}/v1/users/me`, {
        headers: { Authorization : `Bearer ${accessToken.accessToken}`}
    })
        .then((response) => {
            
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        })
}