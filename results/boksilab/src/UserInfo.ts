export default class UserInfo {
	constructor(account: string, password?: string, id?: number, level?: number, name?: string) {
		this._account = account;
		this._password = password;
		this._id = id;
		this._level = level;
		this._name = name;
	}
	private _account: string;
	private _password: string | undefined;
	private _id: number | undefined;
	private _level: number | undefined;
	private _name: string | undefined;
	set id(value: number | undefined) {
		this._id = value;
	}
	set level(value: number | undefined) {
		this._level = value;
	}
	set name(value: string | undefined) {
		this._name = value;
	}
	get account() {
		return this._account;
	}
	get password(): string | undefined {
		return this._password;
	}
	get id(): number | undefined {
		return this._id;
	}
	get level(): number | undefined {
		return this._level;
	}
	get name(): string | undefined {
		return this._name;
	}
}
