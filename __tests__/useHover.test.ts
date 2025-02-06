import { act, renderHook } from "@testing-library/react";
import { useHover } from "../src";

test("useHover should react on mouseEnter/mouseLeave events", () => {
  const { result } = renderHook(() => useHover());

  expect(result.current[0]).toBeFalsy();
  act(() => result.current[1].onMouseEnter({} as React.MouseEvent));
  expect(result.current[0]).toBeTruthy();
  act(() => result.current[1].onMouseLeave({} as React.MouseEvent));
  expect(result.current[0]).toBeFalsy();
});
