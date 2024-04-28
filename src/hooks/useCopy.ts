import { useCallback } from 'react';

export const useCopy = () => {
  return useCallback(async (value: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch (error) {
      console.warn('Copy failed', error);
      return;
    }
  }, []);
};
