import { Suspense } from 'react';

import { PasswordGenerator, RepoLink } from '@/components';

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center static min-h-screen">
      <Suspense>
        <PasswordGenerator />
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
