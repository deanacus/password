import { useCallback, useEffect } from 'react';

type UseKeyPress = (
  code: KeyboardEvent['code'],
  onKeyPress: () => void | Promise<void>,
) => void;

export const useKeyPress: UseKeyPress = (code, onKeyPress) => {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === code) {
        onKeyPress();
      }
    },
    [code],
  );

  useEffect(() => {
    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, []);
};
