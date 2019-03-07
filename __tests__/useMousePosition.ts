import { act, renderHook } from 'react-hooks-testing-library';
import { useMousePosition } from '../src';

test('useTouch should react on mouseMove event', () => {
  let x, y, bind;

  renderHook(() => ([x, y, bind] = useMousePosition()));

  expect(x).toBe(0);
  expect(y).toBe(0);
  act(() => bind.onMouseMove({ nativeEvent: { offsetX: 1, offsetY: 2 } }));
  expect(x).toBe(1);
  expect(y).toBe(2);
  act(() => bind.onMouseMove({ nativeEvent: { offsetX: 3, offsetY: 4 } }));
  expect(x).toBe(3);
  expect(y).toBe(4);
});
