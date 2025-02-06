import { fireEvent } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react";
import { useWindowResize } from "../src";

const resize = (width: number, height: number) => {
  // @ts-ignore
  window.innerWidth = width;
  // @ts-ignore
  window.innerHeight = height;
  fireEvent(window, new Event("resize"));
};

test("useWindowResize should react on window resize event", () => {
  const { result } = renderHook(() => useWindowResize());

  act(() => resize(100, 100));
  expect(result.current[0]).toBe(100);
  expect(result.current[1]).toBe(100);

  act(() => resize(200, 200));
  expect(result.current[0]).toBe(200);
  expect(result.current[1]).toBe(200);
});
