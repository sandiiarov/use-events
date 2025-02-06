import { act, renderHook } from "@testing-library/react";
import { useTouch } from "../src";

test("useTouch should react on touchStart/touchEnd events", () => {
  const { result } = renderHook(() => useTouch());

  expect(result.current[0]).toBeFalsy();
  act(() => result.current[1].onTouchStart({} as React.TouchEvent));
  expect(result.current[0]).toBeTruthy();
  act(() => result.current[1].onTouchEnd({} as React.TouchEvent));
  expect(result.current[0]).toBeFalsy();
});
