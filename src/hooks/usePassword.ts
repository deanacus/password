import { useCallback, useEffect, useMemo, useState } from 'react';

import { passwordGeneratorFactory } from '@/utils';
import { useCopy } from './useCopy';
import { useOptions } from './useOptions';

export const usePassword = () => {
  const [isClient, setIsClient] = useState(false);
  const { lower, upper, numeric, special, length } = useOptions();
  const copy = useCopy();

  const generatePassword = useMemo(() => {
    return passwordGeneratorFactory({
      lower,
      upper,
      numeric,
      special,
      length,
    });
  }, [lower, upper, numeric, special, length]);

  const [password, setPassword] = useState<string>(() => generatePassword());

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyPassword = useCallback(async () => {
    await copy(password ?? '');
    setPassword('Copied');
    setTimeout(() => setPassword(password), 750);
  }, [password]);

  return {
    password: isClient ? password : '',
    generate: () => setPassword(generatePassword()),
    copyPassword,
  };
};
