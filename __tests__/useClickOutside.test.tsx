import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { useClickOutside } from '../src';

test('useClickOutside should react on click outside and call callback', () => {
  const mockFn = jest.fn();

  const TestComponent = () => {
    const ref = React.useRef(null);
    const [isActive] = useClickOutside(ref, mockFn);
    return <div ref={ref}>{isActive ? 'Foo' : 'Baz'}</div>;
  };

  const { container } = render(<TestComponent />);

  expect(container.firstChild.textContent).toBe('Baz');

  fireEvent.mouseDown(container);

  expect(container.firstChild.textContent).toBe('Foo');

  expect(mockFn).toBeCalled();
});
