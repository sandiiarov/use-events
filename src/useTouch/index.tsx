import React from 'react';

function useTouch(): [
  boolean,
  {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  }
] {
  const [isTouched, setTouched] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onTouchStart: (e: React.TouchEvent) => void setTouched(true),
      onTouchEnd: (e: React.TouchEvent) => void setTouched(false),
    }),
    []
  );

  return [isTouched, bind];
}

export default useTouch;
