import React from 'react';

const useClickOutside = onClickOutside => {
  const [isActive, setActive] = React.useState(false);
  const ref = React.useRef(null);

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

  const bind = {
    ref,
  };

  return [isActive, bind];
};

export default useClickOutside;
