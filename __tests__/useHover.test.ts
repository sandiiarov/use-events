import { act, renderHook } from 'react-hooks-testing-library';
import { useHover } from '../src';

test('useHover should react on mouseEnter/mouseLeave events', () => {
  let isHovered, bind;

  renderHook(() => ([isHovered, bind] = useHover()));

  expect(isHovered).toBeFalsy();
  act(() => bind.onMouseEnter());
  expect(isHovered).toBeTruthy();
  act(() => bind.onMouseLeave());
  expect(isHovered).toBeFalsy();
});
