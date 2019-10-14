import { fireEvent } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useWindowResize } from '../src';

const resize = (width: number, height: number) => {
  // @ts-ignore
  window.innerWidth = width;
  // @ts-ignore
  window.innerHeight = height;
  fireEvent(window, new Event('resize'));
};

test('useWindowResize should react on window resize event', () => {
  let width, height;

  renderHook(() => ([width, height] = useWindowResize()));

  act(() => resize(100, 100));
  expect(width).toBe(100);
  expect(height).toBe(100);

  act(() => resize(200, 200));
  expect(width).toBe(200);
  expect(height).toBe(200);
});
