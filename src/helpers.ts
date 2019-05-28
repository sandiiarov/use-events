export function callAllEventHandlers<
  T extends React.ReactEventHandler<any>,
  E extends React.SyntheticEvent<any>
>(...fns: T[]) {
  return function callable(event: E) {
    fns.forEach(fn => {
      if (fn) {
        fn(event);
      }
    });
  };
}
