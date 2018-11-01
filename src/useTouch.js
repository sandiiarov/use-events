import React from 'react';

const useTouch = () => {
  const [isTouched, setTouched] = React.useState(false);

  const bind = {
    onTouchStart: () => setTouched(true),
    onTouchEnd: () => setTouched(false),
  };

  return [isTouched, bind];
};

export default useTouch;
