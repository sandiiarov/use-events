import React from 'react';

function useMousePosition(): [
  number,
  number,
  { onMouseMove: (e: React.MouseEvent) => void }
] {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const bind = React.useMemo(
    () => ({
      onMouseMove: (e: React.MouseEvent) => {
        setX(e.nativeEvent.offsetX);
        setY(e.nativeEvent.offsetY);
      },
    }),
    []
  );

  return [x, y, bind];
}

export default useMousePosition;
