export class LoginEntity {
  constructor(private readonly account: string, private readonly password: string) {}
}

export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly account: string,
    public readonly name: string,
    public readonly level: string
  ) {}
}
