import React from 'react';
import {
  useActive,
  useFocus,
  useHover,
  useTouch,
  useClickOutside,
} from '../dist/use-events.esm';

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
  const [isActive, bind] = useClickOutside(console.log);

  return (
    <div {...bind}>
      You are {isActive ? 'clicking' : 'not clicking'} outside of this div
    </div>
  );
};
