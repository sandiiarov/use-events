import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (
  ref: React.RefObject<HTMLElement>
): [number, number] => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;

      setWidth(width);
      setHeight(height);
    });

    if (current !== null) {
      resizeObserver.observe(current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [width, height];
};

export default useResizeObserver;
