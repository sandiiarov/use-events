import { act, renderHook } from 'react-hooks-testing-library';
import { useActive } from '../src';

test('useActive should react on mouseDown/mouseUp events', () => {
  let isActive, bind;

  renderHook(() => ([isActive, bind] = useActive()));

  expect(isActive).toBeFalsy();
  act(() => bind.onMouseDown());
  expect(isActive).toBeTruthy();
  act(() => bind.onMouseUp());
  expect(isActive).toBeFalsy();
});
