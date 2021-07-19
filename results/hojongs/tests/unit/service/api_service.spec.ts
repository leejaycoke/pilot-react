import ApiService from '@/service/api_service'
import Auth from '@/dto/auth'
import User from '@/dto/user'

// https://github.com/facebook/jest/issues/2071#issuecomment-396771463
function mockFetch(data: any) {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => data
        })
    );
}

describe('api_service.ts', () => {
    it('when login(), given server respond OK, then return valid accessToken', async () => {
        // given
        window.fetch = mockFetch({ accessToken: "asdf" })
        const apiService = new ApiService();

        // when
        const accessToken = await apiService.login(new Auth("valid", "auth"))

        // then
        expect(accessToken).toMatch("asdf")
    })

    it('when getUser() with valid accessToken, given server respond OK, then return User instance', async () => {
        // given
        const obj = {
            "id": 1,
            "account": "devbadak",
            "name": "개발바닥",
            "level": 10
        }
        window.fetch = mockFetch(obj)
        const apiService = new ApiService();

        // when
        const user = await apiService.getUser("valid-token")

        // then
        expect(user).toEqual(new User(
            obj.id,
            obj.account,
            obj.name,
            obj.level,
        ))
    })
})
