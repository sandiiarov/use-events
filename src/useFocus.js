import React from 'react';

const useFocus = () => {
  const [isFocused, setFocused] = React.useState(false);

  const bind = {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };

  return [isFocused, bind];
};

export default useFocus;
