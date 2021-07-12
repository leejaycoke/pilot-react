import { LoginEntity } from "../model/entity";
import HttpClient from "../service/httpClient";

// 테스트는... 잘 안되서 나중에 제대로 공부하려고 합니다... 흑흑... 삽질을 엄청했어요..
describe("httpClient.ts", () => {
  it("login test", async () => {
    let httpClient = new HttpClient();
    const res = await httpClient.login(new LoginEntity("devbadak", "1234"));
    const accessToken = res.data.accessToken;
    expect(accessToken).toMatch("idonknow");
  });

  it("getUserinfo test", async () => {
    let httpClient = new HttpClient();
    const userInfo = await httpClient.getUserInfo();
    expect(userInfo).toMatch("maybe... devbadak's info?");
  });
});
