import * as React from 'react';

const useMousePosition = (): [
  number,
  number,
  { onMouseMove: (e: React.MouseEvent) => void }
] => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const bind = {
    onMouseMove: ({ nativeEvent: { offsetX, offsetY } }: React.MouseEvent) => {
      setX(offsetX);
      setY(offsetY);
    },
  };

  return [x, y, bind];
};

export default useMousePosition;
