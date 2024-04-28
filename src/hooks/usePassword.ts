import { generatePassword } from '@/utils';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useCopy } from './useCopy';

export const usePassword = () => {
  const [isClient, setIsClient] = useState(false);
  const params = useSearchParams();
  const length = parseInt(params.get('length') ?? '12');
  const [password, setPassword] = useState(generatePassword(length));
  const copy = useCopy();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyPassword = useCallback(async () => {
    await copy(password);
    setPassword('Copied');
    setTimeout(() => setPassword(password), 750);
  }, [password]);

  return {
    password: isClient ? password : '',
    generate: () => setPassword(generatePassword(length)),
    copyPassword,
  };
};
