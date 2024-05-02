'use client';

import { Button } from '@/components';
import { OptionsProvider } from '@/context/Options';
import { useKeyPress, usePassword } from '@/hooks';

export const PasswordGenerator = () => {
  const { password, generate, copyPassword } = usePassword();
  useKeyPress('Enter', copyPassword);
  useKeyPress('Space', generate);
  return (
    <OptionsProvider>
      <div className="flex flex-col items-center gap-6">
        <p className="text-4xl fnt-bold">{password}</p>
        <div className="flex gap-4">
          <Button onClick={copyPassword}>Copy to clipboard</Button>
          <Button onClick={generate}>Gimme somethin' different</Button>
        </div>
      </div>
    </OptionsProvider>
  );
};
