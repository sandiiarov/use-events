import * as React from 'react';

const useFocus = (): [
  boolean,
  {
    onFocus: (e: React.FocusEvent) => void;
    onBlur: (e: React.FocusEvent) => void;
  }
] => {
  const [isFocused, setFocused] = React.useState(false);

  const bind = {
    onFocus: (e: React.FocusEvent) => setFocused(true),
    onBlur: (e: React.FocusEvent) => setFocused(false),
  };

  return [isFocused, bind];
};

export default useFocus;
