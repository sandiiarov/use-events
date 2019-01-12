import React from 'react';

const useMousePosition = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const bind = {
    onMouseMove: ({ nativeEvent: { offsetX, offsetY } }) => {
      setX(offsetX);
      setY(offsetY);
    },
  };

  return [x, y, bind];
};

export default useMousePosition;
