import * as React from 'react';
declare const useFocus: () => [boolean, {
    onFocus: (e: React.FocusEvent<Element>) => void;
    onBlur: (e: React.FocusEvent<Element>) => void;
}];
export default useFocus;
