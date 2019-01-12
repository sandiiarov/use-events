import * as React from 'react';

const useTouch = (): [
  boolean,
  {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  }
] => {
  const [isTouched, setTouched] = React.useState(false);

  const bind = {
    onTouchStart: (e: React.TouchEvent) => setTouched(true),
    onTouchEnd: (e: React.TouchEvent) => setTouched(false),
  };

  return [isTouched, bind];
};

export default useTouch;
