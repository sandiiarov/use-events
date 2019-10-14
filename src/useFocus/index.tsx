import React from 'react';

function useFocus(): [
  boolean,
  {
    onFocus: (e: React.FocusEvent) => void;
    onBlur: (e: React.FocusEvent) => void;
  }
] {
  const [isFocused, setFocused] = React.useState(false);

  const bind = React.useMemo(
    () => ({
      onFocus: (e: React.FocusEvent) => void setFocused(true),
      onBlur: (e: React.FocusEvent) => void setFocused(false),
    }),
    []
  );

  return [isFocused, bind];
}

export default useFocus;
