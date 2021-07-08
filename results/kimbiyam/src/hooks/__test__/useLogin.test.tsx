import authApi from "../../api/authApi";
import faker from "faker";
import { act, renderHook } from "@testing-library/react-hooks/dom";
import useLogin from "../useLogin";
import tokenStorage from "../../utils/tokenStorage";
import LoginData from "../../models/LoginData";

describe("useLogin hook", () => {
  const setup = () => renderHook(() => useLogin());

  it("should set token when log in succeed", async () => {
    // given
    const accessToken = faker.internet.password();
    const sampleLoginData = new LoginData("test", "1234");

    authApi.login = jest.fn().mockImplementation(async () => accessToken);
    tokenStorage.setToken = jest.fn();

    const { result } = setup();

    // when
    await act(async () => {
      await result.current.login(sampleLoginData);
    });

    // then
    expect(tokenStorage.setToken).toBeCalledWith(accessToken);
  });

  it("should set error message when log in failed", async () => {
    // given
    const sampleLoginData = new LoginData("test", "1234");
    const sampleErrorMessage = "error!";

    authApi.login = jest.fn().mockImplementation(async () => {
      throw sampleErrorMessage;
    });

    const { result } = setup();

    // when
    await act(async () => {
      await result.current.login(sampleLoginData);
    });

    // then
    expect(result.current.errMsg).toEqual(sampleErrorMessage);
  });
});
