'use client';

import { Button, RepoLink } from '@/components';
import { useKeyPress, usePassword } from '@/hooks';
import { Suspense } from 'react';

const Body = () => {
  const { password, generate, copyPassword } = usePassword();
  useKeyPress('Enter', copyPassword);
  useKeyPress('Space', generate);
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-4xl fnt-bold">{password}</p>
      <div className="flex gap-4">
        <Button onClick={copyPassword}>Copy to clipboard</Button>
        <Button onClick={generate}>Gimme somethin' different</Button>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center static min-h-screen">
      <Suspense>
        <Body />
      </Suspense>

      <div className="flex flex-col items-center text-xs gap-4 justify-center absolute inset-x-0 bottom-0 pb-11">
        <p>Built with ❤ by Dean Harris</p>
        <p>
          Check it out on <RepoLink name="password">Github</RepoLink>
        </p>
      </div>
    </main>
  );
};

export default Page;
