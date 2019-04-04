import * as React from 'react';
import { useDeepCompareEffect } from 'use-deep-compare';

const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  onClickOutside: (e: MouseEvent) => void
): [boolean] => {
  const [isActive, setActive] = React.useState(false);

  useDeepCompareEffect(() => {
    const mousedown = (e: MouseEvent) => {
      const test = refs.map(ref => {
        return (
          ref.current !== null && !ref.current.contains(e.target as HTMLElement)
        );
      });

      if (test.every(Boolean)) {
        setActive(true);
        onClickOutside(e);
      }
    };

    const mouseup = (e: MouseEvent) => {
      const test = refs.map(ref => {
        return (
          ref.current !== null && !ref.current.contains(e.target as HTMLElement)
        );
      });

      if (test.every(Boolean)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);

    return () => {
      document.removeEventListener('mousedown', mousedown);
      document.removeEventListener('mouseup', mouseup);
    };
  }, [refs, onClickOutside]);

  return [isActive];
};

export default useClickOutside;
