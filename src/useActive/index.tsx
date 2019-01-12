import * as React from 'react';

const useActive = (): [
  boolean,
  {
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseUp: (e: React.MouseEvent) => void;
  }
] => {
  const [isActive, setActive] = React.useState(false);

  const bind = {
    onMouseDown: (e: React.MouseEvent) => setActive(true),
    onMouseUp: (e: React.MouseEvent) => setActive(false),
  };

  return [isActive, bind];
};

export default useActive;
