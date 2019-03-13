import * as React from 'react';

const useScroll = (): [
  number,
  number,
  number,
  number,
  {
    onScorll: (e: React.UIEvent) => void;
  }
] => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const [offsetWidth, setOffsetWidth] = React.useState(0);

  const bind = {
    onScroll: (e: React.UIEvent) => {
      setScrollTop(e.target.scrollTop);
      setScrollLeft(e.target.scrollLeft);
      setOffsetHeight(e.target.offsetHeight);
      setOffsetWidth(e.target.offsetWidth);
    },
  };

  return [scrollTop, scrollLeft, offsetHeight, offsetWidth, bind];
};

export default useScroll;
