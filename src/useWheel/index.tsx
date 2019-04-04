import * as React from 'react';

const useWheel = (): [
  number,
  number,
  { onWheel: (e: React.WheeEvent) => void }
] => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [z, setZ] = React.useState(0);
  const bind = {
    onWheel: ({ nativeEvent: { deltaX, deltaY, deltaZ, ...other } }: React.WheeEvent) => {
      setX(deltaX);
      setY(deltaY);
      setZ(deltaZ);
    },
  };

  return [x, y, z, bind];
};

export default useWheel;
