'use client';

import { Button, RepoLink } from '@/components';
import { useKeyUp } from '@/hooks/useKeyPress';
import { usePassword } from '@/hooks/usePassword';

const Page = () => {
  const { password, generate, copyPassword } = usePassword();
  useKeyUp('Enter', copyPassword);
  useKeyUp('Space', generate);

  return (
    <main className="flex flex-col items-center justify-center static min-h-screen">
      <div className="flex flex-col items-center gap-6">
        <p className="text-4xl fnt-bold">{password}</p>
        <div className="flex gap-4">
          <Button onClick={copyPassword}>Copy to clipboard</Button>
          <Button onClick={generate}>Gimme somethin' different</Button>
        </div>
      </div>
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
