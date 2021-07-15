import UserInfo from './UserInfo';
export default class Response {
	constructor(type: string, message?: string, userInfo?: UserInfo, token?: string) {
		this._type = type;
		this._message = message;
		this._userInfo = userInfo;
		this._token = token;
	}
	private _type: string;
	private _message: string | undefined;
	private _userInfo: UserInfo | undefined;
	private _token: string | undefined;

	get type() {
		return this._type;
	}
	get message() {
		return this._message;
	}
	get userInfo() {
		return this._userInfo;
	}
	get token() {
		return this._token;
	}
}
