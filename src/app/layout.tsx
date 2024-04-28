import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const space = Space_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Password Generator',
};

type Props = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
