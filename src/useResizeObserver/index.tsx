import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {
  const [rect, setRect] = React.useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  React.useLayoutEffect(() => {
    const { current } = ref;

    const resizeObserver = new ResizeObserver(entries => {
      setRect(entries[0].contentRect);
    });

    if (current !== null) {
      resizeObserver.observe(current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return rect;
};

export default useResizeObserver;
