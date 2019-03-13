import { act, renderHook } from 'react-hooks-testing-library';
import { useScroll } from '../src';


test('useScroll should react on scroll events', () => {
  let scrollTop, scrollLeft, offsetHeight, offsetWidth, bind;

  renderHook(() => ([scrollTop, scrollLeft, offsetHeight, offsetWidth, bind] = useScroll()));

  expect(scrollTop).toBe(0);
  expect(scrollLeft).toBe(0);
  expect(offsetHeight).toBe(0);
  expect(offsetWidth).toBe(0);

  act(
    () => bind.onScroll({
      target: { scrollTop: 100, scrollLeft: 2, offsetHeight: 20, offsetWidth: 30 }
    })
  );

  expect(scrollTop).toBe(100);
  expect(scrollLeft).toBe(2);
  expect(offsetHeight).toBe(20);
  expect(offsetWidth).toBe(30);

});
