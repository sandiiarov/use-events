import { act, renderHook } from "@testing-library/react";
import { useFocus } from "../src";

test("useFocus should react on focus/blur events", () => {
  const { result } = renderHook(() => useFocus());

  expect(result.current[0]).toBeFalsy();
  act(() => result.current[1].onFocus({} as React.FocusEvent));
  expect(result.current[0]).toBeTruthy();
  act(() => result.current[1].onBlur({} as React.FocusEvent));
  expect(result.current[0]).toBeFalsy();
});
