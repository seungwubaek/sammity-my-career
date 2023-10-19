import type { Metadata } from 'next';

import '@/styles/globals.scss';
import { Noto_Sans_KR } from 'next/font/google';

import Header from '@/components/units/Header';

const notoSansKr = Noto_Sans_KR({ subsets: [] });

export const metadata: Metadata = {
  title: 'Seungwu Baek',
  description: 'Career Page of Seungwu Baek, a computer engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
