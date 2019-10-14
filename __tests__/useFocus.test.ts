import { act, renderHook } from '@testing-library/react-hooks';
import { useFocus } from '../src';

test('useFocus should react on focus/blur events', () => {
  let isFocused, bind;

  renderHook(() => ([isFocused, bind] = useFocus()));

  expect(isFocused).toBeFalsy();
  act(() => bind.onFocus());
  expect(isFocused).toBeTruthy();
  act(() => bind.onBlur());
  expect(isFocused).toBeFalsy();
});
