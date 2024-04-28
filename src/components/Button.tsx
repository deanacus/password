import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}>;

const className = [
  'border-orange-400',
  'light:hover:border-orange-500',
  'dark:hover:border-orange-300',
  'border',
  'rounded',
  'py-2',
  'px-4',
  'inline-flex',
  'items-center',
  'justify-center',
  'cursor-pointer',
  'light:hover:text-orange-500',
  'dark:hover:text-orange-300',
  'text-orange-400',
  'text-xs',
].join(' ');

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

/*

*/
