import { act, renderHook } from "@testing-library/react";
import { useActive } from "../src";

test("useActive should react on mouseDown/mouseUp events", () => {
  const { result } = renderHook(() => useActive());

  expect(result.current[0]).toBeFalsy();
  act(() => result.current[1].onMouseDown({} as React.MouseEvent));
  expect(result.current[0]).toBeTruthy();
  act(() => result.current[1].onMouseUp({} as React.MouseEvent));
  expect(result.current[0]).toBeFalsy();
});
