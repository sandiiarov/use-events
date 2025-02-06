import { act, renderHook } from "@testing-library/react";
import { useMousePosition } from "../src";

test("useTouch should react on mouseMove event", () => {
  const { result } = renderHook(() => useMousePosition());

  expect(result.current[0]).toBe(0);
  expect(result.current[1]).toBe(0);
  act(() => {
    return result.current[2].onMouseMove({
      nativeEvent: { offsetX: 1, offsetY: 2 },
    } as React.MouseEvent);
  });
  expect(result.current[0]).toBe(1);
  expect(result.current[1]).toBe(2);
  act(() => {
    return result.current[2].onMouseMove({
      nativeEvent: { offsetX: 3, offsetY: 4 },
    } as React.MouseEvent);
  });
  expect(result.current[0]).toBe(3);
  expect(result.current[1]).toBe(4);
});
