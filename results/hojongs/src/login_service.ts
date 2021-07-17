import Auth from "@/valueobject/auth";
import User from "@/valueobject/user";

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
        return fetch(`${this.baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(auth),
        })
            .then((response) => response.json())
            .catch((err) => console.log(err))
            .then((responseBody) => {
                console.log("token = " + responseBody.accessToken);
                return responseBody.accessToken;
            });
    }

    /**
     * get user information
     * 
     * @param accessToken
     * @returns user information
     */
    getUser(accessToken: string): Promise<User> {
        return fetch(`${this.baseUrl}/v1/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => response.json())
            .catch((err) => console.log(err))
            .then((responseBody) => new User(
                responseBody.id,
                responseBody.account,
                responseBody.name,
                responseBody.level
            ));
    }
}
