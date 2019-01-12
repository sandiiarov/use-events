import * as React from 'react';
declare const useTouch: () => [boolean, {
    onTouchStart: (e: React.TouchEvent<Element>) => void;
    onTouchEnd: (e: React.TouchEvent<Element>) => void;
}];
export default useTouch;
