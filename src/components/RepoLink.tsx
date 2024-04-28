import Link from 'next/link';

type Props = React.PropsWithChildren<{ name: string }>;

export const RepoLink = ({ name, children }: Props) => {
  return (
    <Link
      href={`https://www.github.com/deanacus/${name}`}
      className="text-orange-500 light:hover:text-orange-400 dark:hover:text-orange-600"
    >
      {children}
    </Link>
  );
};
