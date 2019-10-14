import React from 'react';

function useWindowResize(): [number, number] {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const resize = React.useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    return () => void window.removeEventListener('resize', resize);
  }, [resize]);

  return [width, height];
}

export default useWindowResize;
