import React from 'react';

function useActive(): [
  boolean,
  {
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseUp: (e: React.MouseEvent) => void;
  }
] {
  const [isActive, setActive] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onMouseDown: (e: React.MouseEvent) => void setActive(true),
      onMouseUp: (e: React.MouseEvent) => void setActive(false),
    }),
    []
  );

  return [isActive, bind];
}

export default useActive;
