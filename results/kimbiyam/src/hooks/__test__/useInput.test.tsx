import { renderHook, act } from "@testing-library/react-hooks";
import { ChangeEvent } from "react";
import useInput from "../useInput";
import faker from "faker";

describe("useInput hook", () => {
  it("should change value when use onChange function", async () => {
    // given
    const { result } = renderHook(() => useInput());
    const input = faker.internet.userName();

    // when
    act(() => {
      const event = {
        target: {
          value: input,
        },
      } as ChangeEvent<HTMLInputElement>;

      result.current.onChange(event);
    });

    //then
    expect(result.current.value).toEqual(input);
  });
});
