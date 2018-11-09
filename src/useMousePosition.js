import React from 'react';

const useMousePosition = () => {
  const [{ x, y }, setPosition] = React.useState({ x: 0, y: 0 });

  const bind = {
    onMouseMove: ({ nativeEvent: { offsetX: x, offsetY: y } }) => {
      setPosition({ x, y });
    },
  };

  return [x, y, bind];
};

export default useMousePosition;
