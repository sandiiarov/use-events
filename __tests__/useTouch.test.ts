import { act, renderHook } from 'react-hooks-testing-library';
import { useTouch } from '../src';

test('useTouch should react on touchStart/touchEnd events', () => {
  let isTouched, bind;

  renderHook(() => ([isTouched, bind] = useTouch()));

  expect(isTouched).toBeFalsy();
  act(() => bind.onTouchStart());
  expect(isTouched).toBeTruthy();
  act(() => bind.onTouchEnd());
  expect(isTouched).toBeFalsy();
});
