import * as React from 'react';

const useWindowResize = (): [
  number,
  number,
] => {
  const [height, setHeight] = React.useState(window.innerHeight);
  const [width, setWidth] = React.useState(window.innerWidth);

  const listener = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return [height, width];
};

export default useWindowResize;
