import * as React from 'react';
import { render } from 'react-testing-library';
import ResizeObserver from 'resize-observer-polyfill';
import { useResizeObserver } from '../src';

jest.mock('resize-observer-polyfill');

const TestComponent = () => {
  const ref = React.useRef(null);
  const [width, height] = useResizeObserver(ref);
  return <div ref={ref}>{width + height}</div>;
};

const resize = (width: number, height: number) => {
  // @ts-ignore
  ResizeObserver.mockReset();
  // @ts-ignore
  ResizeObserver.mockImplementation(cb => {
    cb([{ contentRect: { width, height } }]);
    return { observe: jest.fn, disconnect: jest.fn };
  });

  const { container } = render(<TestComponent />);
  return container.textContent;
};

test('useResizeObserver', () => {
  expect(resize(100, 100)).toBe('200');
  expect(resize(200, 200)).toBe('400');
});
