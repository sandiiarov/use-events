import React from 'react';

const useActive = () => {
  const [isActive, setActive] = React.useState(false);

  const bind = {
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  return [isActive, bind];
};

export default useActive;
