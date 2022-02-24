import { RefObject, useEffect, useCallback } from 'react';

// We listen to the whole document for the click event so when the child in the tree gets clicked , it will get triggered because of the bubbling event (which document also get a click event)
// Then we will detect if the current Ref contains our clicked target element , if it does , then will bypass , otherwise , if user clicks on other things , it will trigger our callback
const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = useCallback(
    (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [callback, ref]
  );
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, handleClick]);
};

export default useClickOutside;
