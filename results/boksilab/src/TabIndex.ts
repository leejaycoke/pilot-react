export default class TabIndex {
	static none = 0;
	static input1 = 1;
	static input2 = 2;
	static button = 3;
	static next(value: number) {
		return value >= 3 ? 0 : value + 1;
	}
	static prev(value: number) {
		return value <= 0 ? 3 : value - 1;
	}
}
