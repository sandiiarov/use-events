import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function useResizeObserver(
  ref: React.RefObject<HTMLElement>
): [number, number] {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width);
      setHeight(entries[0].contentRect.height);
    });

    if (ref.current !== null) {
      resizeObserver.observe(ref.current);
    }

    return () => void resizeObserver.disconnect();
  }, [ref]);

  return [width, height];
}

export default useResizeObserver;
