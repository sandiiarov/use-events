import React from 'react';
import {
  useActive,
  useFocus,
  useHover,
  useTouch,
  useClickOutside,
  useMousePosition,
} from '../src';

export const UseActiveExample = () => {
  const [isActive, bind] = useActive();

  return (
    <div {...bind}>
      You are {isActive ? 'clicking' : 'not clicking'} this div
    </div>
  );
};

export const UseFocusExample = () => {
  const [isFocused, bind] = useFocus();

  return (
    <div>
      <input {...bind} placeholder="Focus me" />
      <div>You are {isFocused ? 'focusing' : 'not focusing'} the input</div>
    </div>
  );
};

export const UseHoverExample = () => {
  const [isHovered, bind] = useHover();

  return (
    <div {...bind}>
      You are {isHovered ? 'hovering' : 'not hovering'} this div
    </div>
  );
};

export const UseTouchExample = () => {
  const [isTouched, bind] = useTouch();

  return (
    <div {...bind}>
      You are {isTouched ? 'touching' : 'not touching'} this div
    </div>
  );
};

export const UseClickOutsideExample = () => {
  const ref = React.useRef(null);
  const [isActive] = useClickOutside(ref, console.log);

  return (
    <div ref={ref}>
      You are {isActive ? 'clicking' : 'not clicking'} outside of this div
    </div>
  );
};

export const UseMousePositionExample = () => {
  const [x, y, bind] = useMousePosition();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 1px',
        width: 200,
        height: 200,
        cursor: 'crosshair',
      }}
      {...bind}
    >
      <b>x:</b> {x} <b>y:</b> {y}
    </div>
  );
};
