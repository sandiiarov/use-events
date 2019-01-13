import * as React from 'react';
declare const useActive: () => [boolean, {
    onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseUp: (e: React.MouseEvent<Element, MouseEvent>) => void;
}];
export default useActive;
