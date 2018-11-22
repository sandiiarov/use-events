import React from 'react';

const useClickOutside = (ref, onClickOutside) => {
  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);

    return () => {
      document.removeEventListener('mousedown', mousedown);
      document.removeEventListener('mouseup', mouseup);
    };
  }, []);

  const mousedown = event => {
    const { current } = ref;

    if (current !== null && !current.contains(event.target)) {
      setActive(true, onClickOutside(event));
    }
  };

  const mouseup = event => {
    const { current } = ref;

    if (current !== null && !current.contains(event.target)) {
      setActive(false);
    }
  };

  return [isActive];
};

export default useClickOutside;
