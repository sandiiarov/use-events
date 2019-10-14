import * as React from 'react';

function getWindowDimensions(serverSideWidth: number, serverSideHeight: number) : [ number, number ] {
  return isWindowDefined() ? [ window.innerWidth, window.innerHeight ] : [ serverSideWidth, serverSideHeight ];
}

function isWindowDefined() : boolean {
  return typeof window !== 'undefined';
}

const useWindowResize = (serverSideWidth: number = 0, serverSideHeight: number = 0): [number, number] => {
  const [winWidth, winHeight] = getWindowDimensions(serverSideWidth, serverSideHeight);
  const [width, setWidth] = React.useState(winWidth);
  const [height, setHeight] = React.useState(winHeight);

  React.useEffect(() => {
    const resize = () => {
      const [newWinWidth, newWinHeight] = getWindowDimensions(serverSideWidth, serverSideHeight);
      setWidth(newWinWidth);
      setHeight(newWinHeight);
    };

    if(isWindowDefined()) window.addEventListener('resize', resize);

    return () => {
      if(isWindowDefined()) window.removeEventListener('resize', resize);
    };
  }, [serverSideWidth, serverSideHeight]);

  return [width, height];
};

export default useWindowResize;
