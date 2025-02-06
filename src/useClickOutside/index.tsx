import React from "react";

function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  onClickOutside: (e: MouseEvent) => void,
): [boolean] {
  const [isActive, setActive] = React.useState(false);

  const isOutside = React.useCallback(
    (e: MouseEvent) => {
      const test = refs.map((ref) => {
        return (
          ref.current !== null && !ref.current.contains(e.target as HTMLElement)
        );
      });

      return test.every(Boolean);
    },
    [refs],
  );

  const mousedown = React.useCallback(
    (e: MouseEvent) => {
      if (isOutside(e)) {
        setActive(true);
        onClickOutside(e);
      }
    },
    [isOutside, onClickOutside],
  );

  const mouseup = React.useCallback(
    (e: MouseEvent) => {
      if (isOutside(e)) {
        setActive(false);
      }
    },
    [isOutside],
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);

    return () => {
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("mouseup", mouseup);
    };
  }, [refs, onClickOutside]);

  return [isActive];
}

export default useClickOutside;
