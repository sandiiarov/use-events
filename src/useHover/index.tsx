import * as React from 'react';

const useHover = (): [
  boolean,
  {
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
  }
] => {
  const [isHovered, setHovered] = React.useState(false);

  const bind = {
    onMouseEnter: (e: React.MouseEvent) => setHovered(true),
    onMouseLeave: (e: React.MouseEvent) => setHovered(false),
  };

  return [isHovered, bind];
};

export default useHover;
