import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { useClickOutside } from "../src";

test("useClickOutside should react on click outside and call callback", () => {
  const mockFn = jest.fn();

  const TestComponent = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const [isActive] = useClickOutside([ref1, ref2], mockFn);
    return (
      <div>
        <div ref={ref1} data-testid="1">
          {isActive ? "Foo" : "Baz"}
        </div>
        <div ref={ref2} data-testid="2">
          {isActive ? "Foo" : "Baz"}
        </div>
      </div>
    );
  };

  const { container, getByTestId } = render(<TestComponent />);

  const firstEl = getByTestId("1");
  const secondEl = getByTestId("2");

  expect(firstEl.textContent).toBe("Baz");
  expect(secondEl.textContent).toBe("Baz");

  fireEvent.mouseDown(container);
  expect(firstEl.textContent).toBe("Foo");
  expect(secondEl.textContent).toBe("Foo");
  fireEvent.mouseUp(container);

  fireEvent.mouseDown(firstEl);
  expect(firstEl.textContent).toBe("Baz");
  expect(secondEl.textContent).toBe("Baz");
  fireEvent.mouseUp(firstEl);

  fireEvent.mouseDown(secondEl);
  expect(firstEl.textContent).toBe("Baz");
  expect(secondEl.textContent).toBe("Baz");
  fireEvent.mouseUp(secondEl);

  expect(mockFn).toBeCalledTimes(1);
});
