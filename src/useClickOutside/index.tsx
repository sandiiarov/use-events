import * as React from 'react';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: (e: MouseEvent) => void
): [boolean] => {
  const [isActive, setActive] = React.useState(false);

  const mousedown = (e: MouseEvent) => {
    const { current } = ref;

    if (current !== null && !current.contains(e.target as HTMLElement)) {
      setActive(true);
      onClickOutside(e);
    }
  };

  const mouseup = (e: MouseEvent) => {
    const { current } = ref;

    if (current !== null && !current.contains(e.target as HTMLElement)) {
      setActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);

    return () => {
      document.removeEventListener('mousedown', mousedown);
      document.removeEventListener('mouseup', mouseup);
    };
  }, []);

  return [isActive];
};

export default useClickOutside;
