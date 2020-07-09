import React from "react";
import ResizeObserver from "resize-observer-polyfill";

function useResizeObserver(
  ref: React.RefObject<HTMLElement>
): [number, number] {
  const animationFrameID = React.useRef<number>();
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    // https://github.com/microsoft/TypeScript/issues/37861
    // @ts-ignore
    const resizeObserver = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || entries.length === 0) {
        return;
      }

      const { width, height } = entries[0].contentRect;

      // https://github.com/WICG/resize-observer/issues/38
      animationFrameID.current = requestAnimationFrame(() => {
        setWidth(width);
        setHeight(height);
      });
    });

    if (ref.current !== null) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (animationFrameID.current) {
        cancelAnimationFrame(animationFrameID.current);
      }

      resizeObserver.disconnect();
    };
  }, [ref]);

  return [width, height];
}

export default useResizeObserver;
