import { Auth, LoginFetchConfig, User, UserFetchConfig } from "./valueobjects";

/**
 * 외부 Login API를 호출하는 Service
 */
export default class LoginService {
    baseUrl = "http://localhost:5000";

    /**
     * login and get access token
     * 
     * @param auth request body
     * @returns accessToken
     */
    login(auth: Auth): Promise<string> {
        return fetch(`${this.baseUrl}/auth/login`, new LoginFetchConfig(auth))
            .then((response) => response.json())
            .catch((err) => console.log(err))
            .then((response_body) => {
                console.log("token = " + response_body.accessToken);
                return response_body.accessToken;
            });
    }

    /**
     * get user information
     * 
     * @param accessToken
     * @returns user information
     */
    getUser(accessToken: string): Promise<User> {
        return fetch(`${this.baseUrl}/v1/users/me`, new UserFetchConfig(accessToken))
            .then((response) => response.json())
            .catch((err) => console.log(err))
            .then((response_body) => new User(
                response_body.id,
                response_body.account,
                response_body.name,
                response_body.level
            ));
    }
}
