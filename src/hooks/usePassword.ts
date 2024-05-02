import { useCallback, useEffect, useMemo, useState } from 'react';

import { passwordGeneratorFactory } from '@/utils';
import { useCopy } from './useCopy';
import { useOptions } from './useOptions';

export const usePassword = () => {
  const { lower, upper, numeric, special, length } = useOptions();
  const [password, setPassword] = useState<string>('');
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

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  const copyPassword = useCallback(async () => {
    await copy(password ?? '');
    setPassword('Copied');
    setTimeout(() => setPassword(password), 750);
  }, [password]);

  return {
    password: password,
    generate: () => setPassword(generatePassword()),
    copyPassword,
  };
};
