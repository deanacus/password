import { useCallback, useEffect, useState } from 'react';

interface UseKeyPressOptions {
  targetKey: KeyboardEvent['key'];
}

const hasWindow = (): boolean => {
  return typeof window === 'object';
};

// code: KeyboardEvent['code'];
// callback: () => void|Promise<void>

type UseKeyUp = (
  code: KeyboardEvent['code'],
  callback: () => void | Promise<void>,
) => {};

export const useKeyUp = (
  targetCode: KeyboardEvent['code'],
  onKeyPress: () => void | Promise<void>,
) => {
  const handler = useCallback(
    ({ code }: KeyboardEvent) => {
      code === targetCode && onKeyPress();
    },
    [targetCode],
  );

  useEffect(() => {
    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, []);
};

export default function useKeyPress({
  targetKey,
}: UseKeyPressOptions): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey],
  );

  const upHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey],
  );

  useEffect(() => {
    if (!hasWindow()) {
      return;
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
}
