import { ReactNode } from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { renderHook } from "@testing-library/react-hooks/dom";
import useCheckUserEffect from "../useCheckUserEffect";

describe("useCheckUserEffect hook", () => {
  const setup = ({
    isLoggedIn = false,
    successPagePath = "/",
    failurePagePath = "/",
  }: {
    isLoggedIn: boolean;
    successPagePath?: string;
    failurePagePath?: string;
  }) => {
    const history = createMemoryHistory();
    const wrapper = ({ children }: { children?: ReactNode }) => (
      <Router history={history}>{children}</Router>
    );

    const { result } = renderHook(
      () =>
        useCheckUserEffect({
          isLoggedIn,
          successPagePath,
          failurePagePath,
        }),
      {
        wrapper,
      }
    );

    return { result, history };
  };

  it("should push to success page when logged in", () => {
    const successPagePath = "/user/profile";
    const { history } = setup({
      isLoggedIn: true,
      successPagePath,
    });

    expect(history.location.pathname).toEqual(successPagePath);
  });

  it("should push to failure page when logged out", () => {
    const failurePagePath = "/";
    const { history } = setup({
      isLoggedIn: false,
      failurePagePath,
    });

    expect(history.location.pathname).toEqual(failurePagePath);
  });
});
