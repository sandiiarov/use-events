import React from 'react';

function useHover(): [
  boolean,
  {
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
  }
] {
  const [isHovered, setHovered] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onMouseEnter: (e: React.MouseEvent) => void setHovered(true),
      onMouseLeave: (e: React.MouseEvent) => void setHovered(false),
    }),
    []
  );

  return [isHovered, bind];
}

export default useHover;
