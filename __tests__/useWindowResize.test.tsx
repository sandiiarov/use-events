import * as React from 'react';
import { act, render } from 'react-testing-library';
import { useWindowResize } from '../src';

test('useWindowResize should react on window resize events', () => {
  function fireResize(width: number, height: number) {
    // @ts-ignore
    window.innerWidth = width;
    // @ts-ignore
    window.innerHeight = height;
    window.dispatchEvent(new Event('resize'));
  }

  const TestComponent = () => {
    const [height, width] = useWindowResize();
    return <span>{`${width}x${height}`}</span>;
  };

  const { container, rerender } = render(<TestComponent />);
  act(() => fireResize(800, 600));
  expect(container.firstChild.textContent).toBe('800x600');
  act(() => fireResize(1024, 768));
  expect(container.firstChild.textContent).toBe('1024x768');
  act(() => fireResize(1440, 800));
  expect(container.firstChild.textContent).toBe('1440x800');
});
