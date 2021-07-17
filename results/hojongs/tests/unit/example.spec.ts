import LoginService from '@/login_service'
import Auth from '@/valueobject/auth'
import User from '@/valueobject/user'

// https://github.com/facebook/jest/issues/2071#issuecomment-396771463
function mockFetch(data: Object) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

describe('login_service.ts', () => {
  it('when login(), given server respond OK, then return valid accessToken', async () => {
    // given
    window.fetch = mockFetch({ accessToken: "asdf" })

    // when
    let loginService = new LoginService();
    const accessToken = await loginService.login(new Auth("valid", "auth"))

    // then
    expect(accessToken).toMatch("asdf")
  })

  it('when getUser() with valid accessToken, given server respond OK, then return User instance', async () => {
    // given
    let obj = {
      "id": 1,
      "account": "devbadak",
      "name": "개발바닥",
      "level": 10
    }
    window.fetch = mockFetch(obj)

    // when
    let loginService = new LoginService();
    const user = await loginService.getUser("valid-token")

    // then
    expect(user).toEqual(new User(
      obj.id,
      obj.account,
      obj.name,
      obj.level,
    ))
  })
})
