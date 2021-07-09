import { renderHook } from "@testing-library/react-hooks/dom";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import User from "../../models/User";
import useUserProfileQuery from "../useUserProfileQuery";
import faker from "faker";
import userApi from "../../api/userApi";

describe("useUserProfileQuery hook", () => {
  const setup = () => {
    const queryClinet = new QueryClient();
    const wrapper = ({ children }: { children?: ReactNode }) => (
      <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
    );

    return renderHook(() => useUserProfileQuery({ retry: false }), { wrapper });
  };

  it("should cache data when successfully fetch user data", async () => {
    // given
    const sampleUserData = new User({
      id: faker.datatype.number(),
      account: faker.internet.userName(),
      level: faker.datatype.number(),
      name: faker.internet.userName(),
    });

    userApi.getUserProfile = jest
      .fn()
      .mockImplementation(async () => sampleUserData);

    const { result, waitFor } = setup();

    // when
    await waitFor(() => result.current.isSuccess);

    // then
    expect(result.current.data).toEqual(sampleUserData);
  });

  it("should create error when faiulre fetch user data", async () => {
    // given
    userApi.getUserProfile = jest.fn().mockImplementation(async () => {
      throw new Error();
    });

    const { result, waitFor } = setup();

    // when
    await waitFor(() => result.current.isError);

    // then
    expect(result.current.error).not.toBeNull();
  });
});
